app.controller('accountCenterCtrl', ['$rootScope', '$scope', '$q', 'User', function($rootScope, $scope, $q, User) {
    $scope.getUser = function() {
        User.findById({
            id: $rootScope.currentUser.id
        }).$promise.then(function(response) {
            console.log(response)
            $scope.User = response
        })
    }
}])
