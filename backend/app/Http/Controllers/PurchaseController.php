<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Purchase;
use App\Models\Pack;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PurchaseController extends Controller
{
    public function __construct()
    {
        $this->middleware('api');
    }

    public function store(Request $request){
        try {
            DB::beginTransaction();
            $validatedData = $request->validate([
                'pack_id' => 'required|exists:packs,id',
                'amount' => 'required|numeric|min:0'
            ]);
            $pack = Pack::findOrFail($validatedData['pack_id']);

            if ($pack->stock < $validatedData['amount'])
            {
                throw new \Exception('not enough stock');
            }
            $encryptedId = Auth::user()->getAuthIdentifier();
            $purchase = Purchase::create([
                'pack_id' => $validatedData['pack_id'],
                'user_id' => $encryptedId,
                'code' => $this->generateCode(),
                'amount' => $validatedData['amount']
            ]);

            $pack->stock -= $validatedData['amount'];
            $pack->save();
            DB::commit();
            return response()->json(['Purchase created' => $purchase], 201);
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json([
                'error' => 'Invalidated data',
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], 400);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json([
                'error' => 'Error',
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    public function show(Request $request){
        try {
            checkLogin();

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
            checkLogin();

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
        checkLogin();

        $purchase = Purchase::find($id);
        if($purchase){
            $purchase->delete();
            return response()->json(['message' => 'Purchase deleted'], 200);
        }else{
            return response()->json(['message' => 'Purchase not found'], 404);
        }
    }
    public function generateCode()
    {
        return substr(uniqid(), -6);
    }
}

