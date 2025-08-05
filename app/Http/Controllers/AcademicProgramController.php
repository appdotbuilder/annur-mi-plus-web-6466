<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\AcademicProgram;
use Inertia\Inertia;

class AcademicProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $programs = AcademicProgram::active()->get();

        return Inertia::render('programs/index', [
            'programs' => $programs,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(AcademicProgram $program)
    {
        if (!$program->is_active) {
            abort(404);
        }

        return Inertia::render('programs/show', [
            'program' => $program,
        ]);
    }
}