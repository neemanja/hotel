angular.module('services')
    .factory('hotelService', function ($q, $http, config) {
        var hotelService = {
            getHotels: function () {
                var deferred = $q.defer();
                $http.get(config.API_HOST + config.HOTEL_PATH + '?count=' + config.HOTEL_COUNT).then(function (response) {
                    deferred.resolve(response.data);
                }, function (error) {
                    if (error && error.data && error.data.error) {
                        deferred.reject(error.data.error);
                    } else {
                        deferred.reject('Unknown error occured!!!');
                    }
                });
                return deferred.promise;
            }
        };
        return hotelService;
    });