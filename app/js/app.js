"use strict";

var app = angular.module('global', ['ngRoute','lbServices']);

app.run(['$rootScope', '$location', '$log', function($rootScope, $location, $log) {
    
}]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false,
    //     rewriteLinks:true
    // });
    $locationProvider.html5Mode(false);

    $routeProvider.when('/', {
        templateUrl: '/views/home/main.html',
        controller: 'mainCtrl'
    }).when('/home/blog', {
        templateUrl: '/views/home/blog.html',
        controller: 'blogCtrl'
    }).when('/home/blogdetail', {
        templateUrl: '/views/home/blogdetail.html'
    }).when('/home/compenents', {
        templateUrl: '/views/home/compenents.html'
    }).when('/home/contact', {
        templateUrl: '/views/home/contact.html'
    }).when('/home/portfolio', {
        templateUrl: '/views/home/portfolio.html'
    }).when('/home/pricingbox', {
        templateUrl: '/views/home/pricingbox.html'
    }).when('/home/recruit', {
        templateUrl: '/views/home/recruit.html'
    }).when('/home/typography', {
        templateUrl: '/views/home/typography.html'
    }).when('/service/index', {
        templateUrl: '/views/service/index.html'
    }).when('/service/erya', {
        templateUrl: '/views/service/erya.html'
    }).when('/service/hangweb', {
        templateUrl: '/views/service/hangweb.html'
    }).when('/service/itnav', {
        templateUrl: '/views/service/itnav.html'
    }).otherwise({
        redirecTo: '/'
    });
}]);
