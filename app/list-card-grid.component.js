//very similar to tutorial
angular.
  module('myApp').
  component('listCardGrid', {
    templateUrl: 'list-card-grid.html',
    controller:
      function listCardGridController($routeParams, $scope) {
              //this needs to figure out what page you are on then pull the correct data to populate the cards
              $scope.urlHash = location.hash.toString();
              $scope.view = $scope.urlHash.replace(/\#\!\//, '');



      // for (var id in obj) {
      //   if (obj.hasOwnProperty(prop)) {
      //
      //   }
      // }




      }

  });
