(function () {
    'use strict';

    var controllerId = 'ShellController';

    angular
        .module('app.layout')
        .controller(controllerId, ShellController);

    /* @ngInject */
    function ShellController($rootScope, $timeout, config, logger) {
        var vm = this;

        var getLogFn = logger.getLogFn;
        var log = getLogFn(controllerId);

        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        $rootScope.showSplash = true;
        $rootScope.appLogo = 'images/TU-logo-med.png';
        vm.navline = {
            title: config.appTitle,
            text: 'Created by Youness Assassi',
            link: '#'
        };

        activate();

        function activate() {
            if (config.isAdminApp) {
                $rootScope.largeScreenWidth = 80;
                $rootScope.extraLargeScreenWidth = 60;
                $rootScope.isSideViewUsed = true;
            } else {
                $rootScope.largeScreenWidth = 60;
                $rootScope.extraLargeScreenWidth = 50;
                $rootScope.isSideViewUsed = false;
            }
            log(config.appTitle + ' loaded!');
            log('config', config);
            hideSplash();
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function () {
                $rootScope.showSplash = false;
            }, 1000);
        }
    }
})();
