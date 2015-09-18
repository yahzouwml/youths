app.controller('zhihuUserCtrl', ['$rootScope', '$scope', '$q', 'Zhihuuser', '$filter', function($rootScope, $scope, $q, Zhihuuser, $filter) {
    $scope.Zhihuuser = {}
    $scope.none = false
    $scope.loading = false

    $(window).scroll(function(event) {
        var height = $('#loading').offset().top
        if (!$scope.none && !$scope.loading) {
            if (height - 440 <= $(window).scrollTop()) {
                $scope.loading = true
                $scope.getZhihuuser()
            }
        }
    });

    $scope.getZhihuuser = function() {
        $scope.loading = true
        var pageIndex = $("#User .user-d").length / 12
        var options = {}
        var promise = {}
        var sort = ''

        var promise = Zhihuuser.find({
            filter: {
                order: 'agree DESC',
                limit: 12,
                skip: pageIndex * 12
            }
        }).$promise

        promise.then(function(response) {
            console.log(response)
            $scope.loading = false
            if (response.length < 12) {
                $scope.none = true
            }
            if (pageIndex == 0) {
                $scope.Zhihuuser = response
            } else {
                $scope.Zhihuuser = $scope.Zhihuuser.concat(response)
            }
        }, function(err) {
            console.log(err)
        })
    }

}]);
