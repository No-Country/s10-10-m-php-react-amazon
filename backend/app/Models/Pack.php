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
        'business_id',
    ];

///relacion de pack a user    
    public function user(){
        return $this->HasMany(User::class);
    }
}
