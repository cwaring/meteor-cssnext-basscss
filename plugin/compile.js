var path = Npm.require('path');

compileWithExtensions = function(compileStep, isLiterate) {
  var basscssPath =
    MeteorFilesHelpers.getNodeModulePath('kit:cssnext-basscss', 'basscss');

  var importDirs = [
    path.join(basscssPath, 'node_modules'), // basscore,
    path.resolve(basscssPath, '../') ] //basscss extensions

  var options = {
    features: {
      customProperties: {
        strict: false // disable variable fallbacks from being redundantly added
      },
      rem: false,
      pseudoElements: false,
      colorRgba: false
    },
    import: { path: importDirs }
  };
  return Cssnext.compile(compileStep, isLiterate, options)
};

Plugin.registerSourceHandler('basscss.next.css', {archMatching: 'web'}, compileWithExtensions);