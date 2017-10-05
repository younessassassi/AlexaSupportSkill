/* jshint -W043 */
(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(materialConfig);
    /* @ngInject */
    function materialConfig($mdThemingProvider) {
        // $mdThemingProvider.theme('default')
        //     .backgroundPalette('grey', {
        //         'default': '200'
        //     });
        $mdThemingProvider.theme('default')
            .primaryPalette('blue', {
                'default': '700',
                'hue-1': '500',
            })
            .accentPalette('blue-grey')
            .warnPalette('red')
            .backgroundPalette('grey', {
                'default': '100'
            });

        $mdThemingProvider.theme('lightBlueTheme')
            .primaryPalette('blue', {
                'default': '700',
                'hue-1': '500',
            })
            .accentPalette('blue-grey')
            .warnPalette('red')
            .backgroundPalette('grey', {
                'default': '100'
            });

        $mdThemingProvider.theme('orangeTheme')
            .primaryPalette('deep-orange', {
                'default': '700',
                'hue-1': '500',
            })
            .accentPalette('indigo')
            .warnPalette('red')
            .backgroundPalette('grey', {
                'default': '200'
            });

        $mdThemingProvider.theme('darkTheme')
            .primaryPalette('grey', {
                'default': '800',
                'hue-1': '700',
                'hue-2': '800',
                'hue-3': '900',
            })
            .accentPalette('teal', {
                'default': '200'
            })
            .warnPalette('red')
            .backgroundPalette('grey', {
                'default': '100'
            });

        // This is the absolutely vital part, without this, changes will not cascade down through the DOM.
        $mdThemingProvider.alwaysWatchTheme(true);
    }
})();
