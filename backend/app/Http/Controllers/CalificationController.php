<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Calification;
use App\Models\Purchase;
class CalificationController extends Controller
{
    public function index($user_id)
    {
        $califications = Calification::where('user_id', $user_id)->get();
        return response()->json($califications);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'stars' => 'required|integer|between:1,5',
            'comment' => 'nullable|string',
            'tags' => 'nullable|string',
            'name' => 'nullable|string',
        ]);

        $calification = Calification::create($validatedData);

        return response()->json($calification, 201);
    }

    public function update(Request $request, $id)
    {
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
    }
}