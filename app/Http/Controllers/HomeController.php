<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Announcement;
use App\Models\Gallery;
use App\Models\Teacher;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index()
    {
        $latestNews = News::published()
            ->latest('published_at')
            ->take(3)
            ->get();

        $urgentAnnouncements = Announcement::published()
            ->urgent()
            ->latest()
            ->take(3)
            ->get();

        $recentAnnouncements = Announcement::published()
            ->where('is_urgent', false)
            ->latest()
            ->take(3)
            ->get();

        $featuredGallery = Gallery::featured()
            ->latest()
            ->take(6)
            ->get();

        $teacherCount = Teacher::active()->count();
        $newsCount = News::published()->count();

        return Inertia::render('welcome', [
            'latestNews' => $latestNews,
            'urgentAnnouncements' => $urgentAnnouncements,
            'recentAnnouncements' => $recentAnnouncements,
            'featuredGallery' => $featuredGallery,
            'stats' => [
                'teachers' => $teacherCount,
                'news' => $newsCount,
            ]
        ]);
    }
}