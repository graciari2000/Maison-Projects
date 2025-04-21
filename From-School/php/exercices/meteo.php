<?php
function obtenirInfosMeteo($ville, $cleAPI) {
    $url = "http://api.openweathermap.org/data/2.5/weather?q=$ville&appid=$cleAPI";
    $donneesMeteo = file_get_contents($url);
    $donneesDecodees = json_decode($donneesMeteo, true);
    return $donneesDecodees;
}

$cleAPI = "1794df7061ed0488a4e038f766144600";
$villeChoisie = "Dubai";
$infosMeteo = obtenirInfosMeteo($villeChoisie, $cleAPI);

if ($infosMeteo) {
    $temperature = $infosMeteo['main']['temp'];
    $temperature = $temperature - 273.15;
    $description = $infosMeteo['weather'][0]['description'];

    echo "Météo à $villeChoisie \n";
    echo "Température : $temperature °C \n";
    echo "Description : $description \n";
} else {
    echo "Erreur lors de la récupération des informations météo.";
}