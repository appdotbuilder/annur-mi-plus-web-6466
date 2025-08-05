<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\StudentRegistration
 *
 * @property int $id
 * @property string $registration_number
 * @property string $student_name
 * @property string|null $nisn
 * @property \Illuminate\Support\Carbon $birth_date
 * @property string $birth_place
 * @property string $gender
 * @property string $address
 * @property string $father_name
 * @property string $mother_name
 * @property string $father_occupation
 * @property string $mother_occupation
 * @property string $parent_phone
 * @property string|null $parent_email
 * @property string|null $previous_school
 * @property string $status
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration query()
 * @method static \Illuminate\Database\Eloquent\Builder|StudentRegistration pending()

 * 
 * @mixin \Eloquent
 */
class StudentRegistration extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'registration_number',
        'student_name',
        'nisn',
        'birth_date',
        'birth_place',
        'gender',
        'address',
        'father_name',
        'mother_name',
        'father_occupation',
        'mother_occupation',
        'parent_phone',
        'parent_email',
        'previous_school',
        'status',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'birth_date' => 'date',
    ];

    /**
     * Scope a query to only include pending registrations.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }
}