"use strict";

var app = angular.module('global', ['ngRoute', 'lbServices'])
    .run(['$rootScope', '$location', '$log', function($rootScope, $location, $log) {

    }])
    .config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {

        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false,
        //     rewriteLinks:true
        // });
        $locationProvider.html5Mode(false);

        $routeProvider.when('/', {
            templateUrl: '/views/home/main.html',
            controller: 'mainCtrl'
        }).when('/login', {
            templateUrl: '/views/login.html',
            controller: 'mainCtrl'
        }).when('/register', {
            templateUrl: '/views/register.html',
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

        $httpProvider.interceptors.push(function($q, $location, LoopBackAuth) {
            return {
                responseError: function(rejection) {
                    if (rejection.status == 401) {
                        //Now clearing the loopback values from client browser for safe logout...
                        LoopBackAuth.clearUser();
                        LoopBackAuth.clearStorage();
                        $location.nextAfterLogin = $location.path();
                        $location.path('/login');
                    }
                    return $q.reject(rejection);
                }
            };
        });
    }])
    // .factory('$exceptionHandler', function() {
    //     return function(exception, cause) {
    //         exception.message += ' (caused by "' + cause + '")';
    //         console.log(exception.message);
    //         throw exception;
    //     };
    // });
