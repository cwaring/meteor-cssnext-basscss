/**
 * Script to grab the latest module versions
 */
var exec = require('child_process').exec,
    child;

var modules = {
  'basscss': '',
  'basscss-base-buttons': '',
  'basscss-button-sizes': '',
  'basscss-color-forms-dark': '',
  'basscss-input-range': '',
  'basscss-progress': '',
  'basscss-button-outline': '',
  'basscss-button-transparent': '',
  'basscss-background-images': '',
  'basscss-media-object': '',
  'basscss-responsive-white-space': '',
  'basscss-utility-headings': '',
  'basscss-ui-utility-groups': '',
  'basscss-table-object': '',
  'basscss-color-buttons': '',
  'basscss-button-link': '',
  'basscss-button-blue': '',
  'basscss-button-blue-outline': '',
  'basscss-button-gray': '',
  'basscss-button-light-gray': '',
  'basscss-button-red': '',
  'basscss-button-nav-light': '',
  'basscss-button-nav-dark': '',
  'basscss-button-nav-tab': '',
  'basscss-highlight-dark': '',
  'basscss-highlight': ''
}

var latestModules = {};

// fk it, regex
Object.keys(modules).forEach(function(module){
  child = exec('npm v ' + module + ' versions',
    function (error, stdout, stderr) {
      var versions = [];
      if (stdout.indexOf('[') > -1) {
        stdout.replace(/'(.*?)'/g, function(m, v){
          return versions.push(v);
        });
      } else {
        versions.push(stdout.trim())
      }

      latestModules[module] = versions[versions.length - 1];

      console.log(latestModules);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
  });
})
