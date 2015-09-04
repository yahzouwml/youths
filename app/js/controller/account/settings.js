app.controller('settingsCtrl', ['$rootScope', '$scope', '$q', 'User', 'File', 'Container', '$http', function($rootScope, $scope, $q, User, File, Container, $http) {
    $scope.myImage = '';
    $scope.myCroppedImage = '';

    var handleFileSelect = function(evt) {
        var file = evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function(evt) {
            $scope.$apply(function($scope) {
                $scope.myImage = evt.target.result;
            });
        };
        reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);

    $scope.upload = function() {
        $http.defaults.headers.post = {
            'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryWv8KW6UcwcBVA7a1'
        }
        console.log($scope.myCroppedImage)
        var fd = new FormData();
        fd.append('url', $scope.myCroppedImage);
        Container.upload({
            container: "avatar"
        }, {

        }).$promise.then(function(response) {
                console.log(response)
            },
            function(err) {
                console.log(err)
            })

        // File.upload({
        //     url: $scope.myCroppedImage,
        //     fileDir: 'client/storage/',
        //     fileName: $rootScope.currentUser.id + ".png"
        // }).$promise.then(function(response) {
        //     console.log(response)
        //     $scope.$parent.User.avatar = 'storage/'+$rootScope.currentUser.id + ".png"
        //     User.prototype$updateAttributes({
        //         id: $rootScope.currentUser.id
        //     }, $scope.$parent.User).$promise.then(function(response) {
        //         console.log(response)
        //         $scope.notify('success', '头像上传成功')
        //     }, function(err) {
        //         console.log(err)
        //     })
        // }, function(err) {
        //     console.log(err)
        // })
    }
}])
