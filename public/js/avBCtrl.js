var app = angular.module('avBApp');

app.controller('avBCtrl', function($scope, avBSrvc, $location) {

//  Checked for currently logged in
  avBSrvc.getUserName().then(function(res) {
//      if (res.data.admin === true) {
//        $scope.customerName = Admin;
//        $scope.user = res.data;
//      }
//      else {
      console.log(res);
       $scope.customerName = 'Welcome, ' + res.data.first;
//        $scope.user = res.data;
//        console.log('Current User', res);
//      }
    });  
  
  
  
  $scope.logOutUser = function() {
        avBSrvc.logOutUser().then(function(response) {
            console.log(response);
            $location.path('/');
        });
    }
    
});