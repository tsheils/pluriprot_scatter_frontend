
//
// This script copies over some polyfills to the project's assets folder
// It's called by the npm script npx-build-plus:copy-assets
// If you call it manually, call it from your projects root
// > node /copy-wc-polyfill.js
//

const copy = require('copy');

console.log('Copy webcomponent polyfills ...');
copy('node_modules/@webcomponents/**/*.js', 'src/dependencies', {}, _ => {});
console.log('Copy UMD bundles ...');

copy('node_modules/@angular/*/bundles/*.umd.js', 'src/dependencies', {}, _ => {});
copy('node_modules/rxjs/bundles/*.js', 'src/dependencies/rxjs', {}, _ => {});
copy('node_modules/zone.js/dist/*.js', 'src/dependencies/zone.js', {}, _ => {});
copy('node_modules/core-js/client/*.js', 'src/dependencies/core-js', {}, _ => {});
