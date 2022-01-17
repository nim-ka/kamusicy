class AudioPlayer {
	constructor () {}
	
	init (analyzer = false) {
		if (this.audioCtx) {
			this.audioCtx.close();
		}
		
		this.audioCtx = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: "playback" });
		
		this.globalGain = this.audioCtx.createGain();
		
		if (analyzer) {
			this.analyzer = this.audioCtx.createAnalyser();
			this.analyzer.connect(this.audioCtx.destination);
			this.globalGain.connect(this.analyzer);
		} else {
			this.globalGain.connect(this.audioCtx.destination);
		}

		this.nodeDest = this.globalGain;
		
		AudioPlayer.addPulseOscillator(this.audioCtx);
	}
	
	update () {
		if (this.audioCtx.state != "running") {
			this.audioCtx.resume();
		}
	}
	
	setVolume (vol) {
		let time = this.audioCtx.currentTime;
		AudioPlayer.ramp(this.globalGain.gain, vol, time, time + 0.01);
	}
	
	playNote (note, start) {
		let gain = this.audioCtx.createGain();
		gain.gain.value = 0;
		gain.connect(this.nodeDest);
		
		let node = note.getNode(this.audioCtx, gain);
		node._onended = node.onended;
		node.onended = () => {
			node._onended();
			gain.disconnect();
		};
		
		let noteStart = this.audioCtx.currentTime + start;
		let noteEnd = noteStart + note.duration;
		
		let envelope = note.instrument.envelope;
		let endA = noteStart + envelope.A;
		let endD = endA + envelope.D;
		let endS = noteEnd - envelope.R;
		
		gain.gain.setValueAtTime(0, noteStart);
		
		if (endD > endS) {
			endD = endA;
			AudioPlayer.ramp(gain.gain, note.gain * envelope.S, noteStart, endA);
			AudioPlayer.ramp(gain.gain, 0, endS, noteEnd);
		} else {
			AudioPlayer.ramp(gain.gain, note.gain, noteStart, endA);
			AudioPlayer.ramp(gain.gain, note.gain * envelope.S, endA, endD);
			AudioPlayer.ramp(gain.gain, 0, endS, noteEnd);
		}

		gain.gain.setValueAtTime(0, noteEnd);
		
		if (note.dyn) {
			AudioPlayer.ramp(gain.gain, note.dyn.gainEnd * envelope.S, endD, endS);
		}
		
		if (note.port && node.frequency) {
			AudioPlayer.ramp(node.frequency,
				note.port.freq,
				noteStart + note.port.start,
				noteStart + note.port.end,
				-Math.log(Math.abs(0.029 / (1 - node.frequency.value / note.port.freq))));
		}
		
		if (note.vib && node.frequency) {
			let vibStart = noteStart + note.vib.start;
			let vibDur = noteEnd - vibStart;
			node.frequency.setValueCurveAtTime(AudioPlayer.getVibratoCurve(vibDur, note.vib.freq, node.frequency.value), vibStart, vibDur);
		}
		
		if (note.pwm && node.width) {
			if (note.pwm.start != -1) {
				//AudioPlayer.ramp(node.width, note.pwm.widthEnd, noteStart + note.pwm.start, noteEnd);
				let pwmStart = noteStart + note.pwm.start;
				node.width.setValueAtTime(note.pwm.widthStart, pwmStart);
				node.width.linearRampToValueAtTime(note.pwm.widthEnd, noteEnd);
			}
		}
		
		node.start(noteStart);
		node.stop(noteEnd + 1);
	}
}

AudioPlayer.ramp = function (param, val, start, end, coef) {
	param.setTargetAtTime(val, start, (end - start) / 3);
};

AudioPlayer.getVibratoCurve = function (dur, vibFreq, freq) {
	let points = Math.round(dur / vibFreq);
	
	if (points < 2) throw "Vibrato too slow";
	
	let buf = new Float32Array(points);
	
	let low = freq * (2 ** (-1 / 12));
	let mid = freq;
	let high = freq * (2 ** (1 / 12));
	
	for (let i = 0; i < points; i++) {
		buf[i] = [mid, high, mid, low][i % 4];
	}
	
	return buf;
};

AudioPlayer.addPulseOscillator = function (ac) {
	//Pre-calculate the WaveShaper curves so that we can reuse them.
	var pulseCurve=new Float32Array(256);
	for(var i=0;i<128;i++) {
		pulseCurve[i]= 0;
		pulseCurve[i+128]=1;
	}
	var constantOneCurve=new Float32Array(2);
	constantOneCurve[0]=1;
	constantOneCurve[1]=1;
	//Add a new factory method to the AudioContext object.
	ac.createPulseOscillator=function(){
		//Use a normal oscillator as the basis of our new oscillator.
		var node=this.createOscillator();
		node.type="sawtooth";

		//Shape the output into a pulse wave.
		var pulseShaper=ac.createWaveShaper();
		pulseShaper.curve=pulseCurve;
		node.connect(pulseShaper);

		//Use a GainNode as our new "width" audio parameter.
		var widthGain=ac.createGain();
		widthGain.gain.value=0; //Default width.
		node.width=widthGain.gain; //Add parameter to oscillator node.
		widthGain.connect(pulseShaper);

		//Pass a constant value of 1 into the widthGain – so the "width" setting
		//is duplicated to its output.
		var constantOneShaper=this.createWaveShaper();
		constantOneShaper.curve=constantOneCurve;
		node.connect(constantOneShaper);
		constantOneShaper.connect(widthGain);

		//Override the oscillator's "connect" and "disconnect" method so that the
		//new node's output actually comes from the pulseShaper.
		node.connect=function() {
			pulseShaper.connect.apply(pulseShaper, arguments);
		}
		node.disconnect=function() {
			pulseShaper.disconnect.apply(pulseShaper, arguments);
		}

		return node;
	}
}