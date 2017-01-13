angular.module('directives')
    .directive('message', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                messageTitle: '@',
                messageText: '@'
            },
            templateUrl: 'html/directives/message.html'
        };
    });