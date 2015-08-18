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
            fileDir: 'storage/',
            fileName: $rootScope.currentUser.id + ".png"
        }).$promise.then(function(response) {
            console.log(response)
        }, function(err) {
            console.log(err)
        })
    }
}])
