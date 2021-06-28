const mix = require('laravel-mix');
  require('./mix-extend/eslint/')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/index.tsx', 'public/js')
    .react()
    .eslint()
    .sass('resources/sass/index.scss', 'public/css');

  /**
   * extend webpackConfig in Mix
   * .webpackConfig({
   *     plugins: [
   *
   *     ]
   * })
   **/
