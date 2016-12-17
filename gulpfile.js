const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Admin Asset Management
 |--------------------------------------------------------------------------
 | 
 | Below are the assets files that will be used for the administration
 |
 */

elixir((mix) => {
    mix.webpack([
        './resources/assets/admin/js/app.js'
    ], 'public/assets/admin/js/app.js');
});
