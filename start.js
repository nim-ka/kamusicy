// no-minify

env.frameRate(60);
env.angleMode = "degrees";

PJSCodeInjector.prototype.restart = () => {};

let fakeDraw = function () {
	// Credit to Squishy for showing me how to call on the Old Gods
	this.callAlerte();
	this.removeEars();
};

function updateEditor () {
	top.postMessage(JSON.stringify({ code: "var draw = " + fakeDraw.toString() + ";" }), "*");
}

updateEditor();