angular.module('controllers')
    .controller('listCtrl', function ($scope, hotelService) {
        var searchingForHotels = false,
            searchingForReviews = false,
            hotelsDisplayed = false,
            errorDisplayed = false;


        $scope.areHotelsDisplayed = function () {
            return hotelsDisplayed;
        };

        $scope.isErrorDisplayed = function () {
            return errorDisplayed;
        };

        $scope.searchForHotels = function () {
            searchingForHotels = true;
            hotelsDisplayed = false;
            errorDisplayed = false;
            hotelService.getHotels().then(function (response) {
                searchingForHotels = false;
                hotelsDisplayed = true;
                errorDisplayed = false;
                $scope.hotels = response;
                $scope.error = '';
            }, function (error) {
                searchingForHotels = false;
                hotelsDisplayed = false;
                errorDisplayed = true;
                $scope.hotels = [];
                $scope.error = error;
            });
        };
    });