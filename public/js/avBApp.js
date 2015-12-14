var app = angular.module('avBApp', ['ngRoute']);

app.config(function($routeProvider){ $routeProvider
    .when('/', { 
        templateUrl: 'js/Home/homeTmpl.html', 
        controller: 'homeCtrl' 
    })
    .when('/Register', {
          templateUrl: 'js/Login/loginTmpl.html',
          controller: 'loginCtrl' 
    })
    .when('/About/', {
          templateUrl: 'js/About/aboutTmpl.html',
          controller: 'aboutCtrl' 
    })
    .when('/Faqs/', { 
          templateUrl: 'js/Faqs/faqsTmpl.html',
          controller: 'faqsCtrl' 
    }) 
    .when('/Menu/', { 
        templateUrl: 'js/Menu/menuTmpl.html', 
        controller: 'menuCtrl',
//        resolve: {
//            function(menuService){
//                return menuService.getMenu();          
//            }
//        }
    }) 
    .when('/Seasonal/', {
          templateUrl: 'js/Seasonal/seasonalTmpl.html',
          controller: 'seasonalCtrl' 
    })
    .when('/Cart/', {
          templateUrl: 'js/Cart/cartTmpl.html',
          controller: 'cartCtrl' 
    })
//    .when('/Admin/', {
//          templateUrl: 'js/Admin/adminTmpl.html',
//          controller: 'adminCtrl',
//          resolve: {
//              products: function(adminSrvc) {
//                return adminSrvc.getProducts()
//              },
//              users: function(usersSrvc) {
//                return usersSrvc.getUsers()   
//              }
//          }
//    })
          
      .otherwise({ redirectTo: '/' }) });