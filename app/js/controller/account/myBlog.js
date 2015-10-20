app.controller('myBlogCtrl', function($rootScope, $scope, $q, Blog) {
    $scope.currentPage = 1;

    $scope.getMyBlog = function(pagenum) {
        Blog.find({
            filter: {
                where: {
                    userId: $rootScope.currentUser.id
                },
                include: ['blogType', 'user', 'comments']
            }
        }).$promise.then(function(response) {
            console.log(response)
            $scope.myBlog = response
            $scope.totalItems = response.length
        })
    }

    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
    };
});
