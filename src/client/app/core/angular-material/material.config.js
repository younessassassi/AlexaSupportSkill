/* jshint -W043, -W071 */
(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(materialConfig);
    /* @ngInject */
    function materialConfig($mdIconProvider, $mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('att-blue')
            .accentPalette('att-black')
            .warnPalette('red');

        // define the different palettes
        $mdThemingProvider.definePalette('att-blue', {
            '50': 'e0f3fb',
            '100': 'b3e2f4',
            '200': '80cfed',
            '300': '4dbce6',
            '400': '26ade0',
            '500': '009fdb',
            '600': '0097d7',
            '700': '008dd2',
            '800': '0083cd',
            '900': '0072c4',
            'A100': 'ecf6ff',
            'A200': 'b9deff',
            'A400': '86c6ff',
            'A700': '6dbaff',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': [
                '50',
                '100',
                '200',
                '300',
                '400',
                'A100',
                'A200',
                'A400',
                'A700'
            ],
            'contrastLightColors': [
                '500',
                '600',
                '700',
                '800',
                '900'
            ]
        });

        $mdThemingProvider.definePalette('att-black', {
            '50': 'e0e0e0',
            '100': 'b3b3b3',
            '200': '808080',
            '300': '4d4d4d',
            '400': '262626',
            '500': '000000',
            '600': '000000',
            '700': '000000',
            '800': '000000',
            '900': '000000',
            'A100': 'a6a6a6',
            'A200': '8c8c8c',
            'A400': '737373',
            'A700': '000000',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': [
                '50',
                '100',
                '200',
                'A100',
                'A200'
            ],
            'contrastLightColors': [
                '300',
                '400',
                '500',
                '600',
                '700',
                '800',
                '900',
                'A400',
                'A700'
            ]
        });

        $mdThemingProvider.definePalette('att-orange', {
            '50': 'fceee0',
            '100': 'f9d5b3',
            '200': 'f5ba80',
            '300': 'f09e4d',
            '400': 'ed8926',
            '500': 'ea7400',
            '600': 'e76c00',
            '700': 'e46100',
            '800': 'e15700',
            '900': 'db4400',
            'A100': 'ffffff',
            'A200': 'ffdbcf',
            'A400': 'ffb49c',
            'A700': 'ea7400',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': [
                '50',
                '100',
                '200',
                '300',
                '400',
                '500',
                '600',
                'A100',
                'A200',
                'A400'
            ],
            'contrastLightColors': [
                '700',
                '800',
                '900'
            ]
        });

        // dark theme used by some form fields
        $mdThemingProvider.theme('darkTheme')
            .primaryPalette('grey', {
                'default': '800',
                'hue-1': '700',
                'hue-2': '800',
                'hue-3': '900',
            })
            .accentPalette('att-orange', {
                'default': '500'
            })
            .warnPalette('red')
            .backgroundPalette('grey', {
                'default': '100'
            })
            .foregroundPalette['3'] = 'rgba(0,0,0,0.80)';

        // $mdThemingProvider.definePalette('att-gray', {
        //     '50': 'f2f2f2',
        //     '100': 'dfdfdf',
        //     '200': 'cacaca',
        //     '300': 'b5b5b5',
        //     '400': 'a5a5a5',
        //     '500': '959595',
        //     '600': '8d8d8d',
        //     '700': '828282',
        //     '800': '787878',
        //     '900': '676767',
        //     'A100': 'dfdfdf',
        //     'A200': 'cacaca',
        //     'A400': 'b5b5b5',
        //     'A700': 'a5a5a5',
        //     'contrastDefaultColor': 'light',
        //     'contrastDarkColors': [
        //         '50',
        //         '100',
        //         '200',
        //         '300',
        //         '400',
        //         '500',
        //         '600',
        //         '700',
        //         'A100',
        //         'A200',
        //         'A400'
        //     ],
        //     'contrastLightColors': [
        //         '800',
        //         '900',
        //         'A700'
        //     ]
        // });

        // $mdThemingProvider.definePalette('att-dark-blue', {
        //     '50': 'e1edf5',
        //     '100': 'b4d2e7',
        //     '200': '82b4d7',
        //     '300': '5095c6',
        //     '400': '2b7fba',
        //     '500': '0568ae',
        //     '600': '0460a7',
        //     '700': '04559d',
        //     '800': '034b94',
        //     '900': '013a84',
        //     'A100': 'b1cdff',
        //     'A200': '7eacff',
        //     'A400': '4b8bff',
        //     'A700': '0568ae',
        //     'contrastDefaultColor': 'light',
        //     'contrastDarkColors': [
        //         '50',
        //         '100',
        //         '200',
        //         '300',
        //         'A100',
        //         'A200',
        //         'A400'
        //     ],
        //     'contrastLightColors': [
        //         '400',
        //         '500',
        //         '600',
        //         '700',
        //         '800',
        //         '900',
        //         'A700'
        //     ]
        // });

        // $mdThemingProvider.definePalette('att-dark-gray', {
        //     '50': 'ebebeb',
        //     '100': 'cecece',
        //     '200': 'adadad',
        //     '300': '8c8c8c',
        //     '400': '737373',
        //     '500': '5a5a5a',
        //     '600': '525252',
        //     '700': '484848',
        //     '800': '3f3f3f',
        //     '900': '2e2e2e',
        //     'A100': '8c8c8c',
        //     'A200': '737373',
        //     'A400': '5a5a5a',
        //     'A700': '525252',
        //     'contrastDefaultColor': 'light',
        //     'contrastDarkColors': [
        //         '50',
        //         '100',
        //         '200',
        //         '300',
        //         'A100'
        //     ],
        //     'contrastLightColors': [
        //         '400',
        //         '500',
        //         '600',
        //         '700',
        //         '800',
        //         '900',
        //         'A200',
        //         'A400',
        //         'A700'
        //     ]
        // });

        // $mdThemingProvider.theme('default')
        //         .primaryPalette('blue', {
        //             'default': '700',
        //             'hue-1': '500',
        //         })
        //         .accentPalette('blue-grey')
        //         .warnPalette('red');

        // $mdThemingProvider.theme('default')
        //     .primaryPalette('grey', {
        //         'default': '900',
        //         'hue-1': '600',
        //         'hue-2': '700',
        //         'hue-3': '800',
        //     })
        //     .accentPalette('customAccent', {
        //         'hue-1': '50',
        //         'hue-2': 'A200',
        //         'hue-3': 'A700'
        //     })
        //     .warnPalette('red')
        //     .backgroundPalette('grey', {
        //         'default': '50'
        //     })
        //     .foregroundPalette['3'] = 'rgba(0,0,0,0.6)';

        var customAccent = {
            '50': '#828082',
            '100': '#085365',
            '200': '#0a677c',
            '300': '#0b7a94',
            '400': '#0d8eac',
            '500': '#0fa1c3',
            '600': '#18c5ed',
            '700': '#30cbef',
            '800': '#48d1f1',
            '900': '#5fd7f3',
            'A100': '#11b5db',
            'A200': '#11b5db',
            'A400': '#11b5db',
            'A700': '#11b5db',
            'contrastDefaultColor': 'light',
        };
        $mdThemingProvider
            .definePalette('customAccent',
            customAccent);

        // This is the absolutely vital part, without this, changes will not cascade down through the DOM.
        // $mdThemingProvider.alwaysWatchTheme(true);

        /* ATT Icons */
        $mdIconProvider.icon('arrow-circle-right', 'svg/arrow-circle-right.svg', 24);
        $mdIconProvider.icon('bars', 'svg/bars.svg', 24);
        $mdIconProvider.icon('calendar', 'svg/calendar.svg', 24);
        $mdIconProvider.icon('camera', 'svg/camera.svg', 24);
        $mdIconProvider.icon('caret-down', 'svg/caret-down.svg', 24);
        $mdIconProvider.icon('caret-up', 'svg/caret-up.svg', 24);
        $mdIconProvider.icon('check', 'svg/check.svg', 24);
        $mdIconProvider.icon('chevron-left', 'svg/chevron-left.svg', 24);
        $mdIconProvider.icon('clock', 'svg/clock.svg', 24);
        $mdIconProvider.icon('close', 'svg/close.svg', 24);
        $mdIconProvider.icon('cog', 'svg/cog.svg', 24);
        $mdIconProvider.icon('cogs', 'svg/cogs.svg', 24);
        $mdIconProvider.icon('customer-support', 'svg/customersupport.svg', 24);
        $mdIconProvider.icon('database', 'svg/database.svg', 24);
        $mdIconProvider.icon('desk-phone', 'svg/desk_phone.svg', 24);
        $mdIconProvider.icon('disk', 'svg/disk.svg', 24);
        $mdIconProvider.icon('download', 'svg/download.svg', 24);
        $mdIconProvider.icon('duplicate', 'svg/duplicate.svg', 24);
        $mdIconProvider.icon('email', 'svg/email.svg', 24);
        $mdIconProvider.icon('export', 'svg/export.svg', 24);
        $mdIconProvider.icon('feedback', 'svg/feedback.svg', 24);
        $mdIconProvider.icon('file-text', 'svg/file-text.svg', 24);
        $mdIconProvider.icon('filter', 'svg/filter.svg', 24);
        $mdIconProvider.icon('flag', 'svg/flag.svg', 24);
        $mdIconProvider.icon('group-collaboration', 'svg/groupcollaboration.svg', 24);
        $mdIconProvider.icon('guide-setup', 'svg/guidesetup.svg', 24);
        $mdIconProvider.icon('info-circle', 'svg/info-circle.svg', 24);
        $mdIconProvider.icon('link', 'svg/link.svg', 24);
        $mdIconProvider.icon('lock', 'svg/lock.svg', 24);
        $mdIconProvider.icon('mobile', 'svg/mobile.svg', 24);
        $mdIconProvider.icon('pencil', 'svg/pencil.svg', 24);
        // $mdIconProvider.icon('pencil', 'svg/pencil2.svg', 24);
        $mdIconProvider.icon('picture', 'svg/picture.svg', 24);
        $mdIconProvider.icon('pie-chart', 'svg/pie_chart.svg', 24);
        $mdIconProvider.icon('pinpoint', 'svg/pinpoint.svg', 24);
        $mdIconProvider.icon('plus', 'svg/plus.svg', 24);
        $mdIconProvider.icon('refresh', 'svg/refresh.svg', 24);
        $mdIconProvider.icon('sign-out', 'svg/signout.svg', 24);
        $mdIconProvider.icon('smile-1', 'svg/smile_1.svg', 24);
        $mdIconProvider.icon('smile-2', 'svg/smile_2.svg', 24);
        $mdIconProvider.icon('smile-3', 'svg/smile_3.svg', 24);
        $mdIconProvider.icon('smile-4', 'svg/smile_4.svg', 24);
        $mdIconProvider.icon('smile-5', 'svg/smile_5.svg', 24);
        $mdIconProvider.icon('social-share-this', 'svg/social-share-this.svg', 24);
        $mdIconProvider.icon('star', 'svg/star.svg', 24);
        $mdIconProvider.icon('minus', 'svg/subtractminimize.svg', 24);
        $mdIconProvider.icon('tachometer', 'svg/tachometer.svg', 24);
        $mdIconProvider.icon('tools', 'svg/tools.svg', 24);
        $mdIconProvider.icon('times', 'svg/times.svg', 24);
        $mdIconProvider.icon('trash', 'svg/trash.svg', 24);
        $mdIconProvider.icon('upload', 'svg/upload.svg', 24);
        $mdIconProvider.icon('user', 'svg/user.svg', 24);
        $mdIconProvider.icon('warning', 'svg/warning.svg', 24);
    }
})();
