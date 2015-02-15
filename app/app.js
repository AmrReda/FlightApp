'use strict';

var flight = angular.module('flight', ['ngRoute']);

flight.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/search', { controller: 'searchController', templateUrl: 'partials/search.html'})
		.when('/results/:origin', { controller: 'resultsController', templateUrl: 'partials/results.html'})
		.otherwise({ redirectTo: '/search'});

}]);