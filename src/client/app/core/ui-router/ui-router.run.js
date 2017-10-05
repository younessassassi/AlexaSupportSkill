(function() {
    'use strict';

    var core = angular.module('app.core');

    core.run(uirouterRun);

    /* @ngInject */
    function uirouterRun($rootScope, $state, routerHelper, config) {
        
        $rootScope.history = [];
        $rootScope.isBackButtonNeeded = false;
        $rootScope.previousState = '';
        var stateObj = {};

        $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
            if (!to.abstract) {
                $rootScope.pageTitle = to.title;
            }

            $rootScope.attLeftNavButtonConfig = to.leftNavButtonConfig;
            $rootScope.attNoLogoutOnKeepAliveOnDevice = to.noLogoutOnKeepAliveOnDevice;

            if (!from.abstract && (from.name !== to.name)) {
                // Get the sidebar navigation routes
                var states = routerHelper.getStates();
                var navRoutes = states.filter(function (r) {
                    return r.settings && r.settings.nav;
                });
                // if it is one of the root states, then clear the history array and start fresh
                var matchRootState = _.find(navRoutes, function (item) {
                    return item.name === to.name;
                });

                // if match is found then clear the history
                if (!!matchRootState) {
                    $rootScope.history = [];
                    $rootScope.isBackButtonNeeded = false;
                } else {
                    // check if the state already exits in the stored states.
                    var matchHistoryState = _.find($rootScope.history, function (item) {
                        return item.state.name === to.name;
                    });

                    // if match is found then remove all saved items starting at that item index
                    if (!!matchHistoryState) {
                        // find item index
                        var matchHistoryIndex = $rootScope.history.indexOf(matchHistoryState);
                        $rootScope.history.splice(matchHistoryIndex, $rootScope.history.length);
                        var newHistoryLength = $rootScope.history.length;
                        if (newHistoryLength > 0) {
                            var lastItem = $rootScope.history[newHistoryLength - 1];
                            $rootScope.backTitle = lastItem.state.title;
                        }

                    } else {
                        // This is a valid state to add the state history array
                        stateObj = {
                            state: from,
                            params: fromParams
                        };
                        $rootScope.backTitle = from.title;
                        $rootScope.history.push(stateObj);
                        $rootScope.isBackButtonNeeded = config.isAdminApp ? true : false;
                    }
                }
            }
            // needed for the survey admin module
            $rootScope.previousState = from.name;
        });
    }
})();
