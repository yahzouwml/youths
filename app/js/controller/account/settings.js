app.controller('settingsCtrl', ['$rootScope', '$scope', '$q', 'User', 'StorageService', '$http', function($rootScope, $scope, $q, User, StorageService, $http) {
    $scope.myImage = '';
    $scope.myCroppedImage = '';

    var handleFileSelect = function(evt) {
        var file = evt.currentTarget.files[0];
        $scope.file = file
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
        StorageService.upload($scope.myCroppedImage, 'avatar', $rootScope.currentUser.id + ".png")
            .success(function(response) {
                console.log(response)
                var time = (new Date()).getTime()
                console.log(time);
                $scope.$parent.User.avatar = $rootScope.currentUser.id + ".png?" + time
                User.prototype$updateAttributes({
                    id: $rootScope.currentUser.id
                }, $scope.$parent.User).$promise.then(function(response) {
                    console.log(response)
                    $scope.notify('success', '头像上传成功')
                }, function(err) {
                    console.log(err)
                })
            })
            .error(function(err) {
                console.log(err)
            })
    }
}]);
