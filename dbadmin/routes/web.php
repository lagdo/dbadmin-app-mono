<?php

use Illuminate\Support\Facades\Route;
use Lagdo\DbAdmin\Db\DbAdminPackage;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

Route::get('/', fn() => view('dbadmin'))
    ->middleware(['auth', 'jaxon.dbadmin.config']);

Route::post('/jaxon', fn() => response()->json([]))
    ->middleware(['web', 'jaxon.dbadmin.config', 'jaxon.ajax'])
    ->name('dbadmin.jaxon');

Route::get('/export/{filename}', function(string $filename) {
    $reader = jaxon()->package(DbAdminPackage::class)->getOption('export.reader');
    $content = !is_callable($reader) ? "No export reader set." : $reader($filename);
    return response($content)->header('Content-Type', 'text/plain');
})->middleware(['auth', 'jaxon.dbadmin.config'])
    ->name('dbadmin.export');

Route::get('/audit', fn() => view('dbaudit'))
    ->middleware(['auth', 'jaxon.dbaudit.config'])
    ->name('dbadmin.audit');

Route::post('/audit/jaxon', fn() => response()->json([]))
    ->middleware(['web', 'jaxon.dbaudit.config', 'jaxon.ajax'])
    ->name('dbaudit.jaxon');

// Logout
Route::get('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout.get')->middleware('auth');
