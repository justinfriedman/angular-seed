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
         when('/my-org', {
          template: '<my-org-view></my-org-view>'
        }).
        when('/sign-in', {
          template: '<sign-in-view></sign-in-view>'
        }).
        when('/new-list', {
          template: '<new-list-view></new-list-view>'
        }).
        otherwise('/main');
    }
  ]);
