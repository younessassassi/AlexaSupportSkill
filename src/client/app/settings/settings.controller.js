/* jshint -W106, -W074 */
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
/*jshint multistr: true */
(function() {
    'use strict';

    var controllerId = 'SettingsController';

    angular
        .module('app.settings')
        .controller(controllerId, SettingsController);

    /* @ngInject */
    function SettingsController($rootScope, $mdDialog, confirmDialog, dataservice, logger) {
        var vm = this;

        var getLogFn = logger.getLogFn;
        var log = getLogFn(controllerId);
        vm.clearCache = clearCache;
        vm.showThemeDialog = showThemeDialog;

        activate();

        function activate() {
            log('Activated Settings Controller');
        }

        // set theme color
        function showThemeDialog(ev) {
            $mdDialog.show({
                controller: 'SettingsDialogController as vm',
                templateUrl: 'app/settings/theme-dialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }

        // clear application cache
        function clearCache() {
            var title = 'Clear Application Cache';
            var message = 'By clearing the application cache, you will delete ' +
                'all locally saved information including surveys and campaigns? ' +
                'If you would like to continue then please click "CLEAR CACHE" ' +
                'otherwise click on "CANCEL"';
            var okText = 'Clear Cache';
            var cancelText = 'Cancel';
            confirmDialog.confirmationDialog(title, message, okText, cancelText)
                .then(function() {
                    dataservice.removeAllItemsFromCache();
                });
        }
    }
})();
