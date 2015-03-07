(function() {
  var app = angular.module('weatherApp', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/cityList', {
          templateUrl: 'main.html',
          controller: 'forecastController'
        })
        .when('/cityForecast/:cityId', {
          templateUrl: 'cityForecast.html',
          controller: 'cityForecastController'
        })
        .otherwise({redirectTo:'/cityList'});
    });
}())
