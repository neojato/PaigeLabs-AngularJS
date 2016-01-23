(function() {
  var weather = function($http) {
    var getCityList = function(lat, lon) {
      return $http.get('https://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + lon + '&cnt=10&units=imperial');
    };

    var getCity = function(searchCity) {
      return $http.get('https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&units=imperial');
    };

    var getCityForecast = function(cityId) {
      return $http.get('https://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&units=imperial');
    };

    return {
      getCityList: getCityList,
      getCity: getCity,
      getCityForecast: getCityForecast
    };
  };

  var app = angular.module('weatherApp')
    .factory('weather', ['$http', weather]);
}())
