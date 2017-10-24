'use strict';
angular.module('myApp', [
  'ngRoute',
  'listViewTop',
  'voteView',
  'signInView',
  'myOrgView',
  'myApp.version'
]);

var app = angular.module('myApp', [
  'ngRoute',
  'listViewTop',
  'voteView',
  'signInView',
  'myOrgView',
  'myApp.version'
]);

app.controller('myCtrl', function($scope) {
        $scope.showModal = false;
        $scope.open = function(param){
                console.log(param);
        $scope.showModal = !$scope.showModal;
        };
});
