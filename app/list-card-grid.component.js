//very similar to tutorial
angular.
  module('myApp').
  component('listCardGrid', {
    templateUrl: 'list-card-grid.html',
    controller:
      function listCardGridController($routeParams, $scope, $rootScope) {
              //this needs to figure out what page you are on then pull the correct data to populate the cards
              $scope.urlHash = location.hash.toString();
              $scope.view = $scope.urlHash.replace(/\#\!\//, '');



              $rootScope.lists =
              [
               {
               'name': 'Fall Rush',
               'count': '100'
               },
               {
               'name': 'Fall 2nd Round',
               'count': '90'
               },
               {
               'name': 'Test',
               'count': '50'
               },
               {
               'name': 'Spring',
               'count': '10'
               },
               {
               'name': 'Info Session',
               'count': '0'
               }
       ];

       $scope.lists = $rootScope.lists;
               console.log($scope.lists);




      // for (var id in obj) {
      //   if (obj.hasOwnProperty(prop)) {
      //
      //   }
      // }




      }

  });
