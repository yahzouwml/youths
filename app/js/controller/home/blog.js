app.controller('blogCtrl', ['$rootScope', '$scope', '$q', 'BlogType', 'Blog', function($rootScope, $scope, $q, BlogType, Blog) {
    $scope.blog = {}
    $scope.form = {}

    $scope.getBlogType = function() {
        BlogType.find().$promise.then(function(response) {
            console.log(response)
            $scope.BlogType = response
            $scope.blog.BlogType = angular.fromJson(response)[0]
        })
    }

    $scope.getBlog = function() {
        Blog.find().$promise.then(function(response) {
            console.log(response)
            $scope.Blog = response
        })
    }

    $scope.addBlog = function() {
        Blog.create({
            title: $scope.blog.title,
            blogTypeId: $scope.blog.blogType.id,
            userId: $rootScope.currentUser.id,
            content: $scope.blog.content,
            click: 0
        }).$promise.then(
            function(response) {
                console.log(response)
                $scope.blog = {}
                $scope.form.form1.$setPristine()
                $scope.notify('success', '添加博客成功')
                $scope.getBlog()
            },
            function(err) {
                console.log(err)
                $scope.notify('error', '添加博客失败')
            }
        )
    }

}])
