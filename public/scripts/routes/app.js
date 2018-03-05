var app = angular.module('myApp', ['ui.router','rzModule']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '../../views/home.html',
            controller: 'homeController'
        })

        .state('mobiles', {
            url: '/mobiles',
            templateUrl: '../../views/mobiles.html',
            controller: 'mobileCtrl'
            
        })

        .state('clothes', {
            url: '/clothes',
            templateUrl: '../../views/clothes.html',
            controller:'clothingCtrl'
            
        })

        .state('sports', {
            url: '/sports',
            templateUrl: '../../views/sports.html',
            controller:'sportCtrl'
            
        })

        .state('plp',{
            url:'/plp',
            templateUrl:'../../views/plp.html',
            controller:'plpCtrl'
        })

        .state('plpSport',{
            url:'/plpSport',
            templateUrl:'../../views/plpSport.html',
            controller:'plpSportCtrl'

        })
        .state('plpClothes',{
            url:'/plpClothes',
            templateUrl:'../../views/plpClothes.html',
            controller:'plpClothesCtrl'

        })

        .state('toCart',{
            url:'/cart',
            templateUrl:'../../views/cart.html',
            controller:'cartCtrl'

        })

});

