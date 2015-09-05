var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['*'],
    replaceString: /^gulp(-|\.)/,
});
// development task
gulp.task('serve', ['sass'], function() {

    $.browserSync.init({
        notify: false,
        open: "local",
        host: "youths.com",
        port: 7000,
        server: {
            baseDir: ['app'],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });

    gulp.watch("app/styles/scss/*.scss", ['sass']);
    gulp.watch(['app/**/*.html', 'app/js/**/*.js', 'app/styles/css/**/*.css']).on('change', $.browserSync.reload);
    // gulp.watch(['app/*.html']).on('change', $.browserSync.reload());
    // gulp.watch(['app/styles/css/**/*.css']).on('change', $.browserSync.reload());
    // gulp.watch(['app/js/**/*.js']).on('change', $.browserSync.reload());
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    $.del(['app/styles/css/**/*'], function(err, paths) {
        console.log('delete css floder success');
    })
    return gulp.src("app/styles/scss/*.scss")
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest("app/styles/css"))
        .pipe($.browserSync.stream());
});

//release task
gulp.task('config', function() {
    var argv = require('yargs').argv
    var config = require('./config.json')
    return $.ngConstant({
            name: 'envconfig',
            constants: {
                'ENV': config[argv.env || 'local']
            },
            stream: true
        })
        .pipe(gulp.dest('app/js'));

});

gulp.task('cssmin', ['sass'], function() {
    return gulp.src('app/styles/css/*.css')
        .pipe($.cssmin())
        .pipe($.concat('all.min.css'))
        .pipe($.rev())
        .pipe(gulp.dest('dist/styles'))
        .pipe($.rev.manifest({
            base: 'dist',
            merge: true
        }))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('imagemin', function() {
    return gulp.src('app/img/**/*')
        .pipe($.imagemin({
            progressive: true,
            interlaced: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            // use: [pngquant()]
        }))
        .pipe($.rev())
        .pipe(gulp.dest('dist/img'))
        .pipe($.rev.manifest({
            merge: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('uglify', function() {
    return gulp.src('app/js/**/*.js')
        .pipe($.uglify())
        // .pipe($.sourcemaps.init())
        .pipe($.concat('angular.min.js'))
        // .pipe($.sourcemaps.write())
        .pipe($.rev())
        .pipe(gulp.dest('dist/js'))
        .pipe($.rev.manifest({
            merge: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('useref', function() {
    var manifest = gulp.src("dist/rev-manifest.json");
    var assets = $.useref.assets();

    return gulp.src('app/**/*.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace({
            manifest: manifest
        }))
        .pipe(gulp.dest('dist'))
        .pipe($.htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('import', function() {
    return gulp.src('app/styles/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('del', function() {
    $.del(['dist/**/*'], function(err, paths) {
        console.log('delete success');
    });
});

gulp.task('default', ['serve']);
gulp.task('release', ['del', 'import', 'useref', 'cssmin', 'imagemin', 'uglify']);
