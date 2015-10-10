app.controller('zhihuUserCtrl', ['$rootScope', '$scope', '$q', 'Zhihuuser', '$filter', function($rootScope, $scope, $q, Zhihuuser, $filter) {
    $scope.Zhihuuser = {}
    $scope.none = false
    $scope.loading = false

    $(window).scroll(function(event) {
        var height = $('#loading').offset().top
        if (!$scope.none && !$scope.loading) {
            if (height - 440 <= $(window).scrollTop()) {
                $scope.getZhihuuser()
                console.log('xxx')
            }
        }
    });

    $('#searchPanel input').keypress(function(event) {
        if (event.which == 13) {
            $scope.search()
        }
    });

    $scope.search = function() {
        $("#User .u-detail").remove()
        $scope.none = false
        $scope.getZhihuuser()
    }

    $scope.getZhihuuser = function() {
        $scope.loading = true
        var pageIndex = $("#User .u-detail").length / 20
        var promise = {}

        var options = {}
        options.order = 'agree DESC'
        options.limit = '20'
        options.skip = pageIndex * 20
        options.where = {}
        if (!!$scope.sex) {
            options.where.sex = $scope.sex
        }
        if (!!$scope.nameOrSio) {
            options.where.or = []
            options.where.or.push({
                name: {
                    like: $scope.nameOrSio
                }
            }, {
                sio: {
                    like: $scope.nameOrSio
                }
            })
        }
        var promise = Zhihuuser.find({
            filter: options
        }).$promise

        promise.then(function(response) {
            console.log(response)
            $scope.loading = false
            if (response.length < 20) {
                console.log('yes')
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
