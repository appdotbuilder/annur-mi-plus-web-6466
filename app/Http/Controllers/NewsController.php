<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('search');
        
        $news = News::published()
            ->when($search, function ($query, $search) {
                return $query->where('title', 'like', "%{$search}%")
                           ->orWhere('content', 'like', "%{$search}%");
            })
            ->latest('published_at')
            ->paginate(9);

        return Inertia::render('news/index', [
            'news' => $news,
            'search' => $search,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        if (!$news->is_published || ($news->published_at && $news->published_at->isFuture())) {
            abort(404);
        }

        $relatedNews = News::published()
            ->where('id', '!=', $news->id)
            ->latest('published_at')
            ->take(3)
            ->get();

        return Inertia::render('news/show', [
            'news' => $news,
            'relatedNews' => $relatedNews,
        ]);
    }
}