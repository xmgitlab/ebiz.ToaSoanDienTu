<?php
$namespace = 'App\Modules\Page\Controllers';

Route::group([
    'middleware' => 'web',
    'module' => 'Page',
    'namespace' => $namespace
    ], function () {
    Route::group(['prefix' => ''], function () {
        Route::get('/', 'PageController@trangchu');  
        Route::get('/trangchu', 'PageController@trangchu');  
        Route::get('/danhsach', 'PageController@danhsach');  
        Route::get('/tintuc', 'PageController@tintuc');  

        // Route::post('Page/create','PageController@create')->name("Page.create");
        // Route::post('Page/update','PageController@update')->name("Page.update");
        // Route::post('Page/delete','PageController@delete')->name("Page.delete");
    });
});