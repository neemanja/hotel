angular.module('services')
    .factory('hotelService', function ($q, $http, config) {
        var hotelService = {
            getHotels: function () {
                var deferred = $q.defer();
                $http.get(config.API_HOST + config.HOTEL_PATH + '?count=' + config.HOTEL_COUNT).then(function (response) {
                    deferred.resolve(response.data);
                }, function (error) {
                    deferred.reject(error.data.error);
                });
                return deferred.promise;
            }
        };
        return hotelService;
    });