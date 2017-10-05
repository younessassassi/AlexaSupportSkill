(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('htSidebar', htSidebar);

    /* @ngInject */
    function htSidebar () {
        // Opens and closes the sidebar menu.
        // Usage:
        //  <div ht-sidebar">
        //  <div ht-sidebar whenDoneAnimating="vm.sidebarReady()">
        // Creates:
        //  <div ht-sidebar class="sidebar">
        var directive = {
            link: link,
            templateUrl: 'app/layout/sidebar/sidebar.html',
            restrict: 'EA',
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }
})();
