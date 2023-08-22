<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;

class UserController extends Controller
{
public function getAllUsers()
{
    try {
        $users = User::all();

        $userDetails = $users->map(function ($user) {
            return [
                'name' => $user->name,
                'lastname' => $user->lastname,
                'email' => $user->email,
                'address' => $user->address,
                'role_id' => $user->role_id,
            ];
        });

        return response()->json(['users' => $userDetails]);
    } catch (\Illuminate\Database\QueryException $e) {
        return response()->json([
            'error' => 'Database error while fetching users',
            'message' => $e->getMessage()
        ], Response::HTTP_INTERNAL_SERVER_ERROR);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Unexpected error while fetching users',
            'message' => $e->getMessage()
        ], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}


   public function getUserById($userId)
{
    try {
        $user = User::findOrFail($userId);

        $userDetails = [
            'name' => $user->name,
            'lastname' => $user->lastname,
            'email' => $user->email,
            'role_id' => $user->role_id,
            'address' => $user->address,
        ];

        return response()->json(['user' => $userDetails]);
    } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
        return response()->json(['error' => 'User not found'], Response::HTTP_NOT_FOUND);
    } catch (\Exception $e) {
        return response()->json(['error' => 'An unexpected error occurred', 'message' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}

public function update(Request $request, User $user) {
    try {
        $fields = [
            'name' => $request->input('name'),
            'lastname' => $request->input('lastname'),
            'email' => $request->input('email'),
            'password' => $request->input('password'),
            'address' => $request->input('address'),
            'role_id' => $request->input('role_id'),
        ];

        $validations = [
            'email' => 'email|unique:users,email,' . $user->id,
            'password' => 'min:6',
            'role_id' => 'exists:roles,id',
        ];

        foreach ($fields as $field => $value) {
            if ($request->has($field)) {
                if (array_key_exists($field, $validations)) {
                    $this->validate($request, [$field => $validations[$field]]);
                }
                $user->$field = $value;
            }
        }

        $user->save();

        return response()->json(['message' => 'User updated successfully']);
    } catch (\Illuminate\Validation\ValidationException $validationException) {
        $errors = $validationException->validator->getMessageBag()->toArray();
        return response()->json(['error' => 'Validation error', 'errors' => $errors], Response::HTTP_UNPROCESSABLE_ENTITY);
    } catch (\Exception $e) {
        return response()->json(['error' => 'An error occurred while updating user', 'message' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}

}
