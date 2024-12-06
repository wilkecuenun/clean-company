<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\PassController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ServicelistController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/', [LandingController::class, 'index'])->name('landing.page');
Route::get('/', [PassController::class, 'index'])->name('main');
Route::get('/pass', [ReservationController::class, 'pass'])->name('landing');
Route::get('/service', [ServicelistController::class, 'index'])->name('service');
Route::get('/logout', [AdminController::class, 'logout'])->name('admin.logout');

Route::get('/admin/login', [AdminController::class, 'showLogin'])->name('admin.login');
Route::post('/admin/login', [AdminController::class, 'login'])->name('admin.login.submit');
Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
Route::get('/admin/calendar', [AdminController::class, 'showCalendar'])->name('admin.calendar');
Route::get('/admin/calendar', [AdminController::class, 'getCalendar'])->name('admin.calendar');

Route::get('/admin/dashboard', [ReservationController::class, 'dashboard'])->name('admin.dashboard');
Route::get('/admin/reservations', [ReservationController::class, 'index'])->name('admin.reservations');
Route::post('/admin/reservations', [ReservationController::class, 'store'])->name('reservations.store');
Route::get('/admin/reservations/{id}', [ReservationController::class, 'show'])->name('reservations.show');
Route::delete('/reservations/{id}', [ReservationController::class, 'destroy'])->name('reservations.destroy');

Route::get('/admin/services', [ServiceController::class, 'show'])->name('admin.services');
Route::post('/admin/services', [ServiceController::class, 'store'])->name('admin.services.store');
Route::put('/services/{service}', [ServiceController::class, 'update'])->name('admin.services.update');
Route::delete('/admin/services/{id}', [ServiceController::class, 'destroy'])->name('admin.services.destroy');
