/**
 * Created by kashyapmukkamala on 2/17/17.
 */

var Stack = (() => {
	let items = [];

	class Stack {

		constructor() {

		}

		push(element) {
			items.push(element);
		}

		pop() {
			return items.pop();
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

		search(element) {
			return items.indexOf(element);
		}
	}

	return Stack;
})();

var stack = new Stack();
stack.push(10);
stack.push(20);


console.log(stack.items); // prints undefined

console.log(stack.size()); // prints 2

console.log(stack.search(10)); // prints 0

console.log(stack.search(100)); // prints -1

console.log(stack.pop()); // prints 20

console.log(stack.size()); // prints 1

stack.clear();

console.log(stack.size()); // prints 0