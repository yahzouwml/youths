app.controller('navAddCtrl', ['$rootScope', '$scope', 'apiServices', function($rootScope, $scope, apiServices) {
    apiServices.tagFind({
        where: {
            type: 'nav'
        }
    }).then(function(response) {
        console.log(response)
        $('#input-tags').selectize({
            persist: false,
            createOnBlur: true,
            create: false,
            maxItems: 3,
            valueField: 'id',
            labelField: 'name',
            searchField: 'name',
            options: response,
            sortField: {
                field: 'name',
                direction: 'asc'
            }
        });
    }, function(err) {
        console.log(err)
    })

    $scope.addNav = function() {
        var data = {
            name: $scope.nav.name,
            url: $scope.nav.url,
            navTypeId: $scope.nav.navType.id,
            img: $scope.nav.img,
            describe: $scope.nav.describe
        }

        apiServices.navCreate(data).then(
            function(response) {
                console.log(response)
                $scope.nav = {}
                $scope.form.form1.$setPristine()
                $scope.notify('success', '添加网址成功')
                $scope.getNav()
            },
            function(err) {
                console.log(err)
                $scope.notify('error', '添加网址失败')

            }
        )
    }

}])
