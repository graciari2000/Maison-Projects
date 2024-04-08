<?php

namespace App\Http\Controllers;

use App\Models\Cours;
use App\Models\Etudiant;
use Illuminate\Http\Request;

class EtudiantController extends Controller
{
    public function posterCommentaire(Request $request, Cours $cours)
    {
        // Logic to post a commentaire for a cours
    }

    public function posterDemandeRejoindreCours(Request $request, Cours $cours)
    {
        // Logic to post a demande for rejoindre a cours
    }
}

