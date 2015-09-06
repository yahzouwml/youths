app.controller('addEditCtrl', ['$rootScope', '$scope', '$q', 'BlogType', 'Blog', 'Tag', 'TagRelation', function($rootScope, $scope, $q, BlogType, Blog, Tag, TagRelation) {
    var args = []
    Tag.find({
        filter: {}
    }).$promise.then(function(response) {
        console.log(response)
        $('#input-tags').selectize({
            persist: false,
            createOnBlur: true,
            create: false,
            maxItems: 3,
            valueField: 'id',
            labelField: 'name',
            searchField: 'name',
            options: response,
            sortField: {
                field: 'name',
                direction: 'asc'
            }
        });
    }, function(err) {
        console.log(err)
    })

    $scope.addBlog = function() {
        Blog.create({
            title: $scope.blog.title,
            userId: $rootScope.currentUser.id,
            content: $scope.blog.content,
            click: 0
        }).$promise.then(
            function(response) {
                console.log(response)
                args = $scope.selectTag.split(',')
                var tagRelations = new Array()
                for (i = 0; i < args.length; i++) {
                    tagRelations.push({
                        tagId: args[i],
                        blogId: response.id
                    })
                }
                TagRelation.createMany(tagRelations).$promise.then(function(response) {
                    console.log(response)
                    $scope.blog = {}
                    $scope.successAfter($scope.form.form1, '添加博客成功')
                }, function(err) {
                    console.log(err)
                })
            },
            function(err) {
                console.log(err)
                $scope.notify('error', '添加博客失败')
            }
        )
    }
}]);
