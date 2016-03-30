"use strict";

var app = angular.module('global', ['ui.router', 'ngSanitize', 'ngImgCrop', 'ipCookie', 'lbServices', 'jcs-autoValidate', 'wu.masonry', 'envconfig'])
  .run(function($rootScope, $location, $log, bootstrap3ElementModifier, defaultErrorMessageResolver, $state, $stateParams, $http, $window, ENV) {
    $rootScope.mainServer = ENV.mainServer
    $rootScope.storageServer = ENV.storageServer
    $rootScope.apiServer = ENV.apiServer
    $rootScope.apiHost = ENV.apiHost

    bootstrap3ElementModifier.enableValidationStateIcons(true);
    defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages) {
      errorMessages['required'] = '输入点什么吧...';
      errorMessages['email'] = '请输入有效的邮箱地址 ';
      errorMessages['minlength'] = '请至少输入{0}个字符';
      errorMessages['maxlength'] = '请至多输入{0}个字符';
      errorMessages['url'] = '请输入一个有效的网址，例如：http(s)://www.google.com'
    });

    $rootScope.$state = $state;
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      console.log('state', $state);
      console.log('change start from:', fromState)
      console.log('change start to:', toState)

      angular.element('body').animate({
        scrollTop: 0
      }, 1000);
    })

    $rootScope.isCurrent = function(url) {
      return $state.current.name.indexOf(url) > -1
    }
  })
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    $locationProvider.html5Mode(true);
    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "views/main.html",
        controller: "mainCtrl",
        data: {
          pageTitle: ''
        }
      })
      .state('blog', {
        url: "/blog",
        templateUrl: "views/blog/blog.html",
        controller: "blogCtrl",
        data: {
          pageTitle: '趣博客'
        }
      })
      .state('blogadd', {
        url: "/blog/add",
        templateUrl: "views/blog/addEdit.html",
        controller: "addEditCtrl",
        data: {
          pageTitle: '写文章'
        }
      })
      .state('blogedit', {
        url: "/blog/edit/:id",
        templateUrl: "views/blog/addEdit.html",
        controller: "addEditCtrl",
        data: {
          pageTitle: '改文章'
        }
      })
      .state('blogDetail', {
        url: "/blog/detail/:id",
        templateUrl: "views/blog/detail.html",
        controller: "blogDetailCtrl",
        data: {
          pageTitle: '文章详情'
        }
      })
      .state('nav', {
        url: "/nav",
        templateUrl: "views/nav/nav.html",
        controller: "navCtrl",
        data: {
          pageTitle: '酷站'
        }
      })
      .state('navadd', {
        url: "/nav.add",
        templateUrl: "views/nav/add.html",
        controller: "navAddCtrl",
        data: {
          pageTitle: '添加酷站'
        }
      })
      .state('zhihuarticle', {
        url: "/zhihu.article",
        templateUrl: "views/zhihu/article.html",
        controller: "zhihuArticleCtrl",
        data: {
          pageTitle: '知乎文章精选'
        }
      })
      .state('zhihuuser', {
        url: "/zhihu.user",
        templateUrl: "views/zhihu/user.html",
        controller: "zhihuUserCtrl",
        data: {
          pageTitle: '知乎用户、知乎妹子'
        }
      })
      .state('account', {
        url: "/account",
        templateUrl: "views/account/center.html",
        controller: "accountCenterCtrl",
        data: {
          pageTitle: '个人账户'
        }
      })
      .state('account.myBlog', {
        url: "/myBlog",
        controller: "myBlogCtrl",
        templateUrl: "views/account/myBlog.html",
        data: {
          pageTitle: ''
        }
      })
      .state('account.settings', {
        url: "/settings",
        controller: "settingsCtrl",
        templateUrl: "views/account/settings.html",
        data: {
          pageTitle: '个人设置'
        }
      })
      .state('confirm', {
        url: "/confirm?&uid&token",
        controller: "confirmCtrl",
        templateUrl: "views/user/confirm.html",
        data: {
          pageTitle: '验证邮箱'
        }
      })
      .state('resetpassword', {
        url: "/reset.password/:uid/:token",
        controller: "resetPasswordCtrl",
        templateUrl: "views/user/reset-password.html",
        data: {
          pageTitle: '重置密码'
        }
      });

    $urlRouterProvider.otherwise('/');
  })
  .config(function($httpProvider, $locationProvider) {
    $httpProvider.interceptors.push(function($q, $location, LoopBackAuth) {
      return {
        'request': function(config) {
          $('.spinner2').show().parent('.btn').attr('disabled', 'disabled');
          return config;
        },
        'requestError': function(config) {
          $('.spinner2').show().parent('.btn').attr('disabled', 'disabled');
          return config;
        },
        'response': function(config) {
          $('.spinner2').hide().parent('.btn').removeAttr('disabled');
          return config;
        },
        responseError: function(rejection) {
          $('.spinner2').hide().parent('.btn').removeAttr('disabled');
          var message = '';
          if (rejection.data) {
            if (rejection.status == 401) {
              switch (rejection.data.error.code) {
                case 'LOGIN_FAILED_EMAIL_NOT_VERIFIED':
                  message = '邮箱尚未验证';
                  break;
                case 'LOGIN_FAILED':
                  message = '邮箱或密码错误';
                  break;
                default:
                  message = '';
                  $('#Login').modal();
              }
            }
          }
          if (message != '') {
            Lobibox.notify('error', {
              msg: message
            });
          }
          return $q.reject(rejection);
        }
      }
    })
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }])
  .config(function(ENV, LoopBackResourceProvider) {

    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');

    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase(ENV.apiServer);
  });
