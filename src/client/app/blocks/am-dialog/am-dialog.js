(function () {
    'use strict';
    angular
        .module('blocks.amDialog')
        .factory('confirmDialog', confirmDialog);
    /* @ngInject */
    function confirmDialog($mdDialog) {
        var service = {
            deleteDialog: deleteDialog,
            confirmationDialog: confirmationDialog,
            okDialog: okDialog
        };
        return service;
        function deleteDialog(itemName) {
            var title = 'Confirm Delete';
            itemName = itemName || 'item';
            var msg = 'Delete ' + itemName + '?';
            return confirmationDialog(title, msg);
        }

        function confirmationDialog(title, msg, okText, cancelText) {
            // Appending dialog to document.body to cover sidenav
            var confirm = $mdDialog.confirm()
                .title(title || 'Confirm')
                .htmlContent(msg || '')
                .ariaLabel(title || 'Confirm')
                .ok(okText || 'OK')
                .cancel(cancelText || 'Cancel');
            return $mdDialog.show(confirm);
        }

        function okDialog(title, msg, okText) {
            var alert = $mdDialog.alert()
                .title(title || 'Title')
                .htmlContent(msg || '')
                .ok(okText || 'OK');
            return ($mdDialog.show(alert)
                .finally(function () {
                    alert = undefined;
                }));
        }
    }
})();
