(function() {
    'use strict';

    var core = angular.module('app.core');

    core.run(cacheRun);

    /* @ngInject */
    function cacheRun(CacheFactory) {
        // Caching settings
        // datache can be used to store http calls in memory
        // if (!CacheFactory.get('dataCache')) {
        //     CacheFactory('dataCache', {
        //         maxAge: 15 * 60 * 1000, // Items added to this cache expire after 15 minutes
        //         cacheFlushInterval: 60 * 60 * 1000, // This cache will clear itself every hour
        //         deleteOnExpire: 'aggressive' // Items will be deleted from this cache when they expire
        //     });
        // }

        // static cache can be used to store things permanently in localStorage
        if (!CacheFactory.get('staticCache')) {
            CacheFactory('staticCache', {
                storageMode: 'localStorage' // This cache will use `localStorage`.
            });
        }

    }
})();
