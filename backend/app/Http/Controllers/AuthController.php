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
 try {
        $this->validate($request, [
            'name' => 'required',
            'lastname' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'address' => 'required',
            'role_id' => 'required',
        ]);

        $user = new User;
        $user->name = $request->name;
        $user->lastname = $request->lastname;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->address = $request->address;
        $user->role_id = $request->role_id;
        $user->save();
        
        return response()->success($user, 'User created');
         } catch (\Exception $e) {
    return response()->json(['error' => 'An error occurred while registering user', 'message' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
}
}
 
    public function login(Request $request){
 try {
        $credentials = $request->only('email', 'password');
       
            if (!Auth::attempt($credentials)) {
                return response()->json(['error' => 'Invalid credentials', 'message' => $e-> getMessage()], Response::HTTP_UNAUTHORIZED);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Error creating token'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        $user = Auth::user();
        $user->makeHidden('password'); 
        $token = JWTAuth::fromUser($user);

        return response()->success(['token' => $token,'user' => $user ], 'Successful login!');
    }
   public function logout(Request $request)
{
    try {
        Auth::logout();
        
        return response()->json(['message' => 'Logged out successfully']);
    } catch (\Exception $e) {
        return response()->json(['error' => 'An error occurred while logging out', 'message' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}


}
