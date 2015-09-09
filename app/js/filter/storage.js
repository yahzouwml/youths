app
    .filter('storage', ['$rootScope', function($rootScope) {
        return function(fileName, containerName) {
            return $rootScope.apiServer + '/containers/' + containerName + '/download/' + fileName
        }
    }]);
