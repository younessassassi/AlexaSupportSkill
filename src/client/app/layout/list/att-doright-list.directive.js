(function () {
    'use strict';

    angular
            .module('app.layout')
            .directive('attDorightList', attDorightList);

    /* @ngInject */
    function attDorightList($compile, $mdDialog) {
        // Usage:
        // <att-doright-list list-items="<scope list items>"
        //     on-list-item-click="<list item callback>"></att-doright-list>
        // Params:
        // list-items: an array of objects. each objec must contain a 'title'
        //             property which is a string for the title display row
        //             and a 'dataForDisplay' property which is a subarray of
        //             objects with the form
        //     var dataForDisplay = [{label: <label>, value: <value>}];
        //     var displayRightIcon - displays icon provided in rightIconImage
        //     var rightTextData - if exist displays this data on the right
        // on-list-item-click: a callback for each row in the list

        var directive = {
            templateUrl: 'app/layout/list/att-doright-list.html',
            scope: {
                listItems: '=',
                onListItemClick: '&',
                rightIconImage: '@',
                rightIconLabel: '@',
                onRightIconClick: '&',
                statusValues: '=',
                selectedStatus: '=?selectedStatus',
                searchText: '=?searchText',
                onStatusChange: '&'
            },
            restrict: 'EA',
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            scope.listItemCallback = function (item) {
                if (attrs.onListItemClick) {
                    scope.onListItemClick()(item);
                }
            };
            scope.rightIconCallback = function ($event, item) {
                if (attrs.onRightIconClick) {
                    scope.onRightIconClick()($event, item);
                }
            };

            scope.custStatFilter = function (selectedStatus) {
                if (attrs.onStatusChange) {
                    scope.onStatusChange()(selectedStatus);
                }
            };
            scope.shortStrLabel = !_.isUndefined(scope.rightIconLabel) ? scope.rightIconLabel.substring(0, 4) : '';

            scope.withCarot = !_.isUndefined(attrs.withCarot);
            scope.showFilter = !_.isUndefined(attrs.showFilter);
            scope.showFilterPickList = !_.isUndefined(scope.statusValues);
            scope.displayRightIcon = !_.isUndefined(attrs.rightIcon);
            scope.applyArchiveFilter = !_.isUndefined(attrs.applyArchiveFilter);
            scope.searchText = !_.isUndefined(scope.searchText) ? scope.searchText : '';
        }
    }
})();
