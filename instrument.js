class Instrument {
	constructor (type, envelope, waveformCos, waveformSin) {
		this.type = type;

		if (type == "customosc") {
			this.waveformCos = Float32Array.from(waveformCos);
			this.waveformSin = Float32Array.from(waveformSin);
		}
		
		this.envelope = envelope;
		
		this.getNode = {
			sine: this.getOsc,
			square: this.getOsc,
			triangle: this.getOsc,
			sawtooth: this.getOsc,
			customosc: this.getOsc,
			pulse: this.getPulseOsc,
			noise: this.getNoise,
			noise2: this.getNoise2,
			noise3: this.getNoise2,
			snoise2: this.getSNoise2,
			snoise3: this.getSNoise2,
		}[type];
	}
	
	getOsc (ctx, note, dest) {
		let osc = ctx.createOscillator();
		
		if (this.type == "customosc") {
			osc.setPeriodicWave(ctx.createPeriodicWave(this.waveformCos, this.waveformSin));
		} else {
			osc.type = this.type;
		}
		
		osc.frequency.value = note.frequency;
		
		osc.connect(dest);
		
		osc.onended = () => osc.disconnect();
		
		return osc;
	}
	
	getPulseOsc (ctx, note, dest) {
		let osc = ctx.createPulseOscillator();
		
		osc.frequency.value = note.frequency;
		osc.width.value = note.pwm ? note.pwm.widthStart : 0;
		
		osc.connect(dest);
		
		osc.onended = () => osc.disconnect();
		
		return osc;
	}
	
	getNoise (ctx, note, dest) {
		if (!ctx.noiseBuffer) {
			Instrument.createNoiseBuffer(ctx);
		}
		
		let noise = ctx.createBufferSource();
		noise.buffer = ctx.noiseBuffer;
		noise.loop = true;
		
		noise.connect(dest);
		
		noise.onended = () => noise.disconnect();
		
		return noise;
	}
	
	getNoise2 (ctx, note, dest) {
		if (!note.noiseBuffer) {
			note.noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * (note.duration + 0.5), ctx.sampleRate);
		Instrument.createNoise2Buffer(note.frequency, note.noiseBuffer.getChannelData(0));
		}
		
		let noise = ctx.createBufferSource();
		noise.buffer = note.noiseBuffer;
		noise.loop = true;
		
		noise.connect(dest);
		
		noise.onended = () => {
			noise.disconnect();
		}
		
		return noise;
	}
	
	getSNoise2 (ctx, note, dest) {
		if (!ctx.noise2Processor) {
			ctx.noise2Processor = ctx.createScriptProcessor(1024, 1, 1);
		}
		
		let type = this.type;
		this.type = "sine";
		let osc = this.getOsc(ctx, note, ctx.noise2Processor);
		this.type = type;
		
		let handler = type == "noise2" ? Instrument.createNoise2Buffer : Instrument.createNoise3Buffer;
		
		ctx.noise2Processor.onaudioprocess = (evt) => {
			handler(osc.frequency.value, evt.outputBuffer.getChannelData(0));
		};
		
		ctx.noise2Processor.connect(dest);
		
		osc.onended = () => {
			osc.disconnect();
			ctx.noise2Processor.disconnect();
		};
		
		return osc;
	}
}

Instrument.createNoiseBuffer = function (ctx) {
	let size = ctx.sampleRate * 10;
	ctx.noiseBuffer = ctx.createBuffer(1, size, ctx.sampleRate);
	let out = ctx.noiseBuffer.getChannelData(0);
	
	for (let i = 0; i < size; i++) {
		out[i] = Math.random() * 2 - 1;
	}
};

Instrument.createNoise2Buffer = function (freq, out) {
	let val = 0;
	let numSamplesPerChange = Math.round(Math.log2(432 / freq) * 12 + 1); // 24?
	
	for (let i = 0; i < out.length; i++) {
		out[i] = val;
		
		if (i % numSamplesPerChange == 0) { // A4 is 1, Ab4 is 2, G4 is 3, ...
			val = Math.random() < 0.5;
		}
	}
};

Instrument.createNoise3Buffer = function (freq, out) {
	let val = 0;
	let numSamplesPerChange = Math.round(Math.log2(432 / freq) * 12 + 1);
	
	out[0] = 0;
	
	for (let i = 1; i < out.length; i++) {
		out[i] = out[i - 1] + (val - out[i - 1]) * ((i - 1) % numSamplesPerChange + 1) / numSamplesPerChange;
		
		if (i % numSamplesPerChange == 0) { // A4 is 1, Ab4 is 2, G4 is 3, ...
			val = Math.random() < 0.5;
		}
	}
};

// enc = (a) => btoa(String.fromCharCode.apply(null, a.map(e => Math.round(e * 0x7FFF + 0x8000)).map(e => [e & 0xFF, e >> 8]).flat()))

Instrument.decode = function (str, envelope) {
	let bytes = Uint8Array.from(atob(str).split("").map((e) => e.charCodeAt(0)));
    let arr = Array.from(new Uint16Array(bytes.buffer, bytes.byteOffset, bytes.byteLength / 2));
	return new Instrument("customosc", envelope, Array(arr.length).fill(0), arr.map((e) => (e - 0x8000) / 0x7FFF));
};

Instrument.decodeFull = function (str1, str2, envelope) {
	let bytes1 = Uint8Array.from(atob(str1).split("").map((e) => e.charCodeAt(0)));
	let bytes2 = Uint8Array.from(atob(str2).split("").map((e) => e.charCodeAt(0)));
    let arr1 = Array.from(new Uint16Array(bytes1.buffer, bytes1.byteOffset, bytes1.byteLength / 2)).map((e) => (e - 0x8000) / 0x7FFF);
    let arr2 = Array.from(new Uint16Array(bytes2.buffer, bytes2.byteOffset, bytes2.byteLength / 2)).map((e) => (e - 0x8000) / 0x7FFF);
	return new Instrument("customosc", envelope, arr1, arr2);
};