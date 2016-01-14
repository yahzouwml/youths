app.controller('blogCtrl', function($rootScope, $scope, apiServices, $state) {
  $scope.blog = {}
  $scope.form = {}
  $scope.id = ''
  $scope.none = false
  $scope.loading = false
  var a = []

  $(window).scroll(function(event) {
    if (!$scope.none && !$scope.loading) {
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        if ($state.is('blog')) {
          $scope.getBlog($scope.id)
        }
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
    var options = {
      include: [{
        'user': ['followUsers']
      }, {
        'comments': ['user']
      }, 'tags', 'blogLikeUsers'],
      limit: 5,
      skip: pageIndex * 5
    }
    var promise = null
    if (id == 'new' || id == 'hot') {
      if (id == 'new') {
        options.sort = 'created DESC'
      } else {
        options.sort = 'click DESC'
      }
      promise = apiServices.blogFind(options)
    } else {
      options.where = {
        tagId: $scope.id
      }
      promise = apiServices.tagFindBlogs({
        id: $scope.id
      }, {
        filter: options
      })
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
    apiServices.tagFind({
      where: {
        type: 'blog'
      }
    }).then(function(response) {
      console.log(response)
      $scope.Tag = response
    }, function(err) {
      console.log(err)
    })
  }

  $scope.likeBlog = function($event, blogId) {
    $scope.checkLogin()
    var target = $($event.currentTarget)
    apiServices.blogLike({
      id: blogId
    }, {
      blogId: blogId,
      userId: $rootScope.currentUser.id
    }).then(function(response) {
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
    apiServices.blogDislike({
      id: blogId
    }, {
      blogId: blogId,
      userId: $rootScope.currentUser.id
    }).then(function(response) {
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
    apiServices.userFocus({
      id: $rootScope.currentUser.id
    }, {
      focusUserId: focusUserId,
      userId: $rootScope.currentUser.id
    }).then(function(response) {
      console.log(response)
      target.addClass('ng-hide')
      target.siblings('.ng-hide').removeClass('ng-hide')
    }, function(err) {
      console.log(err)
    })
  }

  $scope.disfocusUser = function($event, focusUserId) {
    var target = $($event.currentTarget)
    apiServices.userDisfocus({
      id: $rootScope.currentUser.id
    }, {
      focusUserId: focusUserId,
      userId: $rootScope.currentUser.id
    }).then(function(response) {
      console.log(response)
      target.addClass('ng-hide')
      target.siblings('.ng-hide').removeClass('ng-hide')
    }, function(err) {
      console.log(err)
    })
  }
});
