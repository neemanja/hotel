angular.module('services')
    .factory('reviewService', function ($q, $http, config) {
        var reviewService = {
            getReviews: function (hotelId) {
                var deferred = $q.defer();
                $http.get(config.API_HOST + config.REVIEW_PATH + '?hotel_id=' + hotelId).then(function (response) {
                    deferred.resolve(response.data);
                }, function (error) {
                    deferred.reject(error.data);
                });
                return deferred.promise;
            }
        };
        return reviewService;
    });