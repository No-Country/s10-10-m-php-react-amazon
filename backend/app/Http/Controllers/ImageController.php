<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\Image;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Cloudinary;

class imageController extends Controller
{   

    public function index()
    {
        try {
            $images = Image::with('thumbnail')->get();

            $response = [
                'status' => 'success',
                'message' => 'images found!',
                'data' => [
                    'images' => $images,
                ],
            ];

            return response()->json($response, Response::HTTP_OK);
        } catch (ValidationException $th) {
            return response()->json([
                'error' => 'Invalid data',
                'message' => $th->getMessage(),
                'errors' => $th->errors()
            ], 400);
        }
    }
  
    public function store(Request $request)
    {
        $uploadedFile = $request->file('image');
        $token = $request->bearerToken();
        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png',
            'type' => 'required|in:user,business',
        ]);
        $user = Auth::user();
        try {
            $uploadedImage = Cloudinary::upload($uploadedFile->getRealPath());
            $image = new Image;
            $image->urlImg = $uploadedImage->getSecurePath();
            $image->user_id = $user->id;
            $image->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Data saved!',
                'data' => $image, 
            ], Response::HTTP_OK);
        } catch (ValidationException $th) {
            return response()->json([
                'error' => 'Invalid data',
                'message' => $th->getMessage(),
                'errors' => $th->errors()
            ], 400);
        }
    }

}
