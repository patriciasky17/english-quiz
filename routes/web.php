<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SubmitController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/', function () {
    return view('welcome');
});



Route::get('/login',[LoginController::class, 'index'])->name('login.index');
Route::post('/login', [LoginController::class, 'register'])->name('login.register');


Route::get('/quiz', [LoginController::class, 'quiz'])->name('login.quiz');
Route::get('/submit', [SubmitController::class, 'submit'])->name('submit.index');


