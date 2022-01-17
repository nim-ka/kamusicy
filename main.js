let message = {};

window.addEventListener("message", (evt) => {
	message = evt.data;
}, false);

let audioThread = new Thread(() => {
	sequencer.startUpdating();
	
	return (resolve) => {
		resolve();
	};
});

function convertTimeToX (time) {
	return (time - sequencer.time / 1000) * 50 + 300;
}

function convertFreqToY (freq) {
	return 980 - Math.log2(freq) * 85;
}

function visualizerView () {
	let track = sequencer.tracks[sequencer.currentTrack];
	
	for (let i = 0; i < track.notes.length; i++) {
		let note = track.notes[i];
		
		let startX = convertTimeToX(note.time);
		let endX = convertTimeToX(note.time + note.duration);
		
		let startY = convertFreqToY(note.frequency);
		let endY = startY;
		
		let portStartX = startX;
		let portEndX = endX;
		
		if (note.port) {
			portStartX = convertTimeToX(note.time + note.port.start);
			portEndX = convertTimeToX(note.time + note.port.end);
			
			endY = convertFreqToY(note.port.freq);
		}
		
		env.stroke({
			sin: env.color(255, 255, 255),
			sq: env.color(255, 0, 0),
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
		
		env.line(startX, startY, portStartX, startY);
		env.line(portStartX, startY, portEndX, endY);
		env.line(portEndX, endY, endX, endY);
	}
	
	env.stroke(255, 255, 255, 50);
	env.line(300, 0, 300, 600);
}

function waveformView () {
	let analyzer = sequencer.player.analyzer;
	
	if (!analyzer) {
		return;
	}
	
	env.strokeWeight(2);
	env.stroke(255, 255, 255);
	env.fill(0, 0, 0);
	env.rect(0, 0, 600, 100);
	
	analyzer.fftSize = 2048;
	let numPoints = analyzer.frequencyBinCount;
	let data = new Uint8Array(numPoints);
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

function trackManagerView () {
	env.strokeWeight(2);
	env.stroke(255, 255, 255);
	env.fill(0, 0, 0);
	env.rect(0, 550, 600, 50);
	
	env.strokeWeight(1);
	env.fill(255, 255, 255);
	env.text("Click on a track to play it:");
}

let gameThread = new Thread(() => {
	env.background(0, 0, 0);
	
	visualizerView();
	waveformView();
	trackManagerView();

	return (resolve) => {
		resolve();
	};
});

let begun = false;

env.draw = function () {
	if (message.code) {
		try {
			console.log(eval(message.code));
		} catch (err) {
			console.error(err);
		}
		
		message = {};
	}
	
	if (message.track) {
		try {
			sequencer.stop();
			sequencer.addTrack(message.trackName, message.track);
			sequencer.playTrack(message.trackName);
		} catch (err) {
			console.error(err);
		}
		
		message = {};
	}

	if (begun) {
		audioThread.update();
		gameThread.update();
	} else {
		clickScreen();
	}
};

env.mouseClicked = function () {
	if (!begun) {
		sequencer.init();
		begun = true;
	}
};

function clickScreen () {
	env.background(255, 0, 0);
	env.fill(0);
	env.text("Click to begin", 200, 200);
}