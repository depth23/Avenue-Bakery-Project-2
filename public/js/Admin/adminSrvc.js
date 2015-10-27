var app = angular.module('avBApp');

app.service('adminSrvc', function($http) {
     
    this.getProducts = function() {
        return $http({
            method: 'GET',
            url: '/products'
        })
    }
    
    this.addProduct = function(product) {
        return $http({
            method: 'POST', 
            url: '/products', 
            data: product
        })
    } 
    
    this.deleteProducts = function(products) {
        var that = this;
        return $http({
            method: "PUT",
            url: "/products/remove",
            data: products
        }).then(function(response) {
            return that.getProducts()
        })
    }
    
});