var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        notify: false,
        open: "local",
        host:"youths.com",
        port:7000,
        server: {
            baseDir: ['app'],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch(['app/**/*.html','app/angular/**/*.js']).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
gulp.task('release', ['']);
