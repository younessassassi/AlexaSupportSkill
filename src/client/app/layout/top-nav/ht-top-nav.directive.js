/* jshint -W106, -W074 */
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
(function () {
    'use strict';
    var controllerId = ' TopNavController';
    angular
        .module('app.layout')
        .directive('htTopNav', htTopNav);

    /* @ngInject */
    function htTopNav() {
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            templateUrl: 'app/layout/top-nav/ht-top-nav.html'
        };

        /* @ngInject */
        function TopNavController($rootScope, $mdSidenav, 
            $q, $state, $location, logger) {
            var vm = this;

            var getLogFn = logger.getLogFn;
            var log = getLogFn(controllerId);
            var logWarning = getLogFn(controllerId, 'warning');

            vm.title = 'PLE Surveys';

            vm.toggleSideMenu = toggleSideMenu;
            vm.goBack = goBack;

            // vm.leftNavButtonClicked = leftNavButtonClicked;

            activate();

            function activate() {
                var promises = [];
                return $q.all(promises).then(function () {
                    log('Activated Top Nav Controller');
                });
            }

            function goBack() {
                var stateHistoryLength = $rootScope.history.length;
                var prevStateObj = $rootScope.history.length > 0 ?
                    $rootScope.history[$rootScope.history.length - 1] : null;
                if (!!prevStateObj) {
                    var state = prevStateObj.state.name;
                    var params = prevStateObj.params;
                    $state.go(state, params);
                } else {
                    // no previous states were found
                    logWarning('No previous states were found', prevStateObj, true);
                    $location('/');
                }
            }

            function toggleSideMenu() {
                $mdSidenav('left').toggle();
            }

            // function leftNavButtonClicked() {
            //     $rootScope.$broadcast(ATT_BROADCAST.leftNavBtnClicked, $rootScope.attLeftNavButtonConfig);
            // }
        }
        return directive;
    }
})();
