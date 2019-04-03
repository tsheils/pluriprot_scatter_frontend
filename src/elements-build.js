const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/scatterplot/scripts.js',
  //  './dist/scatterplot/polyfills.js',
    './dist/scatterplot/main.js'
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/scatterplot.js');
  await fs.copy('./dist/scatterplot/assets/', 'elements/assets/' )

})()
