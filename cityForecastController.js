(function() {
  var app = angular.module('weatherApp');

  var cityForecastController = function($scope, $routeParams, weather) {
    weather.getCityForecast($routeParams.cityId)
      .then(function(results) {
        $scope.forecast = results.data.list;
      });
  };

  app.controller('cityForecastController', ['$scope', '$routeParams', 'weather', cityForecastController]);
}())
