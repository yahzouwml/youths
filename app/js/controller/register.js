app.controller('registerCtrl', ['$rootScope', '$scope', 'AuthService', function($rootScope, $scope, AuthService) {
    $scope.register = function() {
        AuthService.register($scope.user.email, $scope.user.password).then(function(data) {
            console.log(data);
            if (data.$resolved) {
                $scope.notify('success', "注册成功");
                $scope.user = {};
                $scope.form.$setPristine();
            } else {
                $scope.notify('error', "注册失败");
            }
        });
    }
}]);
