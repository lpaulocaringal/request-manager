<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api-header'], function () {
    Route::post('/user/login', 'UserController@login');
    Route::post('/user/register', 'UserController@register');
    Route::get('/request/getrequest', 'RequestsController@getRequest');
    Route::post('/request/insertrequest', 'RequestsController@insertRequest');
});
