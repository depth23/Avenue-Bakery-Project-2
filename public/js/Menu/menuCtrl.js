var app = angular.module('avBApp');

app.controller('menuCtrl', function($scope, menuService, cartSrvc) {
    
    menuService.getMenu().then(function(menuItems) {
        $scope.menuItems = menuItems;
    });
//    console.log($scope.getMenu);
    
    $scope.addToCart = function(item) {
        cartSrvc.addToCart(item);
    }
});