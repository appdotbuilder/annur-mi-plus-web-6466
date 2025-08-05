<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('grades', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained()->onDelete('cascade');
            $table->string('subject');
            $table->string('semester');
            $table->string('academic_year');
            $table->integer('daily_score_1')->nullable();
            $table->integer('daily_score_2')->nullable();
            $table->integer('daily_score_3')->nullable();
            $table->integer('midterm_score')->nullable();
            $table->integer('final_score')->nullable();
            $table->decimal('average_score', 5, 2)->nullable();
            $table->string('grade')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();
            
            $table->index(['student_id', 'semester', 'academic_year']);
            $table->index('subject');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('grades');
    }
};