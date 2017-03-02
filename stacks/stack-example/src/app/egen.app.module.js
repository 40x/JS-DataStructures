(function (angular) {
    'use strict';

    angular
        .module('egen.app', [
            'ui-notification',

            'egen.app.header',
            'egen.app.footer'

        ])
        .config(moduleConfig)
        .run(moduleRun);

    function moduleConfig($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.when('/', '/app');

        $urlRouterProvider.otherwise(function ($injector) {
            $injector.get('$state').go("egen.404");
        });

        $stateProvider
            .state('egen', {
                url: '/app',
                views: {
                    '@': {
                        templateUrl: 'app/egen.app.tmpl.html'
                    },
                    'header@egen': {
                        templateUrl: 'app/features/header/header.tmpl.html',
                        controller: 'HeaderController',
                        controllerAs: 'headerVm'
                    },
                    'footer@egen': {
                        templateUrl: 'app/features/footer/footer.tmpl.html',
                        controller: 'FooterController',
                        controllerAs: 'footerVm'
                    }
                }
            })
	        .state('egen.state1', {
		        url: '/state1',
		        template: 'State 1 Loaded'
	        })
	        .state('egen.state2', {
		        url: '/state2',
		        template: 'State 2 Loaded'
	        })
	        .state('egen.state3', {
		        url: '/state3',
		        template: 'State 3 Loaded'
	        })
	        .state('egen.state4', {
		        url: '/state4?test',
		        template: 'State 4 Loaded'
	        })
            .state('egen.404', {
                templateUrl: 'app/egen.404.tmpl.html'
            });


    }

    function moduleRun($rootScope, StateRecorder) {

	    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

		    // push to stack when state changed
		    StateRecorder.push({
			    event: event,
			    toState: toState,
			    toParams: toParams,
			    fromState: fromState,
			    fromParams: fromParams
		    });

		    console.info('loading state: ' + toState.name);

	    });

    }

})(angular);
