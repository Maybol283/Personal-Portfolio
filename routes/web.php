<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;

Route::get('/', function () {
    return Inertia::render('page');
})->name('page');

// Contact form submission
Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
