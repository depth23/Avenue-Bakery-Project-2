var app = angular.module('avBApp');

app.service('menuService', function($http) {
    
  this.getMenu = function() {
    return $http({
      method: "GET",
      url: "/Products"
    }).then(function(results) {
      return _.groupBy(results.data, 'category');
    }) 
  }  
  
});