(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($http, $q, CacheFactory, exception, logger) {
        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount,
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

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            return $http.get('/api/routes/people')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }
        }

        function removeAllItemsFromCache() {
            staticCache.removeAll();
        }
    }
})();
