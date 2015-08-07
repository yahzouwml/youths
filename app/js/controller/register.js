app.controller('registerCtrl', ['$rootScope', '$scope', 'AuthService', function($rootScope, $scope, AuthService) {
    $scope.register = function() {
        AuthService.register($scope.user.email, $scope.user.password).then(function() {
            console.log('success');
        });
    }
}]);
