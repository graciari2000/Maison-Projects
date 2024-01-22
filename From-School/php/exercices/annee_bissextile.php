<?php
// Fonction pour vérifier si une année est bissextile
function estBissextile($annee) {
    return ($annee % 4 == 0 && ($annee % 100 != 0 || $annee % 400 == 0));
}

// Afficher les années bissextiles entre 2005 et 2052
echo "Années bissextiles entre 2005 et 2052 : \n";

for ($annee = 2005; $annee <= 2052; $annee++) {
    if (estBissextile($annee)) {
        echo $annee . "\n";
    }
}
