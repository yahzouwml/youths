app.controller('blogDetailCtrl', ['$rootScope', '$scope', 'apiServices', '$stateParams', '$filter', function($rootScope, $scope, apiServices, $stateParams, $filter) {
    $scope.params = $stateParams
    console.log($scope.params)
    apiServices.blogFindById({
        id: $scope.params.id,
        filter: {
            include: [{
                'comments': ['commentLikes', 'user', {
                    'replies': ['replyLikes', 'user']
                }]
            }]
        }
    }).then(function(response) {
        console.log(response)
        $scope.blog = response
    })

    $scope.addComment = function() {
        if (!$scope.checkLogin()) {
            return
        }
        apiServices.commentCreate({
            blogId: $scope.blog.id,
            content: $scope.commentContent,
            userId: $rootScope.currentUser.id
        }).then(
            function(response) {
                console.log(response)
                $scope.commentContent = ''
                $scope.successAfter($scope.$parent.form.addComment, '已添加评论')
                $scope.blog.comments = $scope.blog.comments.concat(response)
            },
            function(err) {
                console.log(err)
            }
        )
    }

    $scope.addReply = function($event) {
        if (!$scope.checkLogin()) {
            return
        }
        apiServices.replyCreate({
            commentId: $scope.commentId,
            content: $scope.ReplyContent,
            userId: $rootScope.currentUser.id
        }).then(
            function(response) {
                console.log(response)
                $scope.ReplyContent = ''
                $scope.successAfter($scope.$parent.form.addReply, '已添加回复')
                $scope.blog.comments[$scope.commentIndex].replies = $scope.blog.comments[$scope.commentIndex].replies.concat(response)
            },
            function(err) {
                console.log(err)
            }
        )
    }

    $scope.showReplyInput = function($event, id, index) {
        var aim = angular.element($event.currentTarget).parent('.bottom').parent('div').children('.reply')
        if (!aim.is(":visible")) {
            aim.show()
        }
        if (aim.children('form[name="form.addReply"]').length > 0) {
            aim.children('form[name="form.addReply"]').toggle()
        }
        angular.element('form[name="form.addReply"]').appendTo(aim).removeClass('hidden')
        $scope.commentId = id
        $scope.commentIndex = index
    }

    $scope.displayReply = function($event) {
        var aim = angular.element($event.currentTarget).parent('.bottom').parent('div').children('.reply')
        aim.toggle()
    }
}]);
