angular.module('controllers')
    .controller('listCtrl', function ($scope, hotelService, reviewService) {
        var searchingForHotels = false,
            searchingForReviews = false,
            hotelsDisplayed = false,
            errorDisplayed = false;

        $scope.areHotelsDisplayed = function () {
            return hotelsDisplayed;
        }
        $scope.isErrorDisplayed = function () {
            return errorDisplayed;
        }

        $scope.searchForHotels = function () {
            searchingForHotels = true;
            hotelsDisplayed = false;
            errorDisplayed = false;
            hotelService.getHotels().then(function (response) {
                searchingForHotels = false;
                hotelsDisplayed = true;
                errorDisplayed = false;
                console.log('response1');
                console.log(response);
                reviewService.getReviews(response[0].id).then(function (response) {
                    console.log('response2');
                    console.log(response);
                }, function (error) {
                    console.log('error2');
                    console.log(error);
                });
            }, function (error) {
                searchingForHotels = false;
                hotelsDisplayed = false;
                errorDisplayed = true;
                console.log('error1');
                console.log(error);
            });
        };
    });