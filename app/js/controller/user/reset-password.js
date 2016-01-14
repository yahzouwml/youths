app.controller('resetPasswordCtrl', function($rootScope, $scope, apiServices, $stateParams) {

  $scope.change = function() {
    if ($scope.userC.password != $scope.userC.confirmPassword) {
      $scope.notify('error', "两次输入密码不一致");
      return;
    }

    apiServices.changePassword({
      uid: $stateParams.uid,
      token: $stateParams.token,
      password: $scope.userC.password
    }).then(function(response) {
      console.log(response);
      $scope.userC = {};
      $scope.successAfter($scope.form.change, "修改密码成功")
    }, function(err) {
      console.error(err);
      var errMessage = '';
      switch (err.data.error.code) {
        case 'USER_NOT_FOUND':
          errMessage = '该用户未注册';
          break;
        default:
          errMessage = '验证链接错误';
      }
      $scope.notify('error', errMessage);
    })
  }
});
