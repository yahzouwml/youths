app.controller('itNavCtrl', ['$rootScope', '$scope', '$q', 'NavType', 'Nav', function($rootScope, $scope, $q, NavType, Nav) {
    $scope.nav = {}
    $scope.form = {}

    NavType.find().$promise.then(function(response) {
        console.log(response)
        $scope.NavType = response
        $scope.nav.navType = angular.fromJson(response)[0]
    })
    
    Nav.find().$promise.then(function(response) {
        console.log(response)
        $scope.Nav = response
    })

    $scope.addNav = function() {
        Nav.create({
            name: $scope.nav.name,
            url: $scope.nav.url,
            navTypeId: $scope.nav.navType.id,
            img: $scope.nav.img,
            describe: $scope.nav.describe
        }).$promise.then(
            function(response) {
                console.log(response)
                $scope.nav = {}
                $scope.form.form1.$setPristine()
                $scope.notify('success', '添加网址成功')
            },
            function(err) {
                console.log(err)
                $scope.notify('error', '添加网址失败')

            }
        )
    }
}]);
