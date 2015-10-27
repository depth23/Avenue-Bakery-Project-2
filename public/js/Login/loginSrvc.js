var app = angular.module("avBApp")

app.service("loginSrvc", function($http) {
   
    this.addNewUser = function(user) {
        return $http({
            method: 'POST', 
            url: '/user', 
            data: user
        })
    } 
    this.logInUser = function(credentials) {
        return $http({
            method: 'POST',
            url: '/login',
            data: credentials
        })
    }
})