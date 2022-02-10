function convertTimeToX (time) {
	return (time - sequencer.time / 1000) * 50 + 300;
}

// Eb10 ~= 0
// D8 ~= 100 = top of visualizer
// Ah-2 ~= 550 = bottom of visualizer
// A-3 ~= 600
function convertFreqToY (freq) {
	return 684 - Math.log2(freq) * 48; // 4 pixels per semitone
}

function drawNote (note, timeOffset) {
	let startTime = note.time + timeOffset;
	
	let startX = Math.round(convertTimeToX(startTime));
	let endX = Math.round(convertTimeToX(startTime + note.duration));
	
	let startY = Math.round(convertFreqToY(note.frequency));
	
	env.stroke({
		sin: env.color(255, 255, 255),
		sq: env.color(255, 127, 0),
		tri: env.color(0, 127, 255),
		tri2: env.color(0, 255, 255),
		saw: env.color(0, 255, 0),
		saw2: env.color(0, 200, 127),
		pulse: env.color(255, 150, 0),
		noise: env.color(127, 127, 127),
		noise2: env.color(127, 127, 127),
		noise3: env.color(127, 127, 127),
		snoise2: env.color(127, 127, 127),
		snoise3: env.color(127, 127, 127),
		mit: env.color(255, 0, 255),
	}[Object.keys(Sequencer.instruments).find((name) => Sequencer.instruments[name] == note.instrument)]);
	
	if (note.port) {
		let portStartX = Math.round(convertTimeToX(startTime + note.port.start));
		let portEndX = Math.round(convertTimeToX(startTime + note.port.end));
		let endY = Math.round(convertFreqToY(note.port.freq));
		
		env.line(startX, startY, portStartX, startY);
		env.line(portStartX, startY, portEndX, endY);
		env.line(portEndX, endY, endX, endY);
	} else {
		env.line(startX, startY, endX, startY);
	}
}

function visualizerView () {
	let y = convertFreqToY(getFrequency("G0") / 4);
	let i = 0;
	let keyColors = "WBWBWWBWBWWB";
	
	while (y > 75) {
		env.stroke(keyColors[i++ % 12] == "W" ? env.color(35, 35, 35) : env.color(25, 25, 25));
		env.line(0, y - 1, 600, y - 1);
		env.line(0, y, 600, y);
		env.line(0, y + 1, 600, y + 1);
		y -= 4;
	}
	
	let track = sequencer.tracks[sequencer.currentTrack];
	
	if (track) {
		for (let i = 0; i < track.notes.length; i++) {
			let offset = (Date.now() - sequencer.lastUpdate) / 1000;
			
			drawNote(track.notes[i], -offset - track.rewind);
			drawNote(track.notes[i], -offset);
			drawNote(track.notes[i], -offset + track.rewind);
		}
	}
	
	env.stroke(127, 127, 127);
	env.line(300, 0, 300, 600);
}

let analyzerMode = 0;

function waveformView () {
	let analyzer = sequencer.player.analyzer;
	
	if (!analyzer) {
		return;
	}
	
	env.strokeWeight(2);
	env.stroke(255, 255, 255);
	env.fill(0, 0, 0);
	env.rect(0, 0, 600, 100);
	
	let numPoints;
	let data;
	
	analyzer.fftSize = 2048;
	numPoints = analyzer.frequencyBinCount;
	data = new Uint8Array(numPoints);
	analyzer.getByteTimeDomainData(data);
	
	let xInterval = 600 / numPoints;
	
	env.strokeWeight(1);
	env.beginShape();
	
	for (let i = 0; i < numPoints; i++) {
		let x = i * xInterval;
		let y = data[i] * 40 / 128;
		
		env.vertex(x, y);
	}
	
	env.endShape();
}

function frequencyView () {
	let analyzer = sequencer.player.analyzer;
	
	if (!analyzer) {
		return;
	}
	
	env.strokeWeight(2);
	env.stroke(255, 255, 255);
	env.fill(0, 0, 0);
	env.rect(0, 0, 600, 100);
	
	let numPoints;
	let data;
	
	analyzer.fftSize = 4096;
	numPoints = analyzer.frequencyBinCount;
	data = new Uint8Array(numPoints);
	analyzer.getByteFrequencyData(data);
	
	let xInterval = 600 / numPoints;
	
	env.strokeWeight(1);
	env.beginShape();
	
	let lastX = -1;
	
	for (let i = 0; i < numPoints; i++) {
		let stretch = 20;
		
		let x = i * xInterval;
		x = 600 * Math.log(1 + x * (stretch - 1) / 600) / Math.log(stretch);
		
		if (x == lastX) {
			continue;
		}
		
		let y = 75 - data[i] * 35 / 128;
		
		env.vertex(x, y);
		
		lastX = x;
	}
	
	env.endShape();
}

function trackManagerView () {
	env.strokeWeight(2);
	env.stroke(255, 255, 255);
	env.fill(0, 0, 0);
	env.rect(0, 550, 600, 50);
	
	env.strokeWeight(1);
	env.fill(255, 255, 255);
	env.text("Click on a track to play it:", 300, 560);
}

let analyzerModeButton = new RectangleButton("toggle mode", 5, 80, 75, 15, () => analyzerMode ^= 1);

/*
class TrackButton extends RectangleButton {
	constructor (name, pos) {
		super(name, pos * 70 + 65, 570, 50, 20, () => {
			sequencer.stop();
			sequencer.playTrack(name);
		});
	}
	
	setPos (pos) {
		this.x = pos * 70 + 65;
	}
}
*/

class TrackButton extends RectangleButton {
	constructor (name, pos) {
		super(name, pos * 70 + 30, 570, 50, 20, () => {
			sequencer.stop();
			sequencer.playTrack(name);
		});
	}
	
	setPos (pos) {
		this.x = pos * 70 + 30;
	}
}

let trackButtons = Object.keys(sequencer.tracks).map((name, idx) => new TrackButton(name, idx));

Screen.MUSIC_SCREEN = new Screen(function () {
	env.background(0, 0, 0);
	
	visualizerView();
	
	if (analyzerMode == 0) {
		frequencyView();
	} else {
		waveformView();
	}
	
	trackManagerView();
	
	this.drawButtons();
}, [analyzerModeButton, trackButtons]);