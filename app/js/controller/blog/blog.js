app.controller('blogCtrl', ['$rootScope', '$scope', '$q', 'Blog', 'Tag', function($rootScope, $scope, $q, Blog, Tag) {
    $scope.blog = {}
    $scope.form = {}
    $scope.id = ''
    $scope.pageIndex = 0
    $scope.none = false

    $(window).scroll(function(event) {
        var height = $('#loading').offset().top
        console.log(height + "," + $(window).scrollTop())
        if (!$scope.none) {
            if (height - 220 <= $(window).scrollTop()) {
                $scope.getBlog($scope.id, $scope.pageIndex + 1)
                console.log('yes')
            } else {}
        }
    });

    $scope.getBlog = function(id, pageIndex) {
        if ($scope.id != id) {
            $scope.pageIndex = 0
            $scope.none = false
        } else {
            $scope.pageIndex = pageIndex
        }
        $scope.id = id
        var options = {}
        var promise = {}
        var sort = ''
        if (id == 'new' || id == 'hot') {
            if (id == 'new') {
                sort = 'created'
            } else {
                sort = 'click'
            }
            options = {
                filter: {
                    include: ['comments', 'user'],
                    order: sort + ' DESC',
                    limit: 10,
                    skip: pageIndex * 10
                }
            }
            var promise = Blog.find(options).$promise
        } else {
            var promise = Tag.blogs({
                id: id,
                filter: {
                    include: ['user', 'comments'],
                    order: 'click DESC',
                    skip: $scope.pageIndex * 10
                }
            }).$promise
        }
        promise.then(function(response) {
            console.log(response)
            if (response.length == 0) {
                $scope.none = true
            } else {
                $scope.Blog = response
            }
        }, function(err) {
            console.log(err)
        })
    }

    $scope.getTag = function() {
        Tag.find().$promise.then(function(response) {
            console.log(response)
            $scope.Tag = response
        }, function(err) {
            console.log(err)
        })
    }

}])
