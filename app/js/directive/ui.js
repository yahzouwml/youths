app.directive('ui', function() {
    // Runs during compile
    return {
        restrict: 'E',
        link: function($scope, iElm, iAttrs, controller) {
            Lobibox.notify.DEFAULTS = $.extend({}, Lobibox.notify.DEFAULTS, {
                soundPath: '/plugin/lobibox/sounds/'
            });
            Lobibox.notify.OPTIONS = $.extend({}, Lobibox.notify.OPTIONS, {
                success: {
                    'class': 'lobibox-notify-success',
                    'title': '成功',
                    'icon': 'glyphicon glyphicon-ok-sign',
                    sound: 'sound2'
                },
                error: {
                    'class': 'lobibox-notify-error',
                    'title': '失败',
                    'icon': 'glyphicon glyphicon-remove-sign',
                    sound: 'sound4'
                },
                warning: {
                    'class': 'lobibox-notify-warning',
                    'title': '警告',
                    'icon': 'glyphicon glyphicon-exclamation-sign',
                    sound: 'sound5'
                },
                info: {
                    'class': 'lobibox-notify-info',
                    'title': '信息',
                    'icon': 'glyphicon glyphicon-info-sign',
                    sound: 'sound6'
                }
            });
            $scope.notify = function(type, message) {
                Lobibox.notify(type, {
                    msg: message
                })
            }
        }
    };
});
