app.controller('blogCtrl', ['$rootScope', '$scope', '$q', 'BlogType', 'Blog', function($rootScope, $scope, $q, BlogType, Blog) {

    $scope.getBlog = function() {
        Blog.find({
            filter: {
                include: ['blogType', 'comments', 'user'],
                order: 'created DESC'
            }
        }).$promise.then(function(response) {
            console.log(response)
            $scope.Blog = response
        })
    }

}])
