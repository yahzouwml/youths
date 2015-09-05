var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['*'],
    replaceString: /^gulp(-|\.)/,
});
// development task
gulp.task('serve', ['sass', 'config'], function() {

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

gulp.task('cssmin', function() {
    return gulp.src('dist/.tmp/*.css')
        .pipe($.cssmin())
        .pipe($.rev())
        .pipe(gulp.dest('dist/styles'))
        .pipe($.rev.manifest({
            base: 'revFile',
            path: "dist/rev-manifest.json",
            merge: true
        }))
        .pipe(gulp.dest('dist'));
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
            base: 'revFile',
            path: "dist/rev-manifest.json",
            merge: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('uglify', function() {
    return gulp.src('dist/.tmp/*.js')
        .pipe($.uglify())
        .pipe($.rev())
        .pipe(gulp.dest('dist/js'))
        .pipe($.rev.manifest({
            base: 'revFile',
            path: "dist/rev-manifest.json",
            merge: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('useref', function() {
    var assets = $.useref.assets();

    return gulp.src('app/**/*.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'))
});

gulp.task('replace', function() {
    var manifest = gulp.src("dist/rev-manifest.json");

    function replaceJsIfMap(filename) {
        if (filename.indexOf('.tmp') > -1) {
            return filename.replace('.tmp', '');
        }
        return filename;
    }

    return gulp.src(['dist/**/*.html'])
        .pipe($.revReplace({
            manifest: manifest,
            modifyUnreved: replaceJsIfMap,
            modifyReved: replaceJsIfMap
        }))
        .pipe(gulp.dest('dist'))
        // return gulp.src(['dist/*.html'])
        //     .pipe($.revReplace({
        //         manifest: manifest
        //     }))
        //     .pipe(gulp.dest('dist'))
});

gulp.task('import', function() {
    return gulp.src('app/styles/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('del', function() {
    $.del(['dist/**/*'], function(err, paths) {
        console.log('delete dist directory success');
    });
    $.del(['.tmp/**/*'], function(err, paths) {
        console.log('delete .tmp directory success');
    });
});

var gulpsync = require('gulp-sync')(gulp);
gulp.task('default', ['serve']);
gulp.task('release', gulpsync.sync(['del', 'import', 'sass', 'useref', 'cssmin', 'uglify', 'imagemin', 'replace']));
