app.controller('blogCtrl', ['$rootScope', '$scope', '$q', 'Blog', 'Tag', function($rootScope, $scope, $q, Blog, Tag) {
    $scope.blog = {}
    $scope.form = {}

    $scope.getBlog = function(id) {
        var options = {}
        if (id == 'new') {
            options = {
                filter: {
                    include: ['comments', 'user'],
                    order: 'created DESC',
                    limit: 10
                }
            }
        } else if (id == 'hot') {
            options = {
                filter: {
                    include: ['comments', 'user'],
                    order: 'click DESC',
                    limit: 10
                }
            }
        } else {
           
        }
        Blog.find(options).$promise.then(function(response) {
            console.log(response)
            $scope.Blog = response
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
