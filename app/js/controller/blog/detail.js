app.controller('blogDetailCtrl', ['$rootScope', '$scope', '$q', 'BlogType', 'Blog', '$stateParams', 'Comment', 'Reply', '$filter', function($rootScope, $scope, $q, BlogType, Blog, $stateParams, Comment, Reply, $filter) {
    $scope.params = $stateParams
    console.log($scope.params)
    Blog.findById({
        id: $scope.params.id,
        filter: {
            include: [{
                'comments': ['commentLikes', 'user', {
                    'replies': ['replyLikes', 'user']
                }]
            }]
        }
    }).$promise.then(function(response) {
        console.log(response)
        $scope.blog = response
    })

    $scope.addComment = function() {
        if (!$scope.checkLogin()) {
            return
        }
        Comment.create({
            blogId: $scope.blog.id,
            content: $scope.commentContent,
            userId: $rootScope.currentUser.id
        }).$promise.then(
            function(response) {
                console.log(response)
                $scope.commentContent = ''
                $scope.successAfter($scope.$parent.form.addComment, '已添加评论')
                $scope.addCommentAfter(response)
            },
            function(err) {
                console.log(err)
            }
        )
    }

    $scope.addCommentAfter = function(response) {
        var html = '<div class="comment-item">'
        html += '<div class="top">' + (!!$rootScope.currentUser.userName ? $rootScope.currentUser.userName : $rootScope.currentUser.email) + '<span class="pull-right">' + $filter('date')(response.created, 'medium') + '</span></div>'
        html += '<div class="middle">' + response.content + '</div>'
        html += '<div class="bottom text-right">'
        html += ' <a ng-click="showReplyInput($event,' + "'" + response.id + "'" + ')"><i class="fa fa-comments"></i>&nbsp;(0)</a>&nbsp;&nbsp;&nbsp;<a href=""><i class="fa fa-heart"></i>(0)</a>&nbsp;&nbsp;&nbsp;<a ng-click="displayReply($event)">收起/关闭回复</a>'
        html += '</div>'
        html += '<hr/>'
        html += '<div class="reply" style="display: none;">'
        html += '<div class="reply-content">'
        html += '</div>'
        html += '</div>'
        html += '</div>'
        $(".comment-content").append(html)
    }

    $scope.addReply = function($event) {
        if (!$scope.checkLogin()) {
            return
        }
        Reply.create({
            commentId: $scope.commentId,
            content: $scope.ReplyContent,
            userId: $rootScope.currentUser.id
        }).$promise.then(
            function(response) {
                console.log(response)
                $scope.ReplyContent = ''
                $scope.successAfter($scope.$parent.form.addReply, '已添加回复')
                $scope.addReplyAfter(angular.element($event.currentTarget).parent('div').children('.reply-content'), response)
            },
            function(err) {
                console.log(err)
            }
        )
    }

    $scope.addReplyAfter = function(aim, response) {
        var html = '<div class="reply-item">'
        html += '                             <div class="top">' + $filter('date')(response.created, 'medium') + '<span class="pull-right">' + (!!$rootScope.currentUser.userName ? $rootScope.currentUser.userName : $rootScope.currentUser.email) + '</span></div>'
        html += '                               <div class="middle">' + response.content + '</div>'
        html += '                               <div class="bottom">'
        html += '                                   <a><i class="fa fa-heart"></i>(0)</a>'
        html += '                              </div>'
        html += '                          </div>'
        aim.append(html)
        console.log(aim.parent('div').find('.bottom:eq(0)'))
        aim.parents('.comment-item').find("a:eq(0)").html('<i class="fa fa-comments"></i>(' + aim.parents('.comment-item').find(".reply-item").length + ")")
            //aim.parent('div').find('.bottom:eq(0)').children("a:eq(0)").text("(" + aim.parent('div').find('.bottom:eq(0)').children("a").length + ")")
    }

    $scope.showReplyInput = function($event, id) {
        var aim = angular.element($event.currentTarget).parent('.bottom').parent('div').children('.reply')
        if (!aim.is(":visible")) {
            aim.show()
        }
        if (aim.children('form[name="form.addReply"]').length > 0) {
            aim.children('form[name="form.addReply"]').toggle()
        }
        angular.element('form[name="form.addReply"]').appendTo(aim).removeClass('hidden')
        $scope.commentId = id
    }

    $scope.displayReply = function($event) {
        var aim = angular.element($event.currentTarget).parent('.bottom').parent('div').children('.reply')
        aim.toggle()
    }
}]);
