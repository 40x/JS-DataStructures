"use strict";
var Queue = (() => {
	let items = [];

	class Queue {

		constructor() {

		}

		add(element) {
			items.push(element);
		}

		remove() {
			return items.shift();
		}

		peek() {
			return items[items.length - 1];
		}

		front() {
			return items[0];
		}

		clear() {
			items = [];
		}

		size() {
			return items.length;
		}
	}

	return Queue;
})();

module.exports = Queue;