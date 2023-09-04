<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'business_id',
    ];

///relacion entre user a pack
    public function User(){
        return $this->belongsTo(User::class);
    }
}
