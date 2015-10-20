app.controller('mainCtrl', function($rootScope, $scope, ipCookie, AuthService, User) {
    _.containsUser = function(obj, key, id) {
        return !id ? false : !_.isEmpty(obj) && _.every(obj, key, id)
    }

    $scope.toggle = function(target) {
        $(target).siblings('.hide-list').fadeOut()
        $(target).slideToggle()
    }

    $rootScope._ = _

    if ($rootScope.currentUser == null) {
        console.log(ipCookie('currentUser'))
        $rootScope.currentUser = ipCookie('currentUser')
    }

    $scope.register = function() {
        AuthService.register($scope.userR.email, $scope.userR.password, $scope.userR.username)
            .then(
                function(response) {
                    console.log(response);
                    $scope.userR = {};
                    $scope.successAfter($scope.form.register, "注册成功,请登录邮箱验证")
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

    $scope.checkUsername = function() {
        User.exists({
            username: $scope.userR.username
        }).$promise.then(function(response) {
            console.log(response)
        }, function(err) {
            console.log(err)
        })
    }
    $scope.login = function() {
        AuthService.login($scope.userL.email, $scope.userL.password)
            .then(
                function(response) {
                    console.log(response);
                    $scope.notify('success', "登录成功");
                    $scope.userL = {};
                    $scope.form.login.$setPristine();
                    $scope.closeModal()
                    $rootScope.currentUser = {
                        id: response.user.id,
                        tokenId: response.id,
                        email: response.user.email,
                        username: response.user.username,
                        avatar: response.user.avatar
                    }
                    ipCookie('currentUser', $rootScope.currentUser, {
                        expires: 7
                    });
                },
                function(err) {
                    console.log(err)
                    if (err.status != '401') {
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

    $scope.forgetPassword = function() {
        User.resetPassword({
            email: $scope.email
        }).$promise.then(function(response) {
            console.log(response)
        })
    }

    $scope.checkLogin = function() {
        if (!$rootScope.currentUser) {
            $scope.notify('error', '请先登录')
            $scope.showModal('#loginRegister')
            return false;
        }
        return true
    }

    $scope.successAfter = function(form, message) {
        form.$setPristine()
        $scope.notify('success', message)
    }

    window._bd_share_config = {
        "common": {
            "bdSnsKey": {},
            "bdText": "Youths,发现有趣的事",
            "bdUrl": "http://youths.cc/",
            "bdMini": "2",
            "bdMiniList": false,
            "bdPic": "",
            "bdStyle": "1",
            "bdSize": "24",
            "onBeforeClick": function(cmd, config) {
                config.bdText = $rootScope.bdText
                config.bdUrl = $rootScope.bdUrl
                return config
            }
        },
        "share": {},
        "image": {
            "viewList": ["tsina", "qzone", "tqq", "renren", "weixin"],
            "viewText": "分享到：",
            "viewSize": "16"
        },
        "selectShare": {
            "bdContainerClass": null,
            "bdSelectMiniList": ["tsina", "qzone", "tqq", "renren", "weixin"]
        }
    };
});
