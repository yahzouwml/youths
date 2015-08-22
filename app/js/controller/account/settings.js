app.controller('settingsCtrl', ['$rootScope', '$scope', '$q', 'User', 'File', function($rootScope, $scope, $q, User, File) {
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
        console.log($scope.myCroppedImage)
        File.upload({
            url: $scope.myCroppedImage,
            fileDir: 'client/storage/',
            fileName: $rootScope.currentUser.id + ".png"
        }).$promise.then(function(response) {
            console.log(response)
            $scope.$parent.User.avatar = 'storage/'+$rootScope.currentUser.id + ".png"
            User.prototype$updateAttributes({
                id: $rootScope.currentUser.id
            }, $scope.$parent.User).$promise.then(function(response) {
                console.log(response)
                $scope.notify('success', '头像上传成功')
            }, function(err) {
                console.log(err)
            })
        }, function(err) {
            console.log(err)
        })
    }
}])
