<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Purchase;
use App\Models\Pack;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;
use Faker\Generator as Faker;

class PurchaseController extends Controller
{
    public function store(Request $request){
        try {
            //$amount = Pack::findOrFail($validatedData['pack_id'])->pluck('amount');
            $validatedData = $request->validate([
                'pack_id' => 'required|exists:packs,id',
                'code' => 'required|string|max:255',
                'amount' => 'required'
            ]);
            $encryptedId = Auth::user()->getAuthIdentifier();

            
            $purchase = Purchase::create([
                'pack_id' => $validatedData['pack_id'],
                'user_id' => $encryptedId,
                'code' => $this->generate(),
                'amount' => $validatedData['amount']
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
    public function generate()
    {
        $prefix = ''; // Puedes especificar un prefijo si lo deseas
        $codigo = $prefix . substr(uniqid(), -6);
    
        return $codigo;
    }
}

