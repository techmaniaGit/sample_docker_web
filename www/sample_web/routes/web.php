<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [App\Http\Controllers\TopController::class, 'index']);
