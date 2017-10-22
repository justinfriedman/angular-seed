//very similar to tutorial
angular.
  module('myApp').
  component('listCardGrid', {
    templateUrl: 'list-card-grid.html',
    controller:
      function listCardGridController($routeParams, $scope, $http) {
              //this needs to figure out what page you are on then pull the correct data to populate the cards
              $scope.urlHash = location.hash.toString();
              $scope.view = $scope.urlHash.replace(/\#\!\//, '');

              $http.get('http://34.203.219.137/g4/organizations')
                      .success(function(result) {
                          $scope.coffees = result;
                      })
                      .error(function(data, status) {
                          $log.info(data);
                      });
      }

  });
