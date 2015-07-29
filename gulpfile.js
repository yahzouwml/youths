var gulp = require('gulp');
var connect = require('gulp-connect');


gulp.task('connect', function() {
    connect.server({
        root: 'app',
        port:'3000',
        livereload: true
    });
});

gulp.task('watch', function() {
    gulp.watch(['./app/*.html'], ['']);
});

gulp.task('default', ['connect', 'watch']);
