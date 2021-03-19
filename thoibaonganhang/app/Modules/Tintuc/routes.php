<?php
$namespace = 'App\Modules\Tintuc\Controllers';

Route::group([
    'middleware' => 'web',
    'module' => 'Tintuc',
    'namespace' => $namespace
    ], function () {
    Route::group(['prefix' => 'admin'], function () {

        Route::get('/posts', 'TintucController@posts')->name('tintuc.posts');  
        
        Route::get('/role', 'TintucController@role')->name('role.list');
    });
});