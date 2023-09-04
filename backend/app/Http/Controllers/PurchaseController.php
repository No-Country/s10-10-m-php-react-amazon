<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Purchase;

use Illuminate\Validation\ValidationException;

class PurchaseController extends Controller
{
    public function store(Request $request){
        try {
            $validatedData = $request->validate([
                'pack_id' => 'required|exists:packs,id',
                'user_id' => 'required|exists:users,id',
                'code' => 'required|string|max:255',
                'status' => 'required|string|max:255'
            ]);
            $purchase = Purchase::create([
                'pack_id' => $validatedData['pack_id'],
                'user_id' => $validatedData['user_id'],
                'code' => $validatedData['code'],
                'status' => $validatedData['status'],
            ]);

            return response()->json(['Purchase created' => $purchase], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Invalidated data',
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], 400);
        }
    }

    public function show(Request $request){
        try {
            $validatedData = $request->validate([
                'user_id' => 'required|exists:users,id',
            ]);
            $purchase = Purchase::where('user_id', $validatedData['user_id'])->get();

            return response()->json(['Purchase' => $purchase], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Invalidated data',
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], 400);
        }
    }

    public function update(Request $request){
        try {
            $validatedData = $request->validate([
                'id' => 'required|exists:purchases,id',
                'status' => 'required|string|max:255'
            ]);
            $purchase = Purchase::where('id', $validatedData['id'])->update(['status' => $validatedData['status']]);

            return response()->json(['Purchase' => $purchase], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Invalidated data',
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], 400);
        }
    }

    public function destroy($id){
        $purchase = Purchase::find($id);
        if($purchase){
            $purchase->delete();
            return response()->json(['message' => 'Purchase deleted'], 200);
        }else{
            return response()->json(['message' => 'Purchase not found'], 404);
        }
    }
}
