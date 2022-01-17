class Note {
	constructor (instrument, freq, gain, time, duration, dyn, port, vib, pwm) {
		this.instrument = instrument;
		this.frequency = freq;
		this.gain = dyn ? dyn.gainStart : gain;
		this.time = time;
		this.duration = duration;
		this.dyn = dyn;
		this.port = port;
		this.vib = vib;
		this.pwm = pwm;
	}
	
	getNode (ctx, dest) {
		return this.instrument.getNode(ctx, this, dest);
	}
}

function getFrequency (note) {
	if (+note) {
		return +note;
	}
	
	let letter = note[0];
	let num = "C_D_EF_G_A_B".indexOf(letter.toUpperCase());
	let octave = 4;

	if (!isNaN(+note[1])) {
		octave = +note[1];
	} else {
		if (note[1] == "#") {
			num++;
		} else if (note[1] == "h") {
			num += 0.5;
		} else if (note[1] == "d") {
			num -= 0.5;
		} else if (note[1] == "b") {
			num--;
		}
		
		octave = +note[2];
	}
	
	return 432 * (2 ** ((num + 3) / 12 + (octave - 5)));
}