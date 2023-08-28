<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
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

    public function show($id)
    {
        try {
            $image = image::with('thumbnail')->findOrFail($id);
    
            $response = [
                'status' => 'success',
                'message' => 'image found!',
                'data' => [
                    'image' => $image,
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

        try {
            $uploadedImage = Cloudinary::upload($uploadedFile->getRealPath());
            $image = new Image;
            $image->urlImg = $uploadedImage->getSecurePath();
            $image->publicId = $uploadedImage->getPublicId();
            $image->name = $request->name;
            $image->user_id = 1;
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
