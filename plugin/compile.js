const path = Plugin.path;

let basscssPath =
  MeteorFilesHelpers.getNodeModulePath('kit:cssnext-basscss', 'basscss');

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