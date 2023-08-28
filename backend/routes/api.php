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
     //Rutas de autenticación y usuario
     Route::post('login', 'App\Http\Controllers\AuthenticateController@login');
     Route::post('logout', 'App\Http\Controllers\AuthenticateController@logout');
     Route::post('refresh', 'App\Http\Controllers\AuthenticateController@refresh');
     Route::get('me', 'App\Http\Controllers\AuthenticateController@me');
     Route::get('verifyToken', 'App\Http\Controllers\AuthenticateController@verifyToken');
     Route::post('update', 'App\Http\Controllers\AuthenticateController@update');
     Route::post('delete', 'App\Http\Controllers\AuthenticateController@delete');
});


// Rutas de login y logout
Route::post('auth/login', [AuthenticateController::class, 'login'])->name('login');
Route::post('auth/logout', [AuthenticateController::class, 'logout'])->name('logout');
Route::post('auth/register', [AuthenticateController::class, 'register'])->name('register');
Route::get('/users/all', [UserController::class, 'getAllUsers'])->name('users.all');
Route::get('/users/{userId}', [UserController::class, 'getUserById'])->name('users.get');
Route::patch('/users/{user}', [UserController::class, 'update'])->name('users.update');





// Rutas protegidas por el middleware jwt.auth
 Route::group(['middleware' => 'jwt.auth'], function () {
     Route::resource('image', ImageController::class)->except(['edit','create','destroy']);
}); 
