// Include in index.html so that app level exceptions are handled.
// Exclude from testRunner.html which should run exactly what it wants to run
(function () {
    'use strict';

    angular
        .module('blocks.exception')
        .provider('exceptionHandler', exceptionHandlerProvider)
        .config(config);

    /**
     * Must configure the exception handling
     */
    function exceptionHandlerProvider() {
        /* jshint validthis:true */
        this.config = {
            appErrorPrefix: undefined
        };

        this.configure = function (appErrorPrefix) {
            this.config.appErrorPrefix = appErrorPrefix;
        };

        this.$get = function () {
            return { config: this.config };
        };
    }

    /**
     * Configure by setting an optional string value for appErrorPrefix.
     * Accessible via config.appErrorPrefix (via config value).
     * @param  {Object} $provide
     */
    /* @ngInject */
    function config($provide) {
        $provide.decorator('$exceptionHandler', extendExceptionHandler);
    }

    /**
     * Extend the $exceptionHandler service to also display a toast.
     * @param  {Object} $delegate
     * @param  {Object} exceptionHandler
     * @param  {Object} logger
     * @return {Function} the decorated $exceptionHandler service
     */

    /* @ngInject */
    function extendExceptionHandler($delegate, exceptionHandler, logger) {
        var getLogFn = logger.getLogFn;
        var logError = getLogFn('error handler', 'error');
        return function (exception, cause) {
            var appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';

            var errorData = { exception: exception, cause: cause };
            var exceptionMessage = appErrorPrefix;

            if (typeof exception === 'string') {
                exceptionMessage += exception;
            } else if (typeof exception === 'object' && exception.message) {
                exceptionMessage += exception.message;
                exception.message = exceptionMessage;
            } else {
                exceptionMessage += 'Error';
            }

            $delegate(exception, cause);
            /**
             * Could add the error to a service's collection,
             * add errors to $rootScope, log errors to remote web server,
             * or log locally. Or throw hard. It is entirely up to you.
             * throw exception;
             *
             * @example
             *     throw { message: 'error message we added' };
             */
            logError(exceptionMessage, errorData);
        };
    }
})();
