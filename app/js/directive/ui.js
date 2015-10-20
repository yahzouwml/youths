app
    .directive('ui', function() {
        // Runs during compile
        return {
            restrict: 'E',
            templateUrl: '/views/layout/modal.html',
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

                $scope.closeModal = function(aim) {
                    if (!!aim) {
                        $(aim).modal('hide')
                    } else {
                        $(".modal:visible").modal('hide')

                    }
                }

                $scope.showModal = function(aim) {
                    $scope.closeModal()
                    $(aim).modal()
                }


            }
        };
    })
    .directive('modal', function() {
        return {
            restrict: 'C',
            link: function(scope, element, attrs) {
                var modal = $(element).find('.modal-dialog');
                $(element).on('shown.bs.modal', function(e) {
                    var screenHeight = $(window).height();
                    var modalHeight = modal.height();
                    var marginTop = (screenHeight - modalHeight) / 2;
                    if (marginTop > 0) {
                        var transition = 'margin ease .3s';
                        modal.css({
                            'marginTop': marginTop,
                            '-webkit-transition': transition,
                            'transition': transition,
                            '-moz-transition': transition
                        });
                    } else {
                        modal.css({
                            'marginTop': 46
                        });
                    }
                }).on('hidden.bs.modal', function(e) {
                    modal.css({
                        marginTop: 0
                    });
                });
            }
        }
    })
    .directive('dh', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                attrs.start = parseInt(attrs.start) || 1
                attrs.multiple = parseInt(attrs.multiple) || 100
                    // console.info(attrs, attrs.start, attrs.multiple)
                element.height(Math.floor((Math.random() * attrs.multiple) + attrs.start))
            }
        }
    })
    .directive('pageTitle', function($rootScope,$timeout) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                var listener = function(event, toState, toParams, fromState, fromParams) {
                    // Default title - load on Dashboard 1
                    var title = 'Youths | Do Interest Things';
                    // Create your own title pattern
                    if (toState.data && toState.data.pageTitle) title = 'Youths | ' + toState.data.pageTitle;
                    $timeout(function() {
                        element.text(title);
                    });
                };
                $rootScope.$on('$stateChangeStart', listener);
            }
        }
    })
