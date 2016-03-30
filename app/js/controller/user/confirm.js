app.controller('confirmCtrl', function($rootScope, $scope, apiServices, $stateParams) {
  if (!$stateParams.uid || !$stateParams.token) {
    $scope.confirm.code = '1'
    return;
  }

  apiServices.userConfirm({
    uid: $stateParams.uid,
    token: $stateParams.token
  }).then(function(response) {
    console.log(response);
  }, function(err) {
    console.error(err);
    var errMessage = '';
    switch (err.data.error.code) {
      case 'USER_NOT_FOUND':
        errMessage = '该用户未注册';
        break;
      case 'INVALID_TOKEN':
        errMessage = '验证链接错误';
        break;
      default:
        errMessage = '验证失败';
    }
    $scope.errMessage = errMessage;
  })
});
