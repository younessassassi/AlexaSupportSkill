/* jshint -W106, -W074 */
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
/*jshint multistr: true */
(function () {
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
        var logError = getLogFn(controllerId, 'error');
        var logSuccess = getLogFn(controllerId, 'success');
        var logWarning = getLogFn(controllerId, 'warning');
        vm.clearCache = clearCache;
        vm.showThemeDialog = showThemeDialog;
        vm.getPollingInterval = getPollingInterval;
        vm.setPollingInterval = setPollingInterval;

        activate();

        function activate() {
            getPollingInterval();
            log('Activated Settings Controller');
        }

        function getPollingInterval() {
            dataservice.getPollingInterval()
                .then(function (response) {
                    vm.pollingInterval = response;
                    log('vm.pollingInterval', vm.pollingInterval);
                }, function() {
                    vm.pollingInterval = 10;
                });
        }

        function setPollingInterval() {
            dataservice.setPollingInterval(vm.pollingInterval)
                .then(function (response) {
                    logSuccess('Polling Interval was updated', null, true);
                }, function(error) {
                    logError('Polling Interval update failed', error, true);
                });
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
                .then(function () {
                    dataservice.removeAllItemsFromCache();
                });
        }
    }
})();
