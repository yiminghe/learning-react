var gulp = require('gulp');

gulp.task('bundle', function () {
    require('child_process').exec('browserify -t reactify init.js > ../../example-bundle/react-router/init-bundle.js');
});