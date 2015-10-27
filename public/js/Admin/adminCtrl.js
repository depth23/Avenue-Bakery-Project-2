var app = angular.module('avBApp');

app.controller('adminCtrl', function($scope, adminSrvc, usersSrvc, products, users, seasonalSrvc) {
//    console.log(111111, products)
    $scope.products = products.data;
    $scope.addProduct = function(product) {
        adminSrvc.addProduct(product).then(function(response) {
            $scope.newProduct = '';
            $scope.products.push(response.data);
        })
    }
    
//    console.log(2222222, users)
    $scope.users = users.data;
    
    $scope.usersToDelete = [];
    $scope.productsToDelete = [];
    
    $scope.addToDelete = function(obj, arr) {
        if (obj.delete) {
            arr.push(obj)
        } else {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i]._id == obj._id) {
                    arr.splice(i, 1);
                }
            }
        }
        console.log(arr);
    }
    
    $scope.deleteProducts = function(arr) {
        adminSrvc.deleteProducts(arr).then(function(response) {
            $scope.products = response.data;
        })
    };
      
    $scope.deleteUsers = function(arr) {
        usersSrvc.deleteUsers(arr).then(function(response) {
//            console.log(24556343, response);
            $scope.users = response.data;
        })
    };
    
    $scope.addToSeasonal = function(item) {
        seasonalSrvc.addToSeasonal(item);
    }
});

