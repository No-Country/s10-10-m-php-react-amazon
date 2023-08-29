<?php

namespace App\Http\Controllers;
use App\Models\Pack;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class PackController extends Controller
{
    public function store(Request $request){

        try {

            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'price' => 'required|numeric',
                'description' => 'required|string|max:255',
                'time_limit' => 'nullable|date',
                'business_id' => 'required|exists:businesses,id',
            ]);

            $pack = Pack::create([
                'name' => $validatedData['name'],
                'price' => $validatedData['price'],
                'description' => $validatedData['description'],
                'time_limit' => $validatedData['time_limit'],
                'business_id' => $validatedData['business_id'],
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
            $user= User::Where("tipo_user","business")
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
                    'business_id' => 'required|exists:businesses,id',
                ]);

                $pack->name = $validatedData['name'];
                $pack->price = $validatedData['price'];
                $pack->description = $validatedData['description'];
                $pack->time_limit = $validatedData['time_limit'];
                $pack->business_id = $validatedData['business_id'];
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

    public function destroy($id){
        $pack = Pack::find($id);
        if($pack){
            $pack->delete();
            return response()->json(['message' => 'Pack deleted'], 200);
        }else{
            return response()->json(['message' => 'Pack not found'], 404);
        }
    }
}
