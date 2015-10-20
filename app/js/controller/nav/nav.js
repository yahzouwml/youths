app.controller('navCtrl', function($rootScope, $scope, apiServices, $state) {
    $scope.nav = {}
    $scope.form = {}
    $scope.none = false
    $scope.loading = false

    $(window).scroll(function(event) {
        if (!$scope.none && !$scope.loading) {
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                if ($state.is('nav')) {
                    $scope.getNav($scope.id)
                }
            }
        }
    });

    apiServices.tagFind({
        where: {
            type: 'nav'
        }
    }).then(function(response) {
        $scope.tag = response
    })

    $scope.getNav = function(id) {
        if (id != $scope.id) {
            $("#Nav li").remove()
        }
        $scope.id = id
        $scope.loading = true

        var pageIndex = $("#Nav li").length / 12
        var options = {
            limit: 12,
            skip: pageIndex * 12
        }
        var promise = null
        if (id != 'all') {
            promise = apiServices.tagFindNavs({
                id: id
            }, {
                filter: options
            })
        } else {
            promise = apiServices.navFind(options)
        }
        promise.then(function(response) {
            console.log(response)
            $scope.loading = false
            if (response.length < 12) {
                $scope.none = true
            }
            if (pageIndex == 0) {
                $scope.Nav = response
            } else {
                $scope.Nav = $scope.Nav.concat(response)
            }
        })
    }
});
