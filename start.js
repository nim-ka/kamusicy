// no-minify

if (!(env instanceof Processing)) {
	return;
}

env.size(600, 600);
env.frameRate(60);
env.angleMode = "degrees";

PJSCodeInjector.prototype.restart = () => {};

let fakeDraw = function () {
	// Credit to Squishy for giving me the idea to make something using WebAudio
	// Credit to alerte for something else
	// Code is at https://github.com/nim-ka/kamusicy
	this.callAlerte();
};

function updateEditor () {
	top.postMessage(JSON.stringify({ code: "var draw = " + fakeDraw.toString() + ";" }), "*");
}

updateEditor();