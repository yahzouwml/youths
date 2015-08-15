app.controller('blogDetailCtrl', ['$rootScope', '$scope', '$q', 'BlogType', 'Blog', '$routeParams', function($rootScope, $scope, $q, BlogType, Blog, $routeParams) {
    $scope.params = $routeParams
    console.log($scope.params)
    Blog.findById({id:$scope.params.id}).$promise.then(function(response) {
        console.log(response)
        $scope.blog = response
    })
}])
