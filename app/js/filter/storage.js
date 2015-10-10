app
    .filter('storage', ['$rootScope', function($rootScope) {
        return function(fileName, containerName) {
            return $rootScope.apiServer + '/containers/' + containerName + '/download/' + fileName
        }
    }])
    .filter('zhihuavatar', ['$rootScope', function($rootScope) {
        return function(fileName) {
            console.log(fileName);
            return $rootScope.apiServer + '/containers/zhihuuser/download/' + fileName.split('/')[2] + "-" + fileName.split('/')[3]
        }
    }]);
