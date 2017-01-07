<?php

/*
|--------------------------------------------------------------------------
| Admin Web Routes
|--------------------------------------------------------------------------
|
|
*/

Route::get('/', 'Admin\DashboardController@index' );

Route::resource('pages', 'Admin\PageController');