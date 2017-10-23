//very similar to tutorial
angular.
  module('myOrgView').
  component('myOrgView', {
    templateUrl: 'my-org-view.html',
    controller:
      function myOrgController($routeParams, $scope, $http) {
              //this needs to figure out what page you are on then pull the correct data to populate the cards
              $scope.urlHash = location.hash.toString();
              $scope.view = $scope.urlHash.replace(/\#\!\//, '');

              $http.get('http://34.203.219.137/g4/organizations')
                      .success(function(result) {
                          $scope.organization = result;
                      })
                      .error(function(data, status) {
                          $log.info(data);
                      });
              
              $http.get('http://34.203.219.137/g4/members')
                      .success(function(result) {
                          $scope.members = result;
                      })
                      .error(function(data, status) {
                          $log.info(data);
                      });
      }

  });
