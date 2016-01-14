app.controller('accountCenterCtrl', function($rootScope, $scope, $q, User, ipCookie) {
  $scope.getUser = function() {
    User.findById({
      id: $rootScope.currentUser.id
    }).$promise.then(function(response) {
      console.log(response)
      $scope.User = response
    }, function(err) {
      ipCookie.remove('currentUser')
      $rootScope.currentUser = null
      $scope.checkLogin()
    })
  }

  $scope.getUser()
});
