var app = angular.module('avBApp');

app.service('cartSrvc', function() {
    
    var cart = [];
    this.addToCart = function(item) {
            cart.push(item);
    }
    
    this.getCart = function() {
        return cart;
    }
    
    this.removeFromCart = function(i) {
        cart.splice(i, 1);
    }
    
});