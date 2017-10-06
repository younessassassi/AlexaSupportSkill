/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('ATT_DATE_FORMAT', {
            date: 'MM/DD/YYYY',
            dateTime: 'MM/DD/YYY HH:mm',
            amPmTime: 'hh:mm A'
        })
        .constant('toastr', toastr)
        .constant('moment', moment);
})();
