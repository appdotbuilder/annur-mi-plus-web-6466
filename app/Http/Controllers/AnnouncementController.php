<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('search');
        
        $announcements = Announcement::published()
            ->when($search, function ($query, $search) {
                return $query->where('title', 'like', "%{$search}%")
                           ->orWhere('content', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10);

        return Inertia::render('announcements/index', [
            'announcements' => $announcements,
            'search' => $search,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Announcement $announcement)
    {
        if (!$announcement->is_published) {
            abort(404);
        }

        return Inertia::render('announcements/show', [
            'announcement' => $announcement,
        ]);
    }
}