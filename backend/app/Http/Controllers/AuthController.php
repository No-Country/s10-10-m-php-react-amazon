<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request){

        $user = new User;
        $user->name = $request->name;
        $user->lastname = $request->lastname;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->address = $request->address;
        $user->role_id = $request->role_id;
        $user->save();
 
        return response()->success($user, 'User created');
    }
    public function login(Request $request){

        $credentials = $request->only('email', 'password');
        try {
            if (!Auth::attempt($credentials)) {
                return response()->json(['error' => 'Invalid credentials'], Response::HTTP_UNAUTHORIZED);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Error creating token'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        $user = Auth::user();
        $user->makeHidden('password'); 
        $token = JWTAuth::fromUser($user);

        return response()->success(['token' => $token,'user' => $user ], 'Successful login!');
    }
    public function logout(Request $request){
        var_dump('logout');
    }

}
