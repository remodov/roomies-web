'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesLoginCtrl
 * @description
 * # PagesLoginCtrl
 * Controller of the minovateApp
 */
app.controller('LoginCtrl', function ($scope, $state, $http) {
    $scope.login = function() {
      $state.go('app.dashboard');
    };
    
    $scope.createRequest = function() {
     $http.get('http://roomies.westeurope.cloudapp.azure.com:8080/api').success(function(data) 
     {
        $scope.phone = data;
        alert(data);
     });
     
    }
  });
