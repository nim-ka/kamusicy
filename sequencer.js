class Sequencer {
	static startOffset = 2000;
	
	constructor (player) {
		this.player = player || new AudioPlayer();
		this.tracks = {};
		this.currentTrack = null;
		this.time = -Sequencer.startOffset;
		this.interval = false;
		this.reset = false;
		this.initialized = false;
		this.lastUpdate = Date.now();
	}
	
	init () {
		this.player.init(true);
		this.initialized = true;
	}
	
	startUpdating () {
		if (!this.interval && this.initialized) {
			this.interval = setInterval(() => {
				this.update();
			}, Sequencer.updateFreq * 1000); // 10 times a second
		}
	}
	
	stopUpdating () {
		if (this.interval) {
			clearInterval(this.interval);
		}
	}
	
	update () {
		this.player.update();
		
		if (this.currentTrack === null) {
			return;
		}
		
		if (this.reset) {
			this.time = -Sequencer.startOffset;
			this.reset = false;
		}
		
		let track = this.tracks[this.currentTrack];
		
		if (!track) {
			return;
		}
		
		let time = this.time / 1000;
		
		for (let i = 0; i < track.notes.length; i++) {
			let note = track.notes[i];
			
			if (note.time >= time && note.time <= time + Sequencer.updateFreq) {
				this.player.playNote(note, note.time - time);
			}
			
			if (note.time + track.rewind >= time && note.time + track.rewind <= time + Sequencer.updateFreq) {
				this.player.playNote(note, note.time + track.length - time);
			}
		}
		
		if (time + Sequencer.updateFreq > track.length) {
			this.time -= track.rewind * 1000;
			this.player.init(true);
		}
		
		this.time += Sequencer.updateFreq * 1000;
		this.lastUpdate = Date.now();
	}
	
	addTrack (trackName, track) {
		let parsed = {};
		
		track = track.split("\n");
		
		let bpm = eval(track.shift()) + Math.PI;
		parsed.length = eval(track.shift()) * 60 * 4 / bpm; // measures => seconds
		parsed.loopStart = eval(track.shift()) * 60 * 4 / bpm;
		parsed.rewind = parsed.length - parsed.loopStart + Sequencer.startOffset / 1000;
		
		parsed.notes = [];
		
		let gain = Sequencer.dynTable.n;
		let time = 0;
		let instrs = [Sequencer.instruments.sin];
		let width = -1;
		
		let legato = false;		
		let legatoSuper = false;
		let oct = false;
		let dyn;
		
		let loops = [];
		
		for (let i = 0; i < track.length; i++) {
			if (";#".includes(track[i][0])) continue;
			
			let line = track[i].replace(/^\s+/, "").split(" ");
			
			switch (line[0]) {
				case "d": { // d <F|f|M|n|m|p|P>
					gain = Sequencer.dynTable[line[1]] || eval(line[1]);
					break;
				}
				
				case "ds": { // ds <from> <to>
					dyn = {
						gainStart: Sequencer.dynTable[line[1]] || eval(line[1]),
						gainEnd: Sequencer.dynTable[line[2]] || eval(line[2]),
					};
					break;
				}
				
				case "nv": { // nv <instrs>
					time = 0;
					instrs = line.slice(1).map(e => Sequencer.instruments[e]);
					break;
				}
				
				case "i": { // i <instrs>
					instrs = line.slice(1).map(e => Sequencer.instruments[e]);
					break;
				}
				
				case "pw": { // pw <width in %>
					width = convertWidth(eval(line[1]));
					break;
				}
				
				case "ls": {
					loops.push({ start: i, num: eval(line[1]) });
					break;
				}
				
				case "le": {
					if (--loops[loops.length - 1].num) {
						i = loops[loops.length - 1].start;
					} else {
						loops.pop();
					}
					
					break;
				}
				
				case "legato": {
					if (line[1] == "on") {
						legato = true;
					} else if (line[1] == "super") {
						legatoSuper = line[2] == "on";
					} else {
						legato = false;
						legatoSuper = false;
					}
					
					break;
				}
				
				case "oct": {
					if (line[1]) {
						oct = line[1] == "on" ? 2 : eval(line[1]);
					} else {
						oct = false;
					}
					
					break;
				}
				
				case "cn":
				case "n": { // n <length (beats)> <notes, comma sep.> [markings: sSpPvmdlO]
					let markPos = 3;
					let markings = line[markPos] || "";
					
					let port;
					
					if (markings.includes("p")) { // n <length> <notes> p <start (beats)> <notes to bend to>
						port = {
							start: 60 * 4 * eval(line[markPos + 1]) / bpm,
							freqs: line[markPos + 2].split(",").map(getFrequency)
						};
						
						markings = line[markPos += 3] || "";
					}
					
					if (markings.includes("P")) { // n <length> <notes> P <start (beats)> <end (beats)> <notes to bend to>
						port = {
							start: 60 * 4 * eval(line[markPos + 1]) / bpm,
							end: 60 * 4 * eval(line[markPos + 2]) / bpm,
							freqs: line[markPos + 3].split(",").map(getFrequency)
						};
						
						markings = line[markPos += 4] || "";
					}
					
					let vib;
					
					if (markings.includes("v")) { // n <length> <notes> v <start (beats)> [freq]
						vib = {
							start: 60 * 4 * eval(line[markPos + 1]) / bpm,
							freq: +line[markPos + 2] || 0.01 // seconds per change
						};
						
						markings = line[markPos += (+line[markPos + 2] ? 3 : 2)] || "";
					}
					
					let pwm;
					
					if (width != -1) {
						pwm = {
							start: -1,
							widthStart: width
						};
					}
					
					if (markings.includes("m")) { // n <length> <notes> m <start width> <start (beats)> <end width>
						pwm = {
							start: line[markPos + 2] ? 60 * 4 * eval(line[markPos + 2]) / bpm : -1,
							widthStart: convertWidth(eval(line[markPos + 1])),
							widthEnd: convertWidth(eval(line[markPos + 3]))
						};
						
						markings = line[markPos += 4] || "";
					}
					
					let stac = markings.includes("s") ? 0.5 : markings.includes("S") ? 0.25 : 1;
					
					let beats = eval(line[1]);
					let dur = 60 * 4 * beats / bpm;
					let len = stac * dur - (markings.includes("l") || legato ? legatoSuper ? -0.02 : 0 : 0.015);
					
					let freqs = line[2].split(",").map(getFrequency);
					
					if (oct) {
						for (let j = 0, l = markings.includes("O") ? 1 : freqs.length; j < l; j++) {
							freqs.push(freqs[j] * oct);
							if (port) port.freqs.push(port.freqs[j] * oct);
						}
					}
					
					for (let j = 0; j < freqs.length; j++) {
						for (let k = 0; k < instrs.length; k++) {
							parsed.notes.push(new Note(
								instrs[k],
								freqs[j],
								gain,
								time,
								len,
								dyn,
								port ? { start: port.start, end: port.end || len, freq: port.freqs[j] } : undefined,
								vib,
								pwm));
						}
					}
					
					if (!markings.includes("d")) dyn = undefined;
					
					if (line[0] == "n") time += dur;
					break;
				}
				
				case "r": { // r <length (beats)>
					let beats = eval(line[1]);
					let dur = 60 * 4 * beats / bpm;
					time += dur;
					break;
				}
				
				default: {
					break;
				}
			}
		}
		
		this.tracks[trackName] = parsed;
	}
	
	playTrack (trackName) {
		if (this.currentTrack != trackName) {
			this.currentTrack = trackName;
			this.reset = true;
		}
	}
	
	stop () {
		this.currentTrack = null;
		this.reset = true;
	}
	
	setVolume (vol) {
		this.player.setVolume(vol);
	}
}

Sequencer.updateFreq = 1 / 10;

Sequencer.dynTable = {
	"F": 0.4,
	"f": 0.3,
	"M": 0.2,
	"n": 0.15,
	"m": 0.1,
	"p": 0.05,
	"P": 0.025
};

Sequencer.instruments = {
	sin: new Instrument("sine", { A: 0.01, D: 0.05, S: 0.95, R: 0.01 }),
	sq: new Instrument("square", { A: 0.01, D: 0.05, S: 0.85, R: 0.01 }),
	tri: new Instrument("triangle", { A: 0.01, D: 0.05, S: 0.95, R: 0.01 }),
	tri2: Instrument.decode("AID//wCAVlUAgJmZAIC3bQCAOY4AgF10AIDZiQ==", { A: 0.01, D: 0.05, S: 0.95, R: 0.01 }), // https://www.wolframalpha.com/input/?i=y+%3D+sum+from+n%3D0+to+20+of+%28-1%29%5En+sin%28%282n+%2B+1%29x%29+%2F+%282n+%2B+1%29
	saw: new Instrument("sawtooth", { A: 0.01, D: 0.05, S: 0.80, R: 0.01 }),
	saw2: Instrument.decode("AID//wFAqqoAYJmZq2pJkgBwOY4zc6OL", { A: 0.01, D: 0.05, S: 0.85, R: 0.01 }), // less punchy sawtooth
	pulse: new Instrument("pulse", { A: 0.01, D: 0.05, S: 0.85, R: 0.01 }),
	noise: new Instrument("noise", { A: 0.01, D: 0.05, S: 0.60, R: 0.01 }),
	noise2: new Instrument("noise2", { A: 0.05, D: 0.05, S: 0.60, R: 0.01 }),
	noise3: new Instrument("noise3", { A: 0.05, D: 0.05, S: 0.60, R: 0.01 }), // less harsh, prob better for ports
	snoise2: new Instrument("snoise2", { A: 0.05, D: 0.05, S: 0.60, R: 0.01 }),
	snoise3: new Instrument("snoise3", { A: 0.05, D: 0.05, S: 0.60, R: 0.01 }),
	mit: Instrument.decodeFull(
		"AIDUUsHDqIEagw+GFIc7gWOCSYAKgXKCjYLNgFaArYAPgIOBtoE4gNuA34BJgEeAWYFygBqBTIFUgXqAFoBggBKARIBBgIKBloGzgC6A8oBzgFKAHYCfgESAK4CXgLOAR4HTgE6AO4CKgPGASoAWgDSAR4AKgCeAJ4AvgL2AYIA9gACAW4ApgCWAbIBGgByAX4B0gCOAIIAIgCeAL4COgEGAKYCbgHWAJ4AQgAWAHYBggC+AMoBdgBiAM4AqgBaAK4AHgAqARYADgD+AAIAXgC6AEYAWgCmAMIBHgGaALIAtgGGAV4ATgECAIoAfgBOAK4AogCiAU4BOgHyAOYAmgE2AJ4AngCSAJYAfgBGAB4AHgAWAM4BZgFiAEoA/gAOAJYBKgCiAA4ASgCKAFoAogA6ABoAAgB+ACYACgA6AJIA8gDOAC4AcgBiACYAfgDSAP4A5gCeAC4AagDWAOYAfgBOAFYAEgBeAFoABgAOAB4AEgCmAHIAfgBOAHIApgDeALYAEgASAFYAKgASAG4ATgAOAFYArgE6AJ4AHgBCAC4AQgB+AHYACgAKAE4AagA2ABoAlgBmAF4AXgDaAH4AXgBOAA4ALgDSAF4AcgAGABYA3gBCAIYALgBWAA4AMgAOAAYAYgAuAAYACgAeAA4AEgBmAAYARgAeAD4AKgAuAD4AwgBaACoAegBOAFIADgAmAC4AOgBCACoADgAmAHIACgBqAC4AIgAyAH4ALgB6AA4AdgCuAJ4AdgAmAHYAEgAmAKoAZgAaAF4AVgBiAKoAegA6ABYAAgAqAFIAlgCGABYAGgASAAoALgAyAE4AHgBuAIYAMgBSADIACgAeAAIAggCeAGoAXgA6ACoAMgA6ABYAIgCOAKYAJgBeAMYAWgAeAHIAwgA+ALoBJgD2AEIAJgAeAAYALgDiAMoAJgCOACoAHgAKAA4AdgBWAB4AVgAyAAYAHgAeAHYATgA6AGIAcgAKAIIAlgBaAHYAqgB2AIYAWgBeAEIAFgAiAK4AagB6ALIAXgAqAEIAhgCWAD4AEgAmADIACgAeADoAcgA6ABIATgB2ABIAQgA+AJYAQgBGAIoAUgAKAAoAVgAOAD4AYgByAHYAKgAiAFoAJgAaAC4AUgBuABoAfgA2AIYAcgA6AA4AGgAqAEYAHgAiAIIAWgBCAD4AGgAqACIADgAqAEoACgAuAG4AegAKABIAGgAeABIAcgBeADIARgBiAEoAjgCiAC4AZgBKABoABgAOACYALgASABYAJgAqADIAIgBiAB4ADgAqAAYADgAKABIAFgASAF4AXgAiAD4AGgAiAEYAYgBqAGIADgAqAD4A=",
		"AIAAgASDWpF5hJ+GnodJgnaAUoLsgUaBu4C1gIiCB4HWgLOAf4BWgPKBRICggdSAEIAUgNeADIBbgAyABoCxgH+ApYBSgQmByIA4gBeABoCGgAOBZIBigCeAIYBcgA2ApIC9gDOAU4AUgEWAfIACgDGAiIABgbKAmIAagDOAGYA3gDaALoAggCCAVIB2gFeAOIBBgEWAIYAigDiAHoA8gA2AjIBBgAKAAYAkgCeANoBngDuANoAVgGeAIoATgA2APIBfgAqAEYAUgC6AN4AHgA+AJoAAgCCAAoBjgEyACoA7gF6AMYARgBiAHYASgAuACYABgDOAcIA8gA2AFIA5gDyAHYAZgAiAAIAGgBSANIAngCuAMIAcgBSANoBEgHqAW4AIgBGAHoAhgBiAQ4AxgBKAE4AZgBuANYBigByAGIAegAyABIATgBeABoADgCGANoBGgBKADoAkgDeAAYAKgAKAGoACgA2AEIASgBqAKoAUgBSAN4AZgBWAFIAvgBCAAoAqgCCACYATgBGABoAegB2AD4AAgA6AA4AAgAqAB4AvgDeAIoALgBmAHoAZgCCAKIAUgBWAEYAJgAiAB4AOgA+AG4ABgA6AG4AYgA+ABYABgBSAH4A3gCOAA4AEgB2AGIAAgAaACYACgBOAHoA3gBGAEoAYgBOAFoAQgA2AIoAGgAuAHoARgAGAAoABgBCACYAXgCuAEYAMgA6AD4A7gCeACYAcgA2ABIANgAaAGoAIgCyAP4AzgBuAKIAcgDGAIYANgAWAHIAHgAeAHIA0gCyAIoAKgA+AEIAUgB2ABYAdgBOABoAVgAuAC4APgBiAB4AJgBKAGYAkgAqADoAfgDKAHIAKgA6ACIAGgAuAFoAEgAeAEoAOgBOAEYAmgC2AEoABgBqAEoAagBuAEIAbgAiAHIAjgCGAFoACgByAIYAdgAOAGoAagBaADIACgAWAEIAFgBOAA4AEgBSAFIADgAyAAoAEgAeAIIAOgBOACYAGgBmACoABgAeABYAIgAKAG4ASgAWABoAMgAWAJIAQgAaAC4ALgAGAC4AGgBOAE4AWgAuAB4AIgACAFoAigBWABIAHgAeABIAOgASACYAZgAKACYAQgBGADYALgAmAD4AbgAuACIAagBKACYAFgBOAGoASgBiACIAOgBWABoAAgAGAFIAIgA6AFIAhgBuABYAEgASAFYAUgAiAAYAXgAWAAoACgAeAC4AMgBaACYACgAmAC4ABgAWACYAKgAqAAoASgBGAEoASgAqAAoAAgCSAHIAHgAKAAYALgBCABoAEgBqAIYAKgBuAH4AQgBGAAYAEgAqAD4ATgAeAA4A=",
		{ A: 0.01, D: 0.05, S: 0.60, R: 0.01 }),
};

function convertWidth (percent) {
	return 2 * (percent / 100) - 1;
}