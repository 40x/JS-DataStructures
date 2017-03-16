// replace this with any queue you like, simple, circular or double ended

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

		clear() {
			items = [];
		}

		size() {
			return items.length;
		}
	}

	return Queue;
})();

var simpleQueue = new Queue();
simpleQueue.add(10);
simpleQueue.add(20);

console.log(simpleQueue.items); // prints undefined

console.log(simpleQueue.size()); // prints 2

console.log(simpleQueue.remove()); // prints 10

console.log(simpleQueue.size()); // prints 1

simpleQueue.clear();

console.log(simpleQueue.size()); // prints 0
