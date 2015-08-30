app.controller('blogCtrl', ['$rootScope', '$scope', '$q', 'Blog', 'Tag', 'User', '$filter', function($rootScope, $scope, $q, Blog, Tag, User, $filter) {
    $scope.blog = {}
    $scope.form = {}
    $scope.id = ''
    $scope.none = false
    $scope.loading = false
    var a = []

    $scope.share = function(target, bdText, bdUrl) {
        if ($(target).find('.bdsharebuttonbox').length > 0) {
            $(target).find('.hide-list:not(.bdsharebuttonbox)').fadeOut()
            $(target).find('.bdsharebuttonbox').slideToggle()
        } else {
            $rootScope.bdText = bdText
            $rootScope.bdUrl = bdUrl
            $('.bdsharebuttonbox.hidden2').fadeIn().appendTo($(target))
        }
    }

    $(window).scroll(function(event) {
        var height = $('#loading').offset().top
        if (!$scope.none && !$scope.loading) {
            if (height - 440 <= $(window).scrollTop()) {
                $scope.loading = true
                $scope.getBlog($scope.id)
            }
        }
    });

    $scope.getBlog = function(id) {
        $scope.loading = true
        var pageIndex = $("#blog article").length / 5
        if ($scope.id != id) {
            pageIndex = 0
            $scope.none = false
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
                    include: [{
                        'user': ['followUsers']
                    }, {
                        'comments': ['user']
                    }, 'tags', 'blogLikeUsers'],
                    order: sort + ' DESC',
                    limit: 5,
                    skip: pageIndex * 5
                }
            }
            var promise = Blog.find(options).$promise
        } else {
            var promise = Tag.blogs({
                id: id,
                filter: {
                    include: [{
                        'user': ['followUsers']
                    }, {
                        'comments': ['user']
                    }, 'tags', 'blogLikeUsers'],
                    order: 'click DESC',
                    limit: 5,
                    skip: pageIndex * 5
                }
            }).$promise
        }
        promise.then(function(response) {
            console.log(response)
            $scope.loading = false
            if (response.length < 5) {
                $scope.none = true
            }
            if (pageIndex == 0) {
                $scope.Blog = response
            } else {
                $scope.Blog = $scope.Blog.concat(response)
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

    $scope.likeBlog = function($event, blogId) {
        $scope.checkLogin()
        var target = $($event.currentTarget)
        Blog.blogLikes.create({
            id: blogId
        }, {
            blogId: blogId,
            userId: $rootScope.currentUser.id
        }).$promise.then(function(response) {
            console.log(response)
            target.addClass('ng-hide')
            target.siblings('.ng-hide').removeClass('ng-hide')
            target.siblings('a:eq(0)').find('span:eq(0)').text(parseInt(target.siblings('a:eq(0)').find('span:eq(0)').text()) + 1)
        }, function(err) {
            console.log(err)
        })
    }

    $scope.dislikeBlog = function($event, blogId) {
        var target = $($event.currentTarget)
        Blog.blogLikes.destroyById({
            id: blogId
        }, {
            blogId: blogId,
            userId: $rootScope.currentUser.id
        }).$promise.then(function(response) {
            console.log(response)
            target.addClass('ng-hide')
            target.siblings('.ng-hide').removeClass('ng-hide')
            target.siblings('a:eq(0)').find('span:eq(0)').text(parseInt(target.siblings('a:eq(0)').find('span:eq(0)').text()) - 1)
        }, function(err) {
            console.log(err)
        })
    }

    $scope.focusUser = function($event, focusUserId) {
        var target = $($event.currentTarget)
        User.focusUsers.create({
            id: $rootScope.currentUser.id
        }, {
            focusUserId: focusUserId,
            userId: $rootScope.currentUser.id
        }).$promise.then(function(response) {
            console.log(response)
            target.addClass('ng-hide')
            target.siblings('.ng-hide').removeClass('ng-hide')
        }, function(err) {
            console.log(err)
        })
    }

    $scope.disfocusUser = function($event, focusUserId) {
        var target = $($event.currentTarget)
        User.focusUsers.destroyById({
            id: $rootScope.currentUser.id
        }, {
            focusUserId: focusUserId,
            userId: $rootScope.currentUser.id
        }).$promise.then(function(response) {
            console.log(response)
            target.addClass('ng-hide')
            target.siblings('.ng-hide').removeClass('ng-hide')
        }, function(err) {
            console.log(err)
        })
    }
}])
