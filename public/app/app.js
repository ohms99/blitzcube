'use strict'

  angular.module('blitzcube', ['ui.router', 'ngSanitize'])
  .config(function($compileProvider, $stateProvider, $urlRouterProvider) {
    $compileProvider.debugInfoEnabled(false);
    $stateProvider
      .state('app', {
        url: '/',
        views: {
          'content': {
            templateUrl: 'templates/home.html',
          },
        }
      })
      .state('app.home', {
        url: 'home',
        views: {
          'content@': {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
          }
        }
      })
      .state('app.about', {
        url: 'about',
        views: {
          'content@': {
            templateUrl: 'templates/about.html',
            controller: 'AboutController'
          }
        }
      });
      $urlRouterProvider.otherwise('/');
  });
