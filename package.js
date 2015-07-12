Package.describe({
  name: 'kit:cssnext-basscss',
  version: '0.1.1',
  summary: 'Basscss realtime compiler for Meteor',
  git: 'https://github.com/cwaring/meteor-cssnext-basscss.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  var path = Npm.require('path');
  var base = path.resolve('.');

  var importDirs = [
    '/kit:cssnext-basscss/.npm/package/node_modules/basscss/node_modules/', // basscss core
    '/kit:cssnext-basscss/.npm/package/node_modules/'] //basscss extensions
  var packageDirs = [ base + '/packages']

  // if building from source include package path
  if (process.env.PACKAGE_DIRS) {
    packageDirs.push(process.env.PACKAGE_DIRS)
  }

  var pathDirs = [];
  packageDirs.forEach(function(packageDir){
    importDirs.forEach(function(path){
      pathDirs.push(packageDir + path);
    })
  })

  var options = {
    features: {
      customProperties: {
        strict: false, // disable variable fallbacks from being redundantly added
      },
      rem: false,
      pseudoElements: false,
      colorRgba: false
    },
    import: { path: pathDirs }
  };

  // attach to the process object, dirty trick but there seems to
  // be no other way to access the scope of other build plugins

  process.cssnextExtend ? process.cssnextExtend.push(options) : process.cssnextExtend = [options];
});

var modules = {
  'basscss': '7.0.0',
  'basscss-base-buttons': '1.1.0',
  'basscss-color-forms-dark': '1.1.0',
  'basscss-button-sizes': '1.0.6',
  'basscss-input-range': '2.0.0',
  'basscss-progress': '2.0.0-beta.0',
  'basscss-button-link': '1.2.3',
  'basscss-responsive-white-space': '0.0.1',
  'basscss-background-images': '0.0.9',
  'basscss-button-transparent': '1.1.0',
  'basscss-utility-headings': '0.0.6',
  'basscss-button-outline': '1.1.0',
  'basscss-color-buttons': '1.0.1',
  'basscss-button-gray': '0.0.1',
  'basscss-table-object': '0.0.7',
  'basscss-ui-utility-groups': '1.0.1',
  'basscss-button-nav-light': '0.0.2',
  'basscss-media-object': '1.0.4',
  'basscss-button-nav-tab': '0.0.3',
  'basscss-button-light-gray': '0.0.3',
  'basscss-button-blue-outline': '0.0.3',
  'basscss-button-blue': '0.0.1',
  'basscss-button-nav-dark': '0.0.3',
  'basscss-highlight': '0.1.0',
  'basscss-highlight-dark': '0.0.1',
  'basscss-button-red': '0.0.1'
}

Npm.depends(modules);