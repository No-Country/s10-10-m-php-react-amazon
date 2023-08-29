<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticateController;
use App\Http\Controllers\UserController;

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
    Route::patch('/users/{user}', [UserController::class, 'update'])->name('users.update');

     //Rutas de Business
    Route::post('business', 'App\Http\Controllers\BusinessController@store');
    Route::get('business/{id}', 'App\Http\Controllers\BusinessController@show');
    Route::get('business', 'App\Http\Controllers\BusinessController@showAll');
    Route::put('business/update/{id}', 'App\Http\Controllers\BusinessController@update');
    Route::delete('business/delete/{id}', 'App\Http\Controllers\BusinessController@destroy');

    //Rutas de Pack
    Route::post('pack/filter', 'App\Http\Controllers\PackController@filter');
    Route::post('pack', 'App\Http\Controllers\PackController@store');
    Route::get('pack/{id}', 'App\Http\Controllers\PackController@show');
    Route::put('pack/update/{id}', 'App\Http\Controllers\PackController@update');
    Route::delete('pack/delete/{id}', 'App\Http\Controllers\PackController@destroy');

});

