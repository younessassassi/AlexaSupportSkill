(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        var states = [{
            state: 'dashboard',
            config: {
                url: '/',
                templateUrl: 'app/dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'vm',
                title: 'dashboard',
                settings: {
                    nav: 1,
                    content: '<i class="fa fa-dashboard"></i> Dashboard'
                }
            }
        }];

        // // Defines the default page to be the dashboard
        // var optionalState = {
        //     state: 'home',
        //     config: {
        //         url: '/',
        //         /* @ngInject */
        //         controller: function ($location) {
        //             $location.path('/dashboard');
        //         },
        //         controllerAs: 'vm'
        //     }
        // };

        // states.unshift(optionalState);
        return states;
    }
})();
