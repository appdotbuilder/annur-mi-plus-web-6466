<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('search');
        $category = $request->get('category');
        
        $galleries = Gallery::query()
            ->when($search, function ($query, $search) {
                return $query->where('title', 'like', "%{$search}%")
                           ->orWhere('description', 'like', "%{$search}%");
            })
            ->when($category, function ($query, $category) {
                return $query->where('category', $category);
            })
            ->latest()
            ->paginate(12);

        $categories = Gallery::whereNotNull('category')
            ->distinct()
            ->pluck('category')
            ->sort()
            ->values();

        return Inertia::render('gallery/index', [
            'galleries' => $galleries,
            'categories' => $categories,
            'search' => $search,
            'selectedCategory' => $category,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Gallery $gallery)
    {
        $relatedGalleries = Gallery::where('id', '!=', $gallery->id)
            ->when($gallery->category, function ($query, $category) {
                return $query->where('category', $category);
            })
            ->latest()
            ->take(6)
            ->get();

        return Inertia::render('gallery/show', [
            'gallery' => $gallery,
            'relatedGalleries' => $relatedGalleries,
        ]);
    }
}