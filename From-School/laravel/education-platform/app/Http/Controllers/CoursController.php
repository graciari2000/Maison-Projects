<?php

namespace App\Http\Controllers;

use App\Models\Cours;
use Illuminate\Http\Request;

class CoursController extends Controller
{
    public function index()
    {
        return Cours::all();
    }

    public function store(Request $request)
    {
        return Cours::create($request->all());
    }

    public function show(Cours $cours)
    {
        return $cours;
    }

    public function update(Request $request, Cours $cours)
    {
        $cours->update($request->all());
        return $cours;
    }

    public function destroy(Cours $cours)
    {
        $cours->delete();
        return response()->json(null, 204);
    }
}

