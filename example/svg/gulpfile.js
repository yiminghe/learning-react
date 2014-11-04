var gulp = require('gulp');

gulp.task('bundle', function () {
    require('child_process').exec('browserify -t reactify init-bundle.js > ../../example-bundle/svg/init-bundle.js');
});