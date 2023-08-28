<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Business;
use Illuminate\Validation\ValidationException;


class BusinessController extends Controller
{
        /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        try {

            $validatedData = $request->validate([
                'address' => 'required|string|max:255',
                'description' => 'required|string|max:255',
                'category' => 'required|string|max:255',
                'user_id' => 'required|exists:users,id',
            ]);


            $business = Business::create([
                'address' => $validatedData['address'],
                'description' => $validatedData['description'],
                'category' => $validatedData['category'],
                'user_id' => $validatedData['user_id'],
            ]);

            return response()->json(['Business created' => $business], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Invalidated data',
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], 400);
        }

    }

    /**
     * Display the specified resource.
     */
    public function showAll()
    {
        $Business = Business::all();
        return response()->json(['All Business' => $Business]);
    }

    public function show($id)
    {
        $Business = Business::find($id);

        if (!$Business) {
            return response()->json(['message' => 'Business not found'], 404);
        } else {
            return response()->json(['Business found' => $Business]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {

        $business = Business::find($id);

        if (!$business) {
            return response()->json(['message' => 'Business not found'], 404);
        } else {
            try {

            $validatedData = $request->validate([
                'address' => 'required|string|max:255',
                'description' => 'required|string|max:255',
                'category' => 'required|string|max:255',
                'user_id' => 'required|exists:users,id',
            ]);

            $business->update([
                'address' => $validatedData['address'],
                'description' => $validatedData['description'],
                'category' => $validatedData['category'],
                'user_id' => $validatedData['user_id'],
            ]);

            return response()->json(['Business updated' => $business], 201);

            } catch (ValidationException $e) {
                return response()->json([
                    'error' => 'Invalidated data',
                    'message' => $e->getMessage(),
                    'errors' => $e->errors()
                ], 400);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $business = Business::find($id);

        if (!$business) {
            return response()->json(['message' => 'Business not found'], 404);
        } else {
            $business->delete();
            return response()->json(['message' => 'Business deleted'], 200);
        }
    }
}
