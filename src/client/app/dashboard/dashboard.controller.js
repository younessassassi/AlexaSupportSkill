(function () {
    'use strict';
    var controllerId = 'DashboardController';
    angular
        .module('app.dashboard')
        .controller(controllerId, DashboardController);

    /* @ngInject */
    function DashboardController($q, $mdDialog, confirmDialog, dataservice, logger) {
        var vm = this;
        var getLogFn = logger.getLogFn;
        var log = getLogFn(controllerId);
        var logError = getLogFn(controllerId, 'error');
        var logSuccess = getLogFn(controllerId, 'success');
        var logWarning = getLogFn(controllerId, 'warning');

        vm.selectCustomer = selectCustomer;
        vm.clearCustomer = clearCustomer;
        vm.contactCustomer = contactCustomer;

        activate();

        function activate() {
            var promises = [getMessageCount(), getPeople()];
            return $q.all(promises).then(function () {
                log('Activated Dashboard View');
            });
        }

        function clearCustomer(ev, customer) {
            var message = 'Are you sure you want to clear this customer from the queue?';
            var okButtonText = 'Confirm';
            confirmDialog.confirmationDialog(okButtonText, message, okButtonText, 'Cancel')
                .then(function () {
                    // adminDataService.upsertTeam(vm.teamModel, _isExistingTeam)
                    //     .then(function () {
                    //         goToListView();
                    //     }, function(error) {
                    //         logError('There was a problem when we tried to insert the team information', error, true);
                    //     });
                });
        }

        function contactCustomer(ev, customer) {
            var message = 'Click on Text to contact this customer?';
            var title = 'Contact Via Text';
            var okButtonText = 'Text';
            confirmDialog.confirmationDialog(title, message, okButtonText, 'Cancel')
                .then(function () {
                    // adminDataService.upsertTeam(vm.teamModel, _isExistingTeam)
                    //     .then(function () {
                    //         goToListView();
                    //     }, function(error) {
                    //         logError('There was a problem when we tried to insert the team information', error, true);
                    //     });
                });
        }

        function selectCustomer(ev, customer) {
            $mdDialog.show({
                locals: { customer: customer },
                controller: DialogController,
                templateUrl: 'app/dashboard/customer.dialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }

        function DialogController($scope, $mdDialog, customer) {
            $scope.customer = customer;
            $scope.hide = function () {
                $mdDialog.hide();
            };

            $scope.cancel = function () {
                $mdDialog.cancel();
            };
        }

        function getMessageCount() {
            return dataservice.getMessageCount().then(function (data) {
                vm.messageCount = data;
                return vm.messageCount;
            });
        }

        function getPeople() {
            return dataservice.getPeople().then(function (data) {
                var customers = [];
                var queueOrder = 1;
                var remainingTime = 0;
                angular.forEach(data, function (per) {
                    remainingTime += 10;
                    var person = {
                        order: queueOrder++,
                        name: per.firstName,
                        waitTime: remainingTime + ' min'
                    };
                    customers.push(person);
                });
                vm.customers = customers;
                return customers;
            });
        }

    }
})();
