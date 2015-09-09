app.directive('error', function() {
    return {
        link: function(scope, element, attrs) {
            element.bind('error', function() {
                if (attrs.src != attrs.error) {
                    attrs.$set('src', attrs.error);
                }
            })
        }
    }
});
