<?php

use Illuminate\Support\Facades\Route;

/**
 * Все маршруты в web.php перенаправляются на один Blade-шаблон,
 * так как маршрутизацией теперь занимается Vue Router на фронтенде.
 */
Route::get('/{any?}', function () {
    return view('app');
})->where('any', '.*');
