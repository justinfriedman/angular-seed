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


              // https://rapid-recruit.herokuapp.com/api/test
              $http.get('https://cors-anywhere.herokuapp.com/https://rapid-recruit.herokuapp.com/api/test').
                  success(function(data, status, headers, config) {
                    $scope.coffees = data;
                    console.log(data);
                  }).
                  error(function(data, status, headers, config) {
                    // log error
                  });



      // for (var id in obj) {
      //   if (obj.hasOwnProperty(prop)) {
      //
      //   }
      // }




      }

  });
