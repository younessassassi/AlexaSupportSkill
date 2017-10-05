/* jshint -W106, -W074 */
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('htTopNav', htTopNav);

    /* @ngInject */
    function htTopNav () {
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            templateUrl: 'app/layout/top-nav/ht-top-nav.html'
        };

        /* @ngInject */
        function TopNavController($rootScope, $mdSidenav, $mdBottomSheet,
                                  $q, $window, dataservice, logger) {
            var vm = this;
            vm.title = 'AT&T Help';

            var getLogFn = logger.getLogFn;
            var log = getLogFn(TopNavController);

            vm.toggleSideMenu = toggleSideMenu;

            activate();

            function activate() {
                var promises = [];
                return $q.all(promises).then(function() {
                    log('Activated Top Nav Controller');
                });
            }

            function toggleSideMenu() {
                $mdSidenav('left').toggle();
                // var pending = $mdBottomSheet.hide() || $q.when(true);
                // pending.then(function() {
                //     $mdSidenav('left').toggle();
                // });
            }
        }
        return directive;
    }
})();
