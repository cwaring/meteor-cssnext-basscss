Package.describe({
  name: 'kit:cssnext-basscss',
  version: '0.2.0',
  summary: 'Basscss realtime compiler for Meteor',
  git: 'https://github.com/cwaring/meteor-cssnext-basscss.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
});

var npmDependencies = {
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

Npm.depends(npmDependencies);

Package.registerBuildPlugin({
  name: 'cssnext-basscss',
  use: [
    'kit:cssnext@0.2.0',
    'sanjo:meteor-files-helpers@1.1.0_6' ],
  sources: [
    'plugin/compile.js'
  ]
});