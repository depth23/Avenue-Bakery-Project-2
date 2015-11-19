var app = angular.module("avBApp");

app.service("avBSrvc", function($http) {

  
//  this.getUserName = function() {
//    return $http({
//      method: "GET",
//      url: "" 
//    })
//  };
  
  this.logOutUser = function() {
    return $http({
      method: "GET",
      url: "/logout"
            
    })
  };
    
});