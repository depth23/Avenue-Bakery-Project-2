var app = angular.module('avBApp');

app.controller('cartCtrl', function($scope, cartSrvc) {
    
    var cart = function() {
        $scope.cart = cartSrvc.getCart();
    }
    
    cart();
    
    console.log($scope.cart);
    $scope.removeFromCart = function(i) {
        cartSrvc.removeFromCart(i);
        cart();
    }
    
});