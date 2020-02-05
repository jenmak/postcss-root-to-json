let postcss = require('postcss')
let fs = require('fs')

module.exports = postcss.plugin('postcss-root-to-json', (opts = { outputPath }) => {

  let rootCustomProperties = {};

  return (root, result) => {
    root.walkRules((rule) => {
      if (rule.selector === ':root') {
        rule.walkDecls((decl) => {
          rootCustomProperties[decl.prop] = decl.value;
        });
      }
    });

    fs.writeFile(opts.outputPath, JSON.stringify(rootCustomProperties), function(err, result) {
      if(err) console.log('error', err);
    });
  }


})
