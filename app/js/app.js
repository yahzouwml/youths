"use strict";

var app = angular.module('global', ['ui.router', 'ui.bootstrap', 'ipCookie', 'lbServices', 'jcs-autoValidate', 'angular-loading-bar', 'textAngular'])
    .run(['$rootScope', '$location', '$log', 'bootstrap3ElementModifier', 'defaultErrorMessageResolver', function($rootScope, $location, $log, bootstrap3ElementModifier, defaultErrorMessageResolver) {
        bootstrap3ElementModifier.enableValidationStateIcons(true);
        defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages) {
            errorMessages['required'] = '不能为空';
            errorMessages['email'] = '请输入有效的邮箱地址 ';
            errorMessages['minlength'] = '请至少输入{0}个字符';
            errorMessages['maxlength'] = '请至多输入{0}个字符';
            errorMessages['url'] = '请输入一个有效的网址，例如：http(s)://www.google.com'
        });
    }])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

        $locationProvider.html5Mode(false);
        $stateProvider
            .state('index', {
                url: "/",
                templateUrl: "/views/home/main.html",
                controller: "mainCtrl"
            })
            .state('blog', {
                url: "/home/blog",
                templateUrl: "/views/home/blog.html",
                controller: "blogCtrl"
            })
            .state('blogDetail', {
                url: "/home/blogDetail/:id",
                templateUrl: "/views/home/blogDetail.html",
                controller: "blogDetailCtrl"
            })
            .state('itNav', {
                url: "/service/itnav",
                templateUrl: "/views/service/itnav.html",
                controller: "itNavCtrl"
            })
            .state('account', {
                url: "/account",
                templateUrl: "/views/account/center.html",
                controller: "accountCenterCtrl"
            })
            .state('account.myBlog', {
                url: "/myBlog",
                controller: "myBlogCtrl",
                templateUrl: "/views/account/myBlog.html"
            });
    }])
    .config(['$httpProvider', '$locationProvider', function($httpProvider, $locationProvider) {
        $httpProvider.interceptors.push(function($q, $location, LoopBackAuth) {
            return {
                responseError: function(rejection) {
                    var message = ''
                    if (rejection.status == 401) {
                        //Now clearing the loopback values from client browser for safe logout...
                        LoopBackAuth.clearUser();
                        LoopBackAuth.clearStorage();
                        $location.nextAfterLogin = $location.path();
                        $location.path('/login');
                    }
                    if (rejection.data) {
                        switch (rejection.data.error.code) {
                            case 'LOGIN_FAILED_EMAIL_NOT_VERIFIED':
                                message = '邮箱尚未验证'
                                break;
                            case 'LOGIN_FAILED':
                                message = '邮箱或密码错误'
                                break;
                        }
                    }
                    if (message != '') {
                        Lobibox.notify('error', {
                            msg: message
                        })
                    }
                    return $q.reject(rejection);
                }
            }
        })
    }])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }])
    .config(function(LoopBackResourceProvider) {

        // Use a custom auth header instead of the default 'Authorization'
        LoopBackResourceProvider.setAuthHeader('X-Access-Token');

        // Change the URL where to access the LoopBack REST API server
        LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');
    })
