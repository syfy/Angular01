'use strict';

/**
 * @ngdoc overview
 * @name stockDog2App
 * @description
 * # stockDog2App
 *
 * Main module of the application.
 */
angular
  .module('stockDog2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'mgcrea.ngStrap',
	'googlechart'
  ])
   .constant('_',window._)
  .config(function ($routeProvider) {
    $routeProvider
      
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/watchlist/:listId', {
        templateUrl: 'views/watchlist.html',
        controller: 'WatchlistCtrl'
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  });
