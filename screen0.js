Screen.current = Screen.CLICK_SCREEN = new Screen(function () {
	env.background(0, 0, 0);

	this.drawButtons();
}, [
	new RectangleButton("Click to begin\nbrowser status:\nchrome - works\nfirefox - works but the audio's really laggy for me for some reason\nedge - works", 100, 100, 400, 400, () => {
		sequencer.init();
		Screen.current = Screen.MUSIC_SCREEN;
	})
]);