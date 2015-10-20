app
    .filter('storage', function($rootScope) {
        return function(fileName, containerName) {
            return $rootScope.apiServer + '/containers/' + containerName + '/download/' + fileName
        }
    })
    .filter('avatar', function($rootScope) {
        return function(fileName, containerName) {
            return $rootScope.apiServer + '/containers/avatar/download/' + fileName
        }
    })
    .filter('zhihuavatar', function($rootScope) {
        return function(fileName) {
            if (!fileName) return ''
            fileName = fileName.split('/')[2] + "-" + fileName.split('/')[3].replace('_s', '_l')
            return $rootScope.apiServer + '/containers/zhihuuser/download/' + fileName
        }
    });
