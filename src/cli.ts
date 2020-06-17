import sade from "sade";
import pkg from "../package.json";
import Controller from "./Controller";

const program = sade(pkg.name);
program.version(pkg.version);

const controller = new Controller();

program
	.command("hello <target>")
	.describe("Say hello")
	.example("hello world")
	.option("-r, --rude")
	.action((target, opts) => {
		controller.hello(target, opts.rude);
	});

const parse = () => program.parse(process.argv);
export { parse };
