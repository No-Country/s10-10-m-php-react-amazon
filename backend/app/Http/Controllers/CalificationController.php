<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Calification;
use App\Models\Purchase;
use App\Models\User;

class CalificationController extends Controller
{
    public function index($user_id)
    {
        try{
            $califications = Calification::where('user_id', $user_id)->get();
            return response()->json($califications);
        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Invalidated data',
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], 400);
        }
    }

    public function store(Request $request)
    {
        try{
            $validatedData = $request->validate([
                'user_id' => 'required|exists:users,id',
                'score' => 'required|integer|between:1,5',
                'comment' => 'nullable|string',
                'tags' => 'nullable|string',
                'name' => 'nullable|string',
            ]);

            $calification = Calification::create($validatedData);
            $user = User::findOrFail($validatedData['user_id']);

            $user->total_operations += 1;
            $user->total_score += $validatedData['score'];
            $user->score = $user->total_score / $user->total_operations;
            $user->save();

            return response()->json($calification, 201);
        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Invalidated data',
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], 400);
        }
    }

    public function update(Request $request, $id)
    {
        try{
            $validatedData = $request->validate([
                'user_id' => 'exists:users,id',
                'stars' => 'integer|between:1,5',
                'comment' => 'nullable|string',
                'tags' => 'nullable|string',
                'name' => 'nullable|string'
            ]);

            $calification = Calification::find($id);

            if (!$calification) {
                return response()->json(['message' => 'Calificación no encontrada'], 404);
            }

            $calification->update($validatedData);

            return response()->json($calification, 200);
        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Invalidated data',
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], 400);
        }
    }
}
