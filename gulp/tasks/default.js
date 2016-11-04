'use strict';
var gulp = require('gulp');

// 実行
gulp.task('default', ['imgCopy', 'ejs', 'js-lib-concat', 'sass','copy-css','copy', 'watch']);
