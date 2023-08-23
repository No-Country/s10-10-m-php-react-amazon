<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Rutas de login y logout
Route::post('auth/login', [AuthController::class, 'login'])->name('login');
Route::post('auth/logout', [AuthController::class, 'logout'])->name('logout');
Route::post('auth/register', [AuthController::class, 'register'])->name('register');
Route::get('/users/all', [UserController::class, 'getAllUsers'])->name('users.all');
Route::get('/users/{userId}', [UserController::class, 'getUserById'])->name('users.get');
Route::patch('/users/{user}', [UserController::class, 'update'])->name('users.update');





// Rutas protegidas por el middleware jwt.auth
/* Route::group(['middleware' => 'jwt.auth'], function () {

}); */
