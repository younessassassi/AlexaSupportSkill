(function () {
    'use strict';
    angular
        .module('blocks.logger')
        .factory('logger', logger);
    /* @ngInject */
    function logger($log, toastr, $injector, $sanitize) {
        var toastroptions = '';
        var service = {
            getLogFn: getLogFn,
            log: log,
            logError: logError,
            logSuccess: logSuccess,
            logWarning: logWarning,
            //log to console for debuggin
            stringToHex: stringToHex,
            fieldInfo: fieldInfo
        };

        return service;
        /////////////////////

        function getLogFn(moduleId, fnName) {
            fnName = fnName || 'log';
            switch (fnName.toLowerCase()) { // convert aliases
                case 'success':
                    fnName = 'logSuccess';
                    break;
                case 'error':
                    fnName = 'logError';
                    break;
                case 'warn':
                    fnName = 'logWarning';
                    break;
                case 'warning':
                    fnName = 'logWarning';
                    break;
            }

            var logFn = service[fnName] || service.log;
            return function(msg, data, showToast) {
                logFn(msg, data, moduleId, (showToast === undefined) ? false : showToast);
            };
        }

        function log(message, data, source, showToast) {
            logIt(message, data, source, showToast, 'info');
        }

        function logWarning(message, data, source, showToast) {
            logIt(message, data, source, showToast, 'warning');
        }

        function logSuccess(message, data, source, showToast) {
            logIt(message, data, source, showToast, 'success');
        }

        function logError(message, data, source, showToast) {
            logIt(message, data, source, showToast, 'error');
        }

        function logIt(message, data, source, showToast, toastType) {
            var write = (toastType === 'error') ? $log.error : $log.debug;
            source = source ? '[' + source + '] ' : '';
            write(source, message, data);
            if (showToast) {
                setToastrOptions(toastType);
                if (toastType === 'error') {
                    toastr.error(message);
                } else if (toastType === 'warning') {
                    toastr.warning(message);
                } else if (toastType === 'success') {
                    toastr.success(message);
                } else {
                    toastr.info(message);
                }
            }
            if (toastType === 'error') {
                // write error to cache
                var exception = $injector.get('exception');
                var errorMessage = source + message;
                var errorData = data;
            }
        }

        function setToastrOptions(type) {
            toastr.options = {
                'closeButton': true,
                'debug': false,
                'newestOnTop': true,
                'progressBar': false,
                'positionClass': 'toast-top-center',
                'preventDuplicates': false,
                'onclick': null,
                'showDuration': '300',
                'hideDuration': '500',
                'extendedTimeOut': 0,
                'showEasing': 'swing',
                'hideEasing': 'linear',
                'showMethod': 'fadeIn',
                'hideMethod': 'fadeOut',
                'tapToDismiss': true,
                'toastClass': 'toast-message'
            };
            if (type === 'error') {
                toastr.options.timeOut = 0;
            } else {
                toastr.options.timeOut = 3000;
            }
        }

        /** Log HEX */
        function consoleLogStringArrayToHex(arr, header) {
            /* jshint -W027 */ //==> for return
            if (typeof header === 'string') {
                console.log(header);
            }
            var oString;
            if (angular.isArray(arr) && arr.length > 0) {
                if (angular.isArray(arr[0])) { //2+ dimensional array
                    angular.forEach(arr, function (rowData) {
                        oString = jsonToString(rowData);
                        //console.log(oString);
                        console.log(stringToHex(oString));
                    });
                } else {  //assume 1 dimensional array
                    oString = jsonToString(arr);
                    //console.log(oString);
                    console.log(stringToHex(oString));
                }
            } else {
                oString = jsonToString(arr);
                if (oString !== null) {    //assume string
                    //console.log(arr);
                    console.log(stringToHex(oString));
                } else {
                    console.log('**** consoleLogStringArrayToHex:  INPUT NOT SUPPORTED *****');
                }
            }
        }

        function stringToHex(str) {
            if (typeof str === 'undefined' || str === null) {
                return null;
            }
            var hex = [];
            for (var i = 0; i < str.length; i++) {
                var hexCode = str.charCodeAt(i).toString(16);
                if (hexCode.length === 1) {
                    hexCode = '0' + hexCode;
                }
                hex.push('0x' + hexCode);
            }
            return hex.join(' ');
        }

        function jsonToString(object) {
            var isJson = true;
            var json = null;
            try
            {
                isJson = true;
                json = JSON.stringify(object);
            } catch (err)
            {
                isJson = false;
            }

            if (isJson) {
                return json;
            } else if (typeof object === 'string') {
                return object;
            } else {
                return null;
            }
        }

        function fieldInfo(message, title) {
            toastr.clear();
            setFieldInfoOptions();
            toastr.info($sanitize(message), title);
            toastr.options = toastroptions;
        }

        function setFieldInfoOptions() {
            toastroptions = toastr.options;

            toastr.options = {
                'closeButton': true,
                'debug': false,
                'newestOnTop': true,
                'progressBar': false,
                'positionClass': 'toast-bottom-full-width',
                'preventDuplicates': true,
                'onclick': null,
                'showDuration': '300',
                'hideDuration': '500',
                'timeOut': 0,
                'extendedTimeOut': 0,
                'showEasing': 'swing',
                'hideEasing': 'linear',
                'showMethod': 'fadeIn',
                'hideMethod': 'fadeOut',
                'tapToDismiss': true,
                'toastClass': 'toast-message'
            };
        }

    }
}());
