var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var cwd = process.cwd();
gulp.task('build', function () {
    var bowerDir = path.resolve(cwd, 'bower_components');
    var buildDir = path.resolve(cwd, 'mx_modules');
    var aggregateBower = require('aggregate-bower');
    var inferBaseCode = 'modulex.init({name:"seed"});';
    var kgConfigContent = '';
    var extraContent = ['', inferBaseCode, kgConfigContent].join('\n');

    function generateSeedJs() {
        var seedDebugJsContent = '',
            seedJsContent = '',
            filesList = ['modulex', 'feature', 'ua', 'meta'];
        for (var i = 0; i < filesList.length; i++) {
            var debugFilePath = path.join(buildDir, filesList[i] + '-debug.js'),
                miniFilePath = path.join(buildDir, filesList[i] + '.js');
            seedDebugJsContent += fs.readFileSync(debugFilePath).toString();
            seedJsContent += fs.readFileSync(miniFilePath).toString();
        }

        fs.writeFileSync(path.join(buildDir, 'seed-debug.js'), seedDebugJsContent + extraContent);
        fs.writeFileSync(path.join(buildDir, 'seed.js'), seedJsContent + extraContent);
    }

    aggregateBower(bowerDir, buildDir);
    generateSeedJs();

    var qsIndex = path.resolve(cwd, 'node_modules/react-router/node_modules/qs/index.js');
    if (fs.existsSync(qsIndex)) {
        fs.writeFileSync(qsIndex, "/*modified*/module.exports = require('./lib/');");
    }
    console.log('done...');
});

gulp.task('config', function () {
    var modulexNpm = require('modulex-npm');
    var config = modulexNpm.generateConfig(['react', 'react-router']);
    fs.writeFileSync(path.join(cwd, 'config.js'), 'require.config(' + JSON.stringify(config) + ');');
});