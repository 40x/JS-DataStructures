(function() {
	'use strict';

	angular.module('egen.app')
		.service('StateRecorder', StateRecorder);

	function StateRecorder($window) {
		
		var self = this;
		
		self.stack = new $window.Stack();

		return self.stack;
	}
	
})();