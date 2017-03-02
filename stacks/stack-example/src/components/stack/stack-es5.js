"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
	var items = [];

	var Stack = function () {
		function Stack() {
			_classCallCheck(this, Stack);
		}

		_createClass(Stack, [{
			key: "push",
			value: function push(element) {
				items.push(element);
			}
		}, {
			key: "pop",
			value: function pop() {
				return items.pop();
			}
		}, {
			key: "peek",
			value: function peek() {
				return items[items.length - 1];
			}
		}, {
			key: "clear",
			value: function clear() {
				items = [];
			}
		}, {
			key: "size",
			value: function size() {
				return items.length;
			}
		}, {
			key: "search",
			value: function search(element) {
				return items.indexOf(element);
			}
		}]);

		return Stack;
	}();

	return Stack;
}();

window.Stack = Stack;