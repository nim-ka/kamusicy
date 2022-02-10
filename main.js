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

let gameThread = new Thread(() => {
	Screen.current.draw();
	
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

	audioThread.update();
	gameThread.update();
};

env.mouseClicked = function () {
	Screen.current.clickHandler(env.mouseX, env.mouseY);
};