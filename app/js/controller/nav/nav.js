app.controller('navCtrl', ['$rootScope', '$scope', 'apiServices', function($rootScope, $scope, apiServices) {
    $scope.nav = {}
    $scope.form = {}

    $scope.getNav = function() {
        apiServices.navFind().then(function(response) {
            console.log(response)
            $scope.Nav = response
        })
    }

    $scope.change = function(id) {
        $scope.id = id
    }
}]);
