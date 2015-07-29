var app = angular.module('global', ['ngRoute']);

app.config(['', function($locationProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home/main.html',
        controller: 'mainCtrl'
    }).when('/home/blog', {
        templateUrl: '/views/home/blog.html',
        controller: 'blogCtrl'
    }).otherWise({
        redirecTo: '/'
    });
}]);
