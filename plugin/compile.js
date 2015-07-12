var path = Npm.require('path');
var base = path.resolve('.');
var packageDirs = [];
var pathDirs = [];

var importDirs = [
  '/kit:cssnext-basscss/.npm/plugin/cssnext-basscss/node_modules/basscss/node_modules/', // basscss core
  '/kit:cssnext-basscss/.npm/plugin/cssnext-basscss/node_modules/'] //basscss extensions
packageDirs.push(base + '/packages');

// if building from source include package path
if (process.env.PACKAGE_DIRS) {
  packageDirs.push(process.env.PACKAGE_DIRS)
}

packageDirs.forEach(function(packageDir){
  importDirs.forEach(function(iPath){
    pathDirs.push(packageDir + iPath);
  })
})

var options = {
  features: {
    customProperties: {
      strict: false // disable variable fallbacks from being redundantly added
    },
    rem: false,
    pseudoElements: false,
    colorRgba: false
  },
  import: { path: pathDirs }
};

compileWithExtensions = function(compileStep, isLiterate) {
  return Cssnext.compile(compileStep, isLiterate, options)
};

Plugin.registerSourceHandler('basscss.next.css', {archMatching: 'web'}, compileWithExtensions);