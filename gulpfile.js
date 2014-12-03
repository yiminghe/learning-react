var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var cwd = process.cwd();

gulp.task('build', function () {
    var qsIndex = path.resolve(cwd, 'node_modules/react-router/node_modules/qs/index.js');
    if (fs.existsSync(qsIndex)) {
        fs.writeFileSync(qsIndex, "/*modified*/module.exports = require('./lib/');");
    }
    console.log('done...');
});

gulp.task('config', function () {
    var modulexNpm = require('modulex-npm');
    var config = modulexNpm.generateConfig(['react', 'react-router','jquery']);
    fs.writeFileSync(path.join(cwd, 'config.js'), 'require.config(' + JSON.stringify(config,null,4) + ');');
});