class Screen {
	static current;
	
	constructor (draw, buttons = []) {
		this.draw = draw;
		this.buttons = buttons;
	}
	
	drawButtons () {
		let buttons = this.buttons.flat();
		
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].draw();
		}
	}
	
	clickHandler (x, y) {
		let buttons = this.buttons.flat();
		
		for (let i = 0; i < buttons.length; i++) {
			if (buttons[i].test(x, y)) {
				buttons[i].callback();
				return;
			}
		}
	}
}

class Button {
	constructor (draw, test, callback) {
		this.active = true;
		
		this.draw = function (...args) {
			return this.active && draw.apply(this, args);
		};
		
		this.test = function (...args) {
			return this.active && test.apply(this, args);
		};
		
		this.callback = callback;
	}
	
	activate () {
		this.active = true;
	}
	
	deactivate () {
		this.active = false;
	}
}

class RectangleButton extends Button {
	constructor (text, x, y, w, h, callback) {
		super(function () {
			env.fill(200, 200, 200);
			env.strokeWeight(1);
			env.stroke(0, 0, 0);
			env.rect(this.x, this.y, this.w, this.h, 5);
			env.fill(0, 0, 0);
			env.textAlign(3, 3);
			env.text(this.text, this.x + this.w / 2, this.y + this.h / 2);
		}, function (mx, my) {
			return mx > this.x && my > this.y && mx < this.x + this.w && my < this.y + this.h;
		}, callback);
		
		this.text = text;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
}