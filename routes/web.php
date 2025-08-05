<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\StudentRegistrationController;
use App\Http\Controllers\AcademicProgramController;
use App\Http\Controllers\GradeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Home page
Route::get('/', [HomeController::class, 'index'])->name('home');

// Public pages
Route::get('/berita', [NewsController::class, 'index'])->name('news.index');
Route::get('/berita/{news}', [NewsController::class, 'show'])->name('news.show');

Route::get('/pengumuman', [AnnouncementController::class, 'index'])->name('announcements.index');
Route::get('/pengumuman/{announcement}', [AnnouncementController::class, 'show'])->name('announcements.show');

Route::get('/guru', [TeacherController::class, 'index'])->name('teachers.index');
Route::get('/guru/{teacher}', [TeacherController::class, 'show'])->name('teachers.show');

Route::get('/galeri', [GalleryController::class, 'index'])->name('gallery.index');
Route::get('/galeri/{gallery}', [GalleryController::class, 'show'])->name('gallery.show');

Route::get('/program-akademik', [AcademicProgramController::class, 'index'])->name('programs.index');
Route::get('/program-akademik/{program}', [AcademicProgramController::class, 'show'])->name('programs.show');

Route::get('/kontak', [ContactController::class, 'index'])->name('contact.index');
Route::post('/kontak', [ContactController::class, 'store'])->name('contact.store');

Route::get('/pendaftaran', [StudentRegistrationController::class, 'index'])->name('registration.index');
Route::post('/pendaftaran', [StudentRegistrationController::class, 'store'])->name('registration.store');
Route::get('/pendaftaran/{registrationNumber}', [StudentRegistrationController::class, 'show'])->name('registration.show');

Route::get('/portal-nilai', [GradeController::class, 'index'])->name('grades.index');
Route::post('/portal-nilai', [GradeController::class, 'show'])->name('grades.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';