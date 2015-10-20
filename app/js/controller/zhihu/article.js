app.controller('zhihuArticleCtrl', function($rootScope, $scope, apiServices, $state) {
    $scope.Zhihu = {}
    $scope.none = false
    $scope.loading = false

    $(window).scroll(function(event) {
        if (!$scope.none && !$scope.loading) {
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                if ($state.is('zhihuarticle')) {
                    $scope.getZhihu()
                }
            }
        }
    });

    $scope.getZhihu = function() {
        $scope.loading = true
        var pageIndex = $("#zhihu article").length / 9
        var options = {}
        var promise = {}

        apiServices.zhihuFind({
            order: 'count DESC',
            limit: 9,
            skip: pageIndex * 9
        }).then(function(response) {
            console.log(response)
            $scope.loading = false
            if (response.length < 9) {
                $scope.none = true
            }
            if (pageIndex == 0) {
                $scope.Zhihu = response
            } else {
                $scope.Zhihu = $scope.Zhihu.concat(response)
            }

            $('#zhihu').masonry({
                itemSelector: '.zhihu'
            });
        }, function(err) {
            console.log(err)
        })
    }

});
