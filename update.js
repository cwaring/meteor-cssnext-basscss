/**
 * Script to grab the latest module versions
 */
var exec = require('child_process').exec,
    child;

var modules = {
  'basscss': '',
  'basscss-btn-sizes' : '',
  'basscss-color-forms-dark': '',
  'basscss-input-range': '',
  'basscss-progress': '',
  'basscss-background-images': '',
  'basscss-media-object': '',
  'basscss-responsive-white-space': '',
  'basscss-utility-headings': '',
  'basscss-ui-utility-groups': '',
  'basscss-table-object': '',
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

      var result = [];
      Object.keys(modules).forEach(function(v, i) {
        result[v] = latestModules[v];
      });
      console.log("Result", result);

      if (stderr)
        console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
  });
})
