import { Mivka, Util, CanvasUtil } from './Mivka.js';
const mivka = new Mivka(document.getElementById('canvas-id'));
const util = new Util(); // You can also use Util as an abstract class with Util.prototype, but that takes significantly more typing.
const cUtil = new CanvasUtil(mivka.canvas);

// Variable declaration

mivka.update = function() {
	// ...
}

mivka.draw = function() {
	const canvas = mivka.canvas; // these only exist
	const ctx = mivka.context;   // to save typing
	// ...
}

mivka.init(); // Don't forget this!

