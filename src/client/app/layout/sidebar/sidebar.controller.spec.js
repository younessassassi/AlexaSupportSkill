/* jshint -W117, -W030 */
describe('layout', function() {
    describe('sidebar', function() {
        var controller;
        var views = {
            surveys: 'app/answer-surveys/surveys.html'
        };

        beforeEach(function() {
            module('app.layout', bard.fakeToastr);
            bard.inject('$controller', '$httpBackend', '$location',
                          '$rootScope', '$state', 'routerHelper');
        });

        beforeEach(function() {
            routerHelper.configureStates(mockData.getMockStates(), '/');
            controller = $controller('SidebarController');
            $rootScope.$apply();
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should have isCurrent() for / to return `md-accent md-hue-3 md-raised`',
            function() {
            $location.path('/');
            expect(controller.isCurrent($state.current))
                .to.equal('md-accent md-hue-3 md-raised');
        });

        it('should have isCurrent() for /surveys to return `md-accent md-hue-3 md-raised`',
            function() {
            $location.path('/list');
            expect(controller.isCurrent($state.current))
                .to.equal('md-accent md-hue-3 md-raised');
        });

        it('should have isCurrent() for non route not return `md-accent md-hue-3 md-raised`',
            function() {
            $location.path('/invalid');
            expect(controller.isCurrent({title: 'invalid'}))
                .not.to.equal('md-accent md-hue-3 md-raised');
        });
    });
});
