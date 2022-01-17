class Thread {
	constructor (hook) {
		this.hook = hook;
	}
	
	async update (...args) {
		await new Promise(this.hook(...args));
	}
}