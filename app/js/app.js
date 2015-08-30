"use strict";

var app = angular.module('global', ['ui.router', 'ngSanitize', 'ui.bootstrap', 'ngImgCrop', 'ipCookie', 'lbServices', 'jcs-autoValidate', 'angular-loading-bar', 'textAngular'])
    .run(['$rootScope', '$location', '$log', 'bootstrap3ElementModifier', 'defaultErrorMessageResolver', '$state', '$stateParams', '$http', function($rootScope, $location, $log, bootstrap3ElementModifier, defaultErrorMessageResolver, $state, $stateParams, $http) {
        $rootScope.config = {}
        $http.get('../config/config.json').success(function(response) {
            if (!response.isRelease) {
                $rootScope.mainServer = response.mainServer.env
                $rootScope.storageServer = response.storageServer.env
                $rootScope.apiServer = response.apiServer.env
            } else {
                $rootScope.mainServer = response.mainServer
                $rootScope.storageServer = response.storageServer
                $rootScope.apiServer = response.apiServer
            }
        });

        bootstrap3ElementModifier.enableValidationStateIcons(true);
        defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages) {
            errorMessages['required'] = '输入点什么吧...';
            errorMessages['email'] = '请输入有效的邮箱地址 ';
            errorMessages['minlength'] = '请至少输入{0}个字符';
            errorMessages['maxlength'] = '请至多输入{0}个字符';
            errorMessages['url'] = '请输入一个有效的网址，例如：http(s)://www.google.com'
        });

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            console.log('change start from:' + angular.toJson(fromState))
            console.log('change start to:' + angular.toJson(toState))
            $("body").animate({
                scrollTop: 0
            }, 1000);
            $("header .navbar").removeClass('navbar-a1 navbar-a2')
        })
    }])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

        $locationProvider.html5Mode(false);
        $stateProvider
            .state('main', {
                url: "/",
                templateUrl: "/views/main.html",
                controller: "mainCtrl"
            })
            .state('blog', {
                url: "/blog",
                templateUrl: "/views/blog/blog.html",
                controller: "blogCtrl"
            })
            .state('blog.add', {
                url: "/add",
                templateUrl: "/views/blog/addEdit.html",
                controller: "addEditCtrl"
            })
            .state('blog.edit', {
                url: "/edit/:id",
                templateUrl: "/views/blog/addEdit.html",
                controller: "addEditCtrl"
            })
            .state('blog.Detail', {
                url: "/detail/:id",
                templateUrl: "/views/blog/detail.html",
                controller: "blogDetailCtrl"
            })
            .state('nav', {
                url: "/nav",
                templateUrl: "/views/nav/nav.html",
                controller: "navCtrl"
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
            })
            .state('account.settings', {
                url: "/settings",
                controller: "settingsCtrl",
                templateUrl: "/views/account/settings.html"
            });

        $urlRouterProvider.otherwise('/');
    }])
    .config(['$httpProvider', '$locationProvider', function($httpProvider, $locationProvider) {
        $httpProvider.interceptors.push(function($q, $location, LoopBackAuth) {
            return {
                responseError: function(rejection) {
                    var message = ''
                    if (rejection.data) {
                        if (rejection.status == 401) {
                            switch (rejection.data.error.code) {
                                case 'LOGIN_FAILED_EMAIL_NOT_VERIFIED':
                                    message = '邮箱尚未验证'
                                    break;
                                case 'LOGIN_FAILED':
                                    message = '邮箱或密码错误'
                                    break;
                                default:
                                    message = '请先登录'
                                    $('#loginRegister').modal()
                            }
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
        LoopBackResourceProvider.setUrlBase('http://localhost:3010/api');
    })
