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

        apiServices.navCreate({
                name: $scope.nav.name,
                url: $scope.nav.url,
                img: $scope.nav.img,
                describe: $scope.nav.describe
            })
            .then(function(response) {
                    console.log(response)
                    args = $scope.selectTag.split(',')
                    var tagRelations = new Array()
                    for (i = 0; i < args.length; i++) {
                        tagRelations.push({
                            tagId: args[i],
                            otherId: response.id,
                            type: 'nav'
                        })
                    }
                    apiServices.tagreleationCreateMany(tagRelations).then(function(response) {
                        console.log(response)
                        $scope.nav = {}
                        $('#input-tags').clear()
                        $scope.form.form1.$setPristine();
                        $scope.notify('success', '添加网址成功')
                    }, function(err) {
                        console.log(err)
                    })
                },
                function(err) {
                    console.log(err)
                    $scope.notify('error', '添加网址失败')
                })

    }

}])
