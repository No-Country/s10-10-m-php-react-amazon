<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticateController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ImageController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['middleware' => 'api',], function ($router) {
     //Rutas de autenticación
    Route::post('login', 'App\Http\Controllers\AuthenticateController@login');
    Route::post('register', 'App\Http\Controllers\AuthenticateController@register');
    Route::post('logout', 'App\Http\Controllers\AuthenticateController@logout');
    Route::post('refresh', 'App\Http\Controllers\AuthenticateController@refresh');
    Route::get('me', 'App\Http\Controllers\AuthenticateController@me');
    Route::get('verifyToken', 'App\Http\Controllers\AuthenticateController@verifyToken');
    Route::post('update', 'App\Http\Controllers\AuthenticateController@update');
    Route::post('delete', 'App\Http\Controllers\AuthenticateController@delete');
    
    //Rutas de usuario
    Route::get('/users/all', [UserController::class, 'getAllUsers'])->name('users.all');
    Route::get('/users/{userId}', [UserController::class, 'getUserById'])->name('users.get');

     //Rutas de Business
    Route::get('business/{id}', 'App\Http\Controllers\BusinessController@show');
    Route::get('business', 'App\Http\Controllers\BusinessController@showAll');


    //Rutas de Pack
    Route::get('pack/{id}', 'App\Http\Controllers\PackController@show');


    Route::group(['middleware' => 'jwt.auth',], function ($router) {

        Route::patch('/users/{user}', [UserController::class, 'update'])->name('users.update');
        Route::patch('/users/{user}', [UserController::class, 'update'])->name('users.update');
        Route::delete('/users/avatar/delete/{id}', [UserController::class, 'deleteImage'])->name('users.deleteImage');

        Route::post('business', 'App\Http\Controllers\BusinessController@store');
        Route::put('business/update/{id}', 'App\Http\Controllers\BusinessController@update');
        Route::delete('business/delete/{id}', 'App\Http\Controllers\BusinessController@destroy');

        Route::post('pack/filter', 'App\Http\Controllers\PackController@filter');
        Route::post('pack', 'App\Http\Controllers\PackController@store');
        Route::put('pack/update/{id}', 'App\Http\Controllers\PackController@update');
        Route::delete('pack/delete/{id}', 'App\Http\Controllers\PackController@destroy');
        Route::post('pack/image/{id}', 'App\Http\Controllers\PackController@image');
        Route::delete('pack/image/delete/{id}', 'App\Http\Controllers\PackController@deleteImage');

        Route::post('/users/avatar', [UserController::class, 'avatar'])->name('users.avatar');
    });
});