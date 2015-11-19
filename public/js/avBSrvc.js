var app = angular.module("avBApp");

app.service("avBSrvc", function($http) {

  
  this.getUserName = function() {
    return $http({
      method: "GET",
      url: "/user" 
    }).then(function(res) {
      return res.data;
    })
  };
  
  this.logOutUser = function() {
    return $http({
      method: "GET",
      url: "/logout"
            
    })
  };
    
});