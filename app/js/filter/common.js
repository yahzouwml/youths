app
    .filter('htmlToPlaintext', function() {
        return function(text, length) {
            return text ? String(text).replace(/<[^>]+>/gm, '').substr(0, length) : '';
        };
    })
    .filter('thumb', function() {
        return function(text) {
            var imgSrc = ''
            text.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function(match, capture) {
                imgSrc = capture;
            })

            return imgSrc;
        };
    })
    .filter('htmlNoImage', function() {
        return function(text) {
            return text.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, '')
        };
    });
