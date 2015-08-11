app.controller('mainCtrl', ['$rootScope', '$scope', 'ipCookie', 'AuthService', function($rootScope, $scope, ipCookie, AuthService) {
    if ($rootScope.currentUser == null) {
        console.log(ipCookie('currentUser'))
        $rootScope.currentUser = ipCookie('currentUser')
    }


    $scope.register = function() {
        AuthService.register($scope.user.email, $scope.user.password)
            .then(
                function(response) {
                    console.log(response);
                    $scope.notify('success', "注册成功");
                    $scope.user = {};
                    $scope.form.$setPristine();
                },
                function(err) {
                    console.log(err)
                    if (err.status == '422') {
                        $scope.notify('warning', "邮箱已存在")
                    } else {
                        $scope.notify('error', "注册失败")
                    }
                }
            );
    }

    $scope.login = function() {
        AuthService.login($scope.user.email, $scope.user.password)
            .then(
                function(response) {
                    console.log(response);
                    $scope.notify('success', "登录成功");
                    $scope.user = {};
                    $scope.form.$setPristine();
                    $rootScope.currentUser = {
                        id: response.user.id,
                        tokenId: response.id,
                        email: response.user.email
                    }
                    ipCookie('currentUser', $rootScope.currentUser, {
                        expires: 7
                    });
                },
                function(err) {
                    console.log(err)
                    if (err.status == '401') {
                        $scope.notify('error', "邮箱或密码错误")
                    } else {
                        $scope.notify('error', "登陆失败")
                    }
                }
            )
    }

    $scope.logout = function() {
        AuthService.logout().then(function(response) {
            $rootScope.currentUser = null
            ipCookie.remove('currentUser')
        })
    }
}])
