var app = angular.module("avBApp")

app.service("usersSrvc", function($http) {
    
    this.getUsers = function() {
        return $http({
            method: 'GET',
            url: '/users'
        })
    }
    
    this.deleteUsers = function(users) {
        var that = this;
        return $http({
            method: "PUT",
            url: "/users/remove",
            data: users
        }).then(function(response) {
            return that.getUsers()
        })
    }
})

