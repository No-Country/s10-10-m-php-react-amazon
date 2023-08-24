<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
<<<<<<< HEAD
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
=======
use Illuminate\Contracts\Auth\Authenticatable as LaravelAuthenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject, LaravelAuthenticatable
>>>>>>> e1ea478b238156aa63bb7c8ad8d289ba9796d313
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'lastname',
        'email',
        'password',
        'address',
        'role_id'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
<<<<<<< HEAD

=======
>>>>>>> e1ea478b238156aa63bb7c8ad8d289ba9796d313
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

<<<<<<< HEAD
    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
=======
>>>>>>> e1ea478b238156aa63bb7c8ad8d289ba9796d313
    public function getJWTCustomClaims()
    {
        return [];
    }
}
