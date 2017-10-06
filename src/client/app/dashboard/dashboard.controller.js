(function () {
    'use strict';
    var controllerId = 'DashboardController';
    angular
        .module('app.dashboard')
        .controller(controllerId, DashboardController);

    /* @ngInject */
    function DashboardController($q, $mdDialog, $interval, confirmDialog, dataservice, moment, logger, ATT_DATE_FORMAT) {
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
            var promises = [getCustomersInQueue()];
            return $q.all(promises).then(function () {
                // $interval(function () { getCustomersInQueue(); }, 30 * 1000);
                log('Activated Dashboard View');
            });
        }

        function clearCustomer(ev, customer) {
            var message = 'Are you sure you want to clear this customer from the queue?';
            var okButtonText = 'Confirm';
            confirmDialog.confirmationDialog(okButtonText, message, okButtonText, 'Cancel')
                .then(function () {
                    dataservice.clearCustomerFromQueue(customer._id).then(
                        function () {
                            getCustomersInQueue();
                        },
                        function (error) {
                            logError('There was a problem when we tried to clear the customer from the queue', error, true);
                        }
                    );
                });
        }

        function contactCustomer(ev, customer) {
            var message = 'Click on Text to contact this customer?';
            var title = 'Contact Via Text';
            var okButtonText = 'Text';
            confirmDialog.confirmationDialog(title, message, okButtonText, 'Cancel')
                .then(function () {
                    dataservice.sendText(customer.phone_number);
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

        function DialogController($scope, $mdDialog, dataservice, customer) {
            $scope.customer = customer;
            $scope.hide = function () {
                $mdDialog.hide();
            };

            $scope.clearCustomer = function () {
                dataservice.clearCustomerFromQueue(customer._id).then(
                    function () {
                        getCustomersInQueue();
                    },
                    function (error) {
                        logError('There was a problem when we tried to clear the customer from the queue', error, true);
                    }
                );
            };

            $scope.cancel = function () {
                $mdDialog.cancel();
            };
        }

        function getCustomersInQueue() {
            return dataservice.getCustomersInQueue().then(function (customers) {
                var queueOrder = 1;
                var remainingTime = 0;
                angular.forEach(customers, function (customer) {
                    remainingTime += 10;
                    customer.order = queueOrder++;
                    customer.waitTime = remainingTime + ' min';
                    customer.proposedTime = moment(customer.proposed_time).format(ATT_DATE_FORMAT.amPmTime);
                });
                vm.customers = customers;
                return customers;
            });
        }

    }
})();
