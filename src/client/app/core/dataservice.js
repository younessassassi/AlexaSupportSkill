(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($rootScope, $http, $q, CacheFactory, exception, logger) {
        var service = {
            clearCustomerFromQueue: clearCustomerFromQueue,
            getCustomersInQueue: getCustomersInQueue,
            removeAllItemsFromCache: removeAllItemsFromCache,
            sendText: sendText,
            setPollingInterval: setPollingInterval,
            getPollingInterval: getPollingInterval
        };

        var staticCache;
        if (!CacheFactory.get('staticCache')) {
            CacheFactory('staticCache', {
                storageMode: 'localStorage' // This cache will use `localStorage`.
            });
        }
        staticCache = CacheFactory.get('staticCache');

        return service;

        function sendText(number) {
            return $http.get('/api/routes/text/' + number)
            .then(success)
            .catch(fail);
        }

        function getPollingInterval() {
            return $http.get('/api/ref/59d6437724fceaf01be7839d')
            .then(function(response) {
                if (response.data) {
                    return response.data.value || 10;
                } else {
                    return 10;
                }
            })
            .catch(fail);
        }

        function setPollingInterval(value) {
            var data = {
                key: 'queuePollingInterval',
                value: value
            };
            return $http.put('/api/ref/59d6437724fceaf01be7839d', data)
            .then(success)
            .catch(fail);
        }

        function getCustomersInQueue() {
            $rootScope['attHideSpinner'] = true;
            return $http.get('/api/queue')
                .then(success)
                .catch(fail);

            function success(response) {
                var data = _.sortBy(response.data, function (obj) { return new Date(obj.proposed_time); });

                console.log('data', data);
                return data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getCustomers')(e);
            }
        }

        function clearCustomerFromQueue(customerId) {
            var params = {};
            return $http.put('/api/queue/' + customerId, params)
                .then(success)
                .catch(fail);
        }

        function removeAllItemsFromCache() {
            staticCache.removeAll();
        }

        function success(response) {
            return 'Success';
        }

        function fail(e) {
            return exception.catcher('XHR Failed for clear customer')(e);
        }
    }
})();
