<?php
$namespace = 'App\Modules\User\Controllers';

Route::group([
    'middleware' => 'web',
    'module' => 'User',
    'namespace' => $namespace
    ], function () {
    Route::group(['prefix' => 'admin'], function () {

        Route::get('/user', 'UserController@list')->name('user.list');  
        Route::get('/role', 'UserController@role')->name('role.list');
    });
});