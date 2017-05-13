"use strict";
exports.__esModule = true;
var gulp = require("gulp");
var ts = require("gulp-typescript");
// const ts = require('gulp-typescript');
gulp.task('default', function () {
    // 将你的默认的任务代码放在这
});
gulp.task('tsc', function () {
    var tsProject = ts.createProject('server.json', {
        typescript: require('typescript')
    });
    var tsResult = gulp.src(['public/javascripts/*.ts', 'routes/*.ts']) //tsProject.src() 
        .pipe(ts(tsProject))
        .pipe(gulp.dest(function (file) {
        return file.base;
    }));
    // .on('error', gutil.log);
    return tsResult;
});
gulp.task('restart', function () {
});
gulp.task('watch', ['tsc'], function () {
    gulp.watch(['public/javascripts/*.ts', 'routes/*.ts'], ['tsc']);
});
