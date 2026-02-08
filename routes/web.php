<?php

use App\Http\Controllers\ExportController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

Route::get('/', fn() => view('dbadmin'))
    ->middleware(['auth', 'jaxon.dbadmin.config', 'jaxon.config']);

Route::get('/export/{filename}', ExportController::class)
    ->middleware(['auth', 'jaxon.dbadmin.config', 'jaxon.config'])
    ->name('export');;

Route::get('/audit', fn() => view('dbaudit'))
    ->middleware(['auth', 'jaxon.dbaudit.config'])
    ->name('audit');

Route::post('/audit/jaxon', fn() => response()->json([]))
    ->middleware(['web', 'jaxon.dbaudit.config', 'jaxon.ajax']);

// Logout
Route::get('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout.get')->middleware('auth');
