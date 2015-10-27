var app = angular.module("avBApp");

app.service("avBSrvc", function($http) {

    this.logOutUser = function() {
        return $http({
            method: "GET",
            url: "/logout"
            
        })
    }
    
});