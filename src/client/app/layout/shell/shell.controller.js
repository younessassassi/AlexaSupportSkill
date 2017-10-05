(function() {
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
        var logError = getLogFn(controllerId, 'error');
        var logSuccess = getLogFn(controllerId, 'success');
        var logWarning = getLogFn(controllerId, 'warning');
        // $rootScope.theme = 'darkTheme'; //lightBlueTheme  orangeTheme
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        $rootScope.showSplash = true;
        vm.navline = {
            title: config.appTitle,
            text: 'Created by Youness Assassi',
            link: '#'
        };

        activate();

        function activate() {
            logSuccess(config.appTitle + ' loaded!', null);
            hideSplash();
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                $rootScope.showSplash = false;
            }, 1000);
        }
    }
})();
