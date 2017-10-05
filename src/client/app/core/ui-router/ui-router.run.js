(function() {
    'use strict';

    var core = angular.module('app.core');

    core.run(uirouterRun);

    uirouterRun.$inject = ['$rootScope',];

    function uirouterRun($rootScope) {

    }
})();
