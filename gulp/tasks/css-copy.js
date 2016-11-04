var $, gulp, C;
gulp = require('gulp');
$ = require('gulp-load-plugins')();
C = require('../config');
var browserSync = require('browser-sync');
// copy ディレクトリをコピーする
gulp.task('copy-css', function () {
    return gulp.src(C.src.css)
    .pipe(gulp.dest(C.build.css))
    .pipe(browserSync.reload({ stream : true }));
});
