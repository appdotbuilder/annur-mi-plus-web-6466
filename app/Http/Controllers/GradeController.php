<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\Grade;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GradeController extends Controller
{
    /**
     * Display the grade portal.
     */
    public function index()
    {
        return Inertia::render('grades/index');
    }

    /**
     * Search for student grades.
     */
    public function show(Request $request)
    {
        $request->validate([
            'nis' => 'required|string',
            'name' => 'required|string',
        ]);

        $student = Student::active()
            ->where('nis', $request->nis)
            ->where('name', 'like', '%' . $request->name . '%')
            ->first();

        if (!$student) {
            return redirect()->route('grades.index')
                ->with('error', 'Data siswa tidak ditemukan. Pastikan NIS dan nama sudah benar.');
        }

        $grades = Grade::where('student_id', $student->id)
            ->orderBy('academic_year', 'desc')
            ->orderBy('semester', 'desc')
            ->orderBy('subject')
            ->get()
            ->groupBy(['academic_year', 'semester']);

        return Inertia::render('grades/show', [
            'student' => $student,
            'grades' => $grades,
        ]);
    }
}