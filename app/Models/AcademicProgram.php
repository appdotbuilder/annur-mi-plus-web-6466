<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\AcademicProgram
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $grade_level
 * @property string|null $curriculum
 * @property string|null $objectives
 * @property string|null $duration
 * @property bool $is_active
 * @property int $sort_order
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicProgram newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicProgram newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicProgram query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicProgram active()

 * 
 * @mixin \Eloquent
 */
class AcademicProgram extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'description',
        'grade_level',
        'curriculum',
        'objectives',
        'duration',
        'is_active',
        'sort_order',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];

    /**
     * Scope a query to only include active programs.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true)->orderBy('sort_order');
    }
}