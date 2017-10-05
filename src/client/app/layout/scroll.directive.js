(function () {
    'use strict';

    angular
        .module('app.layout')
        .directive('scroll', scrollDirective);

    /* @ngInject */
    function scrollDirective($timeout) {
        //Usage:
        // <div scroll="object to be watched">
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attr) {
            scope.$watchCollection(attr.scroll, function(newVal, oldVal) {
                // console.log('attr.scroll: ', attr.scroll);
                if (angular.isDefined(attr.scroll) &&
                    angular.isDefined(newVal) && angular.isDefined(oldVal)) {
                    // console.log('old val length: ', oldVal.length);
                    // console.log('old val: ', oldVal);
                    // console.log('new val length: ', newVal.length);
                    // console.log('new val: ', newVal);

                    // only scroll down if a new elment is added
                    if (oldVal.length < newVal.length) {
                        $timeout(function() {
                            element[0].scrollTop = element[0].scrollHeight;
                        });
                    }
                }
            });
        }
    }
})();
