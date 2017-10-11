//very similar to tutorial
angular.
  module('myApp').
  component('signInCardGrid', {
    templateUrl: 'sign-in-card-grid.html',
    controller:
      function signInCardGridController($routeParams, $scope) {
              //this needs to figure out what page you are on then pull the correct data to populate the cards



              $scope.signIns =
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
             




      // for (var id in obj) {
      //   if (obj.hasOwnProperty(prop)) {
      //
      //   }
      // }




      }

  });
