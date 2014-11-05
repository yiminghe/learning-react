var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
gulp.task('bundle', function () {
    return browserify(['./init.js'])
        .transform(require('reactify'))
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('init.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('../../example-bundle/react-router/'));
});