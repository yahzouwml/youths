app.controller('zhihuArticleCtrl', ['$rootScope', '$scope', '$q', 'Zhihu', '$filter', function($rootScope, $scope, $q, Zhihu, $filter) {
    $scope.Zhihu = {}
    $scope.none = false
    $scope.loading = false

    $(window).scroll(function(event) {
        var height = $('#loading').offset().top
        if (!$scope.none && !$scope.loading) {
            if (height - 440 <= $(window).scrollTop()) {
                $scope.getZhihu()
            }
        }
    });
    
    $scope.getZhihu = function() {
        $scope.loading = true
        var pageIndex = $("#zhihu article").length / 9
        var options = {}
        var promise = {}

        var promise = Zhihu.find({
            filter: {
                order: 'count DESC',
                limit: 9,
                skip: pageIndex * 9
            }
        }).$promise

        promise.then(function(response) {
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
        }, function(err) {
            console.log(err)
        })
    }

}]);
