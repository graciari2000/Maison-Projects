<?php
// Fonction pour calculer le nombre de jours jusqu'à l'anniversaire
function joursJusquAnniversaire($dateAnniversaire) {
    $aujourdhui = new DateTime();
    $anniversaire = new DateTime($dateAnniversaire);

    // Ajoute une année si l'anniversaire est déjà passé cette année
    if ($aujourdhui > $anniversaire) {
        $anniversaire->modify('+1 year');
    }

    $difference = $aujourdhui->diff($anniversaire);

    return $difference->days;
}

// Date d'anniversaire 
$dateAnniversaire = '2024-05-02';

// Calcul du nombre de jours jusqu'à l'anniversaire
$joursRestants = joursJusquAnniversaire($dateAnniversaire);

// Affichage du résultat
echo "Il reste $joursRestants jours jusqu'à l'anniversaire.";



// Fonction pour obtenir le premier et le dernier jour d'un mois à partir d'une date spécifiée
function premierDernierJourMois($dateSpecifiee) {
    $date = new DateTime($dateSpecifiee);

    // Premier jour du mois
    $premierJour = $date->modify('first day of this month')->format('Y-m-d');

    // Dernier jour du mois
    $dernierJour = $date->modify('last day of this month')->format('Y-m-d');

    return array('premierJour' => $premierJour, 'dernierJour' => $dernierJour);
}

// Date spécifiée (remplacez cette valeur par la date réelle)
$dateSpecifiee = '2022-08-15';

// Appel de la fonction pour obtenir le premier et le dernier jour du mois
$resultat = premierDernierJourMois($dateSpecifiee);

// Affichage du résultat
echo "Date spécifiée : $dateSpecifiee \n";
echo "Premier jour du mois : {$resultat['premierJour']} \n";
echo "Dernier jour du mois : {$resultat['dernierJour']} \n";

