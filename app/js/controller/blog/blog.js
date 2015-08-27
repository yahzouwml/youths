app.controller('blogCtrl', ['$rootScope', '$scope', '$q', 'Blog', 'Tag', '$filter', function($rootScope, $scope, $q, Blog, Tag, $filter) {
    $scope.blog = {}
    $scope.form = {}
    $scope.id = ''
    $scope.none = false
    $scope.loading = false

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
        var pageIndex = $(".col-lg-8 article").length / 5
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
                    include: ['comments', 'user'],
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
                    include: ['user', 'comments'],
                    order: 'click DESC',
                    limit: 5,
                    skip: pageIndex * 5
                }
            }).$promise
        }
        promise.then(function(response) {
            $('.tags2 a').click(function() {
                $('.col-lg-8 .active').removeClass('active')
                $(this).addClass('active')
            });
            console.log(response)
            $scope.loading = false
            if (response.length < 5) {
                $scope.none = true
            }
            if (pageIndex == 0) {
                $scope.Blog = response
            } else {
                $scope.insertBlog(response)
            }
        }, function(err) {
            console.log(err)
        })
    }

    $scope.insertBlog = function(data) {
        var html = '';
        for (i = 0; i < data.length; i++) {
            html += '<article>'
            html += '    <div class="post-quote">'
            html += '       <div class="post-heading">'
            html += '            <h3><a href="#/home/blogDetail/' + data[i].id + '">' + data[i].title + '</a></h3>'
            html += '        </div>'
            html += '        <blockquote ng-bind-html="i.content | htmlToPlaintext:50">'
            html += $filter('htmlToPlaintext')(data[i].content, 50)
            html += '        </blockquote>'
            html += '    </div>'
            html += '    <div class="bottom-article">'
            html += '        <ul class="meta-post">'
            html += '             <li><i class="icon-calendar"></i>' + $filter('date')(data[i].created, 'medium') + '</li>'
            html += '            <li><i class="icon-user"></i>' + data[i].username + '</li>'
            html += '            <li><i class="icon-folder-open"></i><a href="javascipt:void(0)">' + data[i].click + '阅读</a></li>'
            html += '            <li><i class="icon-comments"></i><a href="javascipt:void(0)">' + data[i].comments.length + '评论</a></li>'
            html += '        </ul>'
            html += '        <a href="#/blog/detail/' + data[i].id + '" class="pull-right">继续阅读<i class="icon-angle-right"></i></a>'
            html += '    </div>'
            html += '</article>'
        }

        $(".col-lg-8 article:last").after(html)

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
