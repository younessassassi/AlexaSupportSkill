(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($http, $q, CacheFactory, exception, logger) {
        var service = {
            clearCustomerFromQueue: clearCustomerFromQueue,
            getCustomersInQueue: getCustomersInQueue,
            removeAllItemsFromCache: removeAllItemsFromCache
        };

        var staticCache;
        if (!CacheFactory.get('staticCache')) {
            CacheFactory('staticCache', {
                storageMode: 'localStorage' // This cache will use `localStorage`.
            });
        }
        staticCache = CacheFactory.get('staticCache');

        return service;

        function getCustomersInQueue() {
            return $http.get('/api/queue')
                .then(success)
                .catch(fail);

            function success(response) {
                var data = _.filter(response.data, function (obj) {
                    return !angular.isDefined(obj.clearedTime);
                });
                data = _.sortBy(data, function (value) { return new Date(value); });

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

            function success(response) {
                return 'Success';
            }

            function fail(e) {
                return exception.catcher('XHR Failed for clear customer')(e);
            }
        }

        function removeAllItemsFromCache() {
            staticCache.removeAll();
        }
    }
})();
