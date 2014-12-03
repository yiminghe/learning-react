var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
gulp.task('default', function () {
    return browserify(['./init.js'])
        .transform(require('browserify-jsx'))
        .transform(require('browserify-shim'))
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('init.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('../../example-bundle/react-router/'));
});