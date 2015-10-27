var app = angular.module("avBApp");

app.service("seasonalSrvc", function() {
    
    var seasonal = [];
    this.addToSeasonal = function(product) {
            seasonal.push(product);
    }
    
    this.getSeasonal = function() {
        return seasonal;
    }
    
    this.removeFromSeasonal = function(i) {
        seasonal.splice(i, 1);
    }
    
});