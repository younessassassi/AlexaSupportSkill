(function () {
    'use strict';

    angular
            .module('app.layout')
            .directive('attLayoutList', attLayoutList);

    /* @ngInject */
    function attLayoutList() {

        var directive = {
            templateUrl: 'app/layout/list/att-layout-list.html',
            scope: {
                listItems: '=',
                rightIcon: '=',
                onStateChange: '&',
                onListItemClick: '&',
                rightIconImage: '@',
                rightIconLabel: '@',
                onRightIconClick: '&',
                showFilter: '=',
                optionTitle: '@',
                optionValues: '=',
                selectedOption: '=?selectedOption',
                searchText: '=?searchText'
            },
            restrict: 'EA',
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            scope.stateChangeCallback = function () {
                if (attrs.onStateChange) {
                    scope.onStateChange()(scope.selectedOption, scope.searchText);
                }
            };
            scope.listItemCallback = function (item) {
                if (attrs.onListItemClick) {
                    scope.onListItemClick()(item);
                }
            };
            scope.rightIconCallback = function ($event, item) {
                if (attrs.onRightIconClick) {
                    scope.onRightIconClick()(item, $event);
                }
            };
            scope.shortStrLabel = !_.isUndefined(scope.rightIconLabel) ? scope.rightIconLabel.substring(0, 4) : '';

            scope.withCarot = !_.isUndefined(attrs.withCarot);
            scope.applyOptionFilter = !_.isUndefined(attrs.applyOptionFilter);
            scope.displayRightIcon = !_.isUndefined(attrs.rightIcon);
            scope.searchText = !_.isUndefined(scope.searchText) ? scope.searchText : '';
            scope.showFilterPickList = !_.isUndefined(scope.optionValues);
        }
    }
})();
