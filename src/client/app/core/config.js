(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[AT&T Help Starter Error] ',
        appTitle: 'AT&T Help'
    };

    core.value('config', config);

    core.config(configure);

    /* @ngInject */
    function configure($logProvider, routerHelperProvider,
        exceptionHandlerProvider, $urlRouterProvider) {

        // set default state
        $urlRouterProvider.when('', '/');

        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({
            docTitle: config.appTitle + ': '
        });
    }
})();
