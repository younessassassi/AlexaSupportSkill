(function () {
    'use strict';

    angular
            .module('app.core', [
                'ngAnimate', 'ngSanitize', 'blocks.amDialog',
                'blocks.exception', 'blocks.logger', 'blocks.router',
                'ui.router', 'ngplus', 'ngMaterial',
                'ngSanitize', 'angular-cache'
            ]);
})();
