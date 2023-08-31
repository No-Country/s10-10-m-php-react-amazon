<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Cloudinary;
class UserController extends Controller
{

public function getAllUsers()
{
    try {
        $users = User::with('location')->get();

        $userDetails = $users->map(function ($user) {
           $userLocation = $user->location;
    

            return [
                'name' => $user->name,
                'lastname' => $user->lastname,
                'email' => $user->email,
                'address' => $userLocation ? $userLocation->address : null,
                'longitude' => $userLocation ? $userLocation->longitude : null,
                'latitude' => $userLocation ? $userLocation->latitude : null,
                // 'role' => $user->role,
                'avatar' => $user->avatar,
                'external_id' => $user->external_id,
                'external_auth' => $user->external_auth,
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
 $userLocation = $user->location;

            return [
                'name' => $user->name,
                'lastname' => $user->lastname,
                'email' => $user->email,
                'address' => $userLocation ? $userLocation->address : null,
                'longitude' => $userLocation ? $userLocation->longitude : null,
                'latitude' => $userLocation ? $userLocation->latitude : null,
                'role' => $user->role,
                'avatar' => $user->avatar,
                'external_id' => $user->external_id,
                'external_auth' => $user->external_auth,
                'description' => $user->description,
                'category' => $user->category,
            ];

        return response()->json(['user' => $userDetails]);
    } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
        return response()->json(['error' => 'User not found'], Response::HTTP_NOT_FOUND);
    } catch (\Exception $e) {
        return response()->json(['error' => 'An unexpected error occurred', 'message' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}

public function update(Request $request, User $user)
{
    try {
        $fields = [
            'fullname',
            'lastname',
            'email',
            'password',
        ];

        $validations = [
            'email' => 'email|unique:users,email,' . $user->id,
            'password' => 'min:6',
        ];

        foreach ($fields as $field) {
            if ($request->has($field)) {
                if (array_key_exists($field, $validations)) {
                    $this->validate($request, [$field => $validations[$field]]);
                }
                $user->$field = $request->input($field);
            }
        }

        // Actualizar información de ubicación si está disponible
        if ($request->has('address') || $request->has('latitude') || $request->has('longitude')) {
            if ($user->location) {
                $user->location->update([
                    'address' => $request->input('address', $user->location->address),
                    'latitude' => $request->input('latitude', $user->location->latitude),
                    'longitude' => $request->input('longitude', $user->location->longitude),
                ]);
            }
        }

        // Actualizar rol si está disponible
        if ($request->has('role')) {
            $user->syncRoles([$request->input('role')]);
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
public function avatar(Request $request)
{
    try {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png|max:4096',
        ], [
            'image.required' => 'An image is required.',
            'image.image' => 'The uploaded file must be an image.',
            'image.mimes' => 'The image must be in JPEG or PNG format.',
            'image.max' => 'The image size must not exceed 2 MB.',
        ]);
        
        $uploadedFile = $request->file('image');
        $user = Auth::user();
        $imageUrl = Cloudinary::upload($uploadedFile->getRealPath());
        $user->avatar = $imageUrl->getSecurePath();
        $user->save();
        return response()->json(['message' => $user->avatar]);
    } catch (\Illuminate\Validation\ValidationException $validationException) {
        $errors = $validationException->validator->getMessageBag()->toArray();
        return response()->json(['error' => 'Validation error', 'errors' => $errors], Response::HTTP_UNPROCESSABLE_ENTITY);
    } catch (\Exception $e) {
        return response()->json(['error' => 'An error occurred while updating user', 'message' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
    }   
}
public function deleteImage($id) {

    try {
        $user = Auth::user();
        $publicId = pathinfo(parse_url($user->avatar, PHP_URL_PATH), PATHINFO_FILENAME);
        Cloudinary::destroy($publicId);
        $user->avatar = null;
        $user->save();
        return response()->json(['photo' => 'user photo deleted successfully'], 200);
    } catch (ValidationException $e) {
        return response()->json(['error' => 'Invalid ID'], 400);
    } catch (ModelNotFoundException $e) {
        return response()->json(['error' => 'user not found'], 404);
    }
}
}
