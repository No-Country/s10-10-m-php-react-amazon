<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class CategoryController extends Controller
{

    public function __construct()
    {
        $this->middleware('api');
    }

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
        try{
            checkLogin();

            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'description' => 'string|max:255'
            ]);

            $category = Category::create([
                'name' => $validatedData['name'],
                'description' => $validatedData['description']
            ]);

            return response()->json(['Category created' => $category], 201);

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
    public function show()
    {
        checkLogin();

        $categories = Category::all();

        if ($categories->isEmpty()) {
            return response()->json(['message' => 'No categories found'], 404);
        } else {
            return response()->json(['Categories' => $categories], 200);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        checkLogin();

        $category = Category::find($id);

        if($category){
            try {

                $validatedData = $request->validate([
                    'name' => 'required|string|max:255',
                    'description' => 'string|max:255'
                ]);

                $category->update([
                    'name' => $validatedData['name'],
                    'description' => $validatedData['description']
                ]);

                return response()->json(['Category updated' => $category], 200);

            } catch (ValidationException $e) {
                return response()->json([
                    'error' => 'Invalidated data',
                    'message' => $e->getMessage(),
                    'errors' => $e->errors()
                ], 400);
            }
        }else{
            return response()->json(['message' => 'Category not found'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        checkLogin();

        $category = Category::find($id);

        if($category){
            $category->delete();
            return response()->json(['Category deleted' => $category], 200);
        }else{
            return response()->json(['message' => 'Category not found'], 404);
        }
    }
}
