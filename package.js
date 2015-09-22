Package.describe({
  name: 'kit:cssnext-basscss',
  version: '1.1.0',
  summary: 'Basscss realtime compiler for Meteor',
  git: 'https://github.com/cwaring/meteor-cssnext-basscss.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use('isobuild:compiler-plugin@1.0.0');
});

var npmDependencies = {
  basscss: '7.0.4',
  'basscss-btn-sizes': '1.1.0',
  'basscss-color-forms-dark': '1.1.0',
  'basscss-input-range': '2.0.0',
  'basscss-progress': '2.0.0-beta.0',
  'basscss-background-images': '0.0.9',
  'basscss-media-object': '1.0.4',
  'basscss-responsive-white-space': '0.1.0',
  'basscss-utility-headings': '0.0.6',
  'basscss-ui-utility-groups': '1.0.1',
  'basscss-table-object': '0.0.8',
  'basscss-highlight-dark': '0.0.1',
  'basscss-highlight': '0.1.0'
}

Npm.depends(npmDependencies);

Package.registerBuildPlugin({
  name: 'cssnext-basscss',
  use: [
    'ecmascript',
    'sanjo:meteor-files-helpers@1.1.0_7',
    'kit:cssnext@1.0.0'],
  sources: [
    'plugin/compile.js'
  ]
});