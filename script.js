(function() {
  var app = angular.module('weatherApp');

  var forecastController = function($scope, $http, $log, weather) {
    var onComplete = function(results) {
      data = results.data;
      $scope.image = data.weather[0].icon;
      $scope.city = data.name;
      $scope.weather = data.weather[0].description;
      $scope.temp = data.main.temp;
      $scope.lat = data.coord.lat;
      $scope.lon = data.coord.lon;

      weather.getCityList($scope.lat, $scope.lon)
        .then(onForecastComplete, onError);
    };

    var onForecastComplete = function(results) {
      $scope.forecast = results.data.list;
    };

    var onError = function(error) {
      $log.error(error);
      $scope.errorMessage = error;
    };

    $scope.search = function(searchCity) {
      weather.getCity(searchCity)
        .then(onComplete, onError);
    };
  };

  app.controller('forecastController', ['$scope', '$http', '$log', 'weather', forecastController]);
}())
