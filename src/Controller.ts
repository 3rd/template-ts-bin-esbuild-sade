class Controller {
	hello(target: string, rude = false) {
		if (rude) {
			console.log(`Hello ${target}, you dummy!`);
		} else {
			console.log(`Hello ${target}.`);
		}
	}
}

export default Controller;
