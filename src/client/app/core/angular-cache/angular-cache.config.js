(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(cacheConfig);

    /* @ngInject */
    function cacheConfig(CacheFactoryProvider) {
        // We can set caching app defaults here
        // The line below would set a default cache duration of 15 minutes
        // angular.extend(CacheFactoryProvider.defaults, { maxAge: 15 * 60 * 1000 });
    }
})();
