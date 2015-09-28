const path = Plugin.path;
var basscssPath;

// this fails when publishing a package as the cwd is outside of an app context
// https://github.com/Sanjo/meteor-meteor-files-helpers/issues/9
// fallback to static path for publishing only
try {
  basscssPath =
    MeteorFilesHelpers.getNodeModulePath('kit:cssnext-basscss', 'basscss');
} catch(e) {
  basscssPath = path.join(process.cwd(),
  '.meteor', 'local', 'isopacks', 'npm', 'node_modules', 'kit_cssnext-basscss')
}

let importDirs = [
  path.join(basscssPath, 'node_modules'), // basscore,
  path.resolve(basscssPath, '../') ] //basscss extensions

let options = {
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

Plugin.registerCompiler({
  filenames: ['basscss.next.css'],
  archMatching: 'web',
}, () => new CssnextCompiler(options) );