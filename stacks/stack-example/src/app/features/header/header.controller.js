(function (angular) {
	'use strict';

	angular
		.module('egen.app.header')
		.controller('HeaderController', HeaderController);

	function HeaderController(StateRecorder, $state) {
		var headerVm = this;

		headerVm.goBack = goBack;

		function goBack() {
			//pop current state

			if (StateRecorder.size) {
				var currentState = StateRecorder.pop();

				var prevState = StateRecorder.pop();

				if (prevState && prevState.fromState) {
					console.info('going back to: ' + prevState.toState.name);
					$state.go(prevState.toState, prevState.toParams);
				}
			}

		}
	}

})(angular);
