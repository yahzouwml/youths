app.filter('htmlToPlaintext', function() {
    return function(text,length) {
        return text ? String(text).replace(/<[^>]+>/gm, '').substr(0,length) : '';
    };
})
