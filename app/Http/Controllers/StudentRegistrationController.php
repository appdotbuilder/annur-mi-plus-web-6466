<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStudentRegistrationRequest;
use App\Models\StudentRegistration;
use Inertia\Inertia;

class StudentRegistrationController extends Controller
{
    /**
     * Display the registration form.
     */
    public function index()
    {
        return Inertia::render('registration/index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentRegistrationRequest $request)
    {
        $data = $request->validated();
        
        // Generate registration number
        $data['registration_number'] = 'REG-' . date('Y') . '-' . str_pad(
            (string)(StudentRegistration::whereYear('created_at', date('Y'))->count() + 1),
            4,
            '0',
            STR_PAD_LEFT
        );

        $registration = StudentRegistration::create($data);

        return Inertia::render('registration/success', [
            'registration' => $registration,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($registrationNumber)
    {
        $registration = StudentRegistration::where('registration_number', $registrationNumber)
            ->firstOrFail();

        return Inertia::render('registration/show', [
            'registration' => $registration,
        ]);
    }
}