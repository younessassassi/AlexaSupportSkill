(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);

    /* @ngInject */
    function SidebarController($state, $mdSidenav, routerHelper) {
        var vm = this;

        vm.isCurrent = isCurrent;
        vm.menuItemClicked = menuItemClicked;

        var states = routerHelper.getStates();

        activate();

        function activate() {
            getNavRoutes();
        }

        function menuItemClicked(route) {
            if (!$mdSidenav('left').isLockedOpen()) {
                $mdSidenav('left').close();
            }
            $state.go(route);
        }

        function getNavRoutes() {
            vm.navRoutes = states.filter(function (r) {
                return r.settings && r.settings.nav;
            }).sort(function (r1, r2) {
                return r1.settings.nav - r2.settings.nav;
            });
        }

        function isCurrent(route) {
            if (!route.title || !$state.current || !$state.current.title) {
                return '';
            }
            var currentStateName = route.name;
            var navStateName = $state.current.name;

            return currentStateName === navStateName ? 'md-accent md-hue-3 md-raised' : '';
        }
    }
})();
