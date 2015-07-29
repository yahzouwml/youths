var app = angular.module('global', []);

app.run('name', ['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home/main.html',
        controller: 'mainCtrl'
    }).when('/home/blog', {
        templateUrl: '/views/home/blog.html',
        controller: 'blogCtrl'
    }).otherWise({
        redirecTo: '/'
    });
}]).config(['', function() {

}]);
