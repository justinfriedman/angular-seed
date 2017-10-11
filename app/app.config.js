//very similar to tutorial

angular.
  module('myApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.

        when('/main', {
          template: '<h2>Lets get rushin<h2>'
        }).
        when('/list', {
          template: '<list-view></list-view>'
        }).
        when('/vote', {
          template: '<vote-view></vote-view>'
        }).
        when('/sign-in', {
          template: '<sign-in-view></sign-in-view>'
        }).
        when('/new-list', {
          template: '<new-list-view></new-list-view>'
        }).
        when('/new-sign-in', {
          template: '<new-sign-in-view></new-sign-in-view>'
        }).
        
        otherwise('/main');
    }
  ]);
