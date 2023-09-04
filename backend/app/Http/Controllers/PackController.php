<?php

namespace App\Http\Controllers;
use App\Models\Pack;

use App\Models\User;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


use Cloudinary;
class PackController extends Controller
{

    public function store(Request $request){

        try {


            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'price' => 'required|numeric',
                'description' => 'required|string|max:255',
                'time_limit' => 'nullable|date',
                'stock' => 'required|numeric'
            ]);
            $encryptedId = Auth::user()->getAuthIdentifier();
            $pack = Pack::create([
                'name' => $validatedData['name'],
                'price' => $validatedData['price'],
                'description' => $validatedData['description'],
                'time_limit' => $validatedData['time_limit'],
                'user_id' => $encryptedId,
                'stock' => $validatedData['stock']
            ]);

            return response()->json(['Pack created' => $pack], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Invalidated data',
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], 400);
        }
    }

    public function filter(Request $request){
        try{
            $validatedData = $request->validate([
                'category' => 'required'
            ]);
            $user= User::Where("type","business")
            ->where("category",$validatedData["category"])
            ->with("pack")
            ->get();

            return response()->json(['Business' => $user], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Invalidated data',
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], 400);
        }
    }

    public function show($id){
        $pack = Pack::find($id);
        if($pack){
            return response()->json(['Pack' => $pack], 200);
        }else{
            return response()->json(['message' => 'Pack not found'], 404);
        }
    }

    public function update(Request $request, $id){
        $pack = Pack::find($id);

        if($pack){
            try {

                $validatedData = $request->validate([
                    'name' => 'required|string|max:255',
                    'price' => 'required|numeric',
                    'description' => 'required|string|max:255',
                    'time_limit' => 'nullable|date',
                    'stock' => 'required|numeric'
                ]);

                $pack->name = $validatedData['name'];
                $pack->price = $validatedData['price'];
                $pack->description = $validatedData['description'];
                $pack->time_limit = $validatedData['time_limit'];
                $pack->stock = $validatedData['stock'];
                $pack->save();

                return response()->json(['Pack updated' => $pack], 200);

            } catch (ValidationException $e) {
                return response()->json([
                    'error' => 'Invalidated data',
                    'message' => $e->getMessage(),
                    'errors' => $e->errors()
                ], 400);
            }
        }else{
            return response()->json(['message' => 'Pack not found'], 404);
        }
    }

    public function destroy($id)
    {
        $pack = Pack::find($id);
        if($pack){
            $pack->delete();
            return response()->json(['message' => 'Pack deleted'], 200);
        }else{
            return response()->json(['message' => 'Pack not found'], 404);
        }
    }
    public function image(Request $request,$id)
    {
        try {
            $validationData = $request->validate([
                'image' => 'required|image|mimes:jpeg,png'
            ], [
                'image.required' => 'An image is required.',
                'image.image' => 'The uploaded file must be an image.',
                'image.mimes' => 'The image must be in JPEG or PNG format.',
            ]);

            $uploadedFile = $request->file('image');
            $user = Auth::user();
            $pack = Pack::findOrFail($id);
            $imageUrl = Cloudinary::upload($uploadedFile->getRealPath());
            $pack->photo_url = $imageUrl->getSecurePath();

            $pack->save();
            return response()->json(['message' => $pack->photo_url]);
        } catch (\Illuminate\Validation\ValidationException $validationException) {
            $errors = $validationException->validator->getMessageBag()->toArray();
            return response()->json(['error' => 'Validation error', 'errors' => $errors], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occurred while updating the photo', 'message' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    public function deleteImage($id) {

        try {
            $pack = Pack::findOrFail($id);

            $publicId = pathinfo(parse_url($pack->photo_url, PHP_URL_PATH), PATHINFO_FILENAME);
            Cloudinary::destroy($publicId);
            $pack->photo_url = null;
            $pack->save();
            return response()->json(['photo' => 'Pack photo deleted successfully'], 200);
        } catch (ValidationException $e) {
            return response()->json(['error' => 'Invalid ID'], 400);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Pack not found'], 404);
        }
    }
}
