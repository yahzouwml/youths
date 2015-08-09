app.directive('ui', function() {
    // Runs during compile
    return {
        restrict: 'E',
        link: function($scope, iElm, iAttrs, controller) {
            $scope.notify = function(type, message) {
                Lobibox.notify(type, {
                    msg: message,
                    title:"信息"
                })
            }
        }
    };
});
