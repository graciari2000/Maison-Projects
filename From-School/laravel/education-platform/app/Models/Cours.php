<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    protected $fillable = [
        'titre', 'nom_instructeur', 'description', 'duree', 'niveau_difficulte',
        'nombre_lecons', 'nombre_quizz', 'prix', 'nombre_etudiants_acceptes',
        'category_id', 'instructeur_id'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function instructeur()
    {
        return $this->belongsTo(Instructeur::class);
    }

    public function feedbacks()
    {
        return $this->hasMany(Feedback::class);
    }

    public function demandes()
    {
        return $this->hasMany(DemandeRejoindreCours::class);
    }
}
