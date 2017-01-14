angular.module('directives')
    .directive('hotel', function ($sce, reviewService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                item: '='
            },
            templateUrl: 'html/directives/hotel.html',
            link: function (scope) {
                var reviewsDisplayed = false;

                switch (parseInt(scope.item.stars, 10)) {
                case 1:
                    scope.stars = $sce.trustAsHtml('&#9733;&#9734;&#9734;&#9734;&#9734;');
                    break;
                case 2:
                    scope.stars = $sce.trustAsHtml('&#9733;&#9733;&#9734;&#9734;&#9734;');
                    break;
                case 3:
                    scope.stars = $sce.trustAsHtml('&#9733;&#9733;&#9733;&#9734;&#9734;');
                    break;
                case 4:
                    scope.stars = $sce.trustAsHtml('&#9733;&#9733;&#9733;&#9733;&#9734;');
                    break;
                case 5:
                    scope.stars = $sce.trustAsHtml('&#9733;&#9733;&#9733;&#9733;&#9733;');
                    break;
                default:
                    scope.stars = $sce.trustAsHtml('&#9734;&#9734;&#9734;&#9734;&#9734;');
                }

                scope.areReviewsDisplayed = function () {
                    return reviewsDisplayed;
                };
                scope.searchForReviews = function () {
                    reviewsDisplayed = false;
                    reviewService.getReviews(scope.item.id).then(function (response) {
                        scope.reviews = response;
                        reviewsDisplayed = response.length ? true : false;
                    }, function (error) {
                        scope.reviews = [];
                    });
                };

                scope.hideReviews = function () {
                    reviewsDisplayed = false;
                    scope.reviews = [];
                };
            }
        };
    });