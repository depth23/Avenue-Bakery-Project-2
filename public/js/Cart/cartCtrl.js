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
    
    $scope.sum = function(cart) {
      if(cartSrvc.getCart) {
        var sum = 0;
        $.each(cart,function() {
          total += this;
        });
      }
      else {
        sum = 0;
      }
      console.log($scope.sum());
    }
    
});