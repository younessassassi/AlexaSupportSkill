/*jshint multistr: true */
(function() {
    'use strict';

    var controllerId = 'SettingsDialogController';

    angular
        .module('app.settings')
        .controller(controllerId, SettingsDialogController);

    /* @ngInject */
    function SettingsDialogController($rootScope, $mdDialog, $window,
                                      confirmDialog, dataservice, logger) {
        var vm = this;
        var getLogFn = logger.getLogFn;
        var log = getLogFn(controllerId);
        vm.dismiss = dismiss;
        vm.setTheme = setTheme;
        vm.themes = [
            {name: 'darkTheme', value: 'Dark'},
            {name: 'dalightBlueTheme', value: 'Light Blue'},
            {name: 'orangeTheme', value: 'Orange'}
        ];
        // vm.openMenu = openMenu;

        activate();

        function activate() {
            log.info('Activated Settings Dialog Controller');
        }

        function setTheme(theme) {
            $rootScope.theme = theme;
        }

        function dismiss() {
            $mdDialog.cancel();
        }
    }
})();
