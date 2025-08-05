<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('search');
        $subject = $request->get('subject');
        
        $teachers = Teacher::active()
            ->when($search, function ($query, $search) {
                return $query->where('name', 'like', "%{$search}%")
                           ->orWhere('position', 'like', "%{$search}%");
            })
            ->when($subject, function ($query, $subject) {
                return $query->where('subject', 'like', "%{$subject}%");
            })
            ->orderBy('name')
            ->paginate(12);

        $subjects = Teacher::active()
            ->whereNotNull('subject')
            ->distinct()
            ->pluck('subject')
            ->sort()
            ->values();

        return Inertia::render('teachers/index', [
            'teachers' => $teachers,
            'subjects' => $subjects,
            'search' => $search,
            'selectedSubject' => $subject,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Teacher $teacher)
    {
        if (!$teacher->is_active) {
            abort(404);
        }

        return Inertia::render('teachers/show', [
            'teacher' => $teacher,
        ]);
    }
}