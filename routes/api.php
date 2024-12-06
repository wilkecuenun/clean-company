<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\PaymentController;

Route::post('/reservations/store', [ReservationController::class, 'store']);
Route::get('/reservations', [ReservationController::class, 'index']);
Route::get('/services', [ServiceController::class, 'index']);
Route::get('/services/store', [ServiceController::class, 'store']);
Route::post('/process-payment', [PaymentController::class, 'processPayment']);
