<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pack extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'description',
        'time_limit',
        'user_id',
        'photo_url'
    ];

///relacion de pack a user    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}