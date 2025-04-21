<?php
// Fonction pour calculer l'âge en années et jours
function calculerAge($dateNaissance) {
    $dateNaissance = new DateTime($dateNaissance);
    $dateActuelle = new DateTime();
    $difference = $dateActuelle->diff($dateNaissance);

    $annees = $difference->y;
    $jours = $difference->days;

    return array($annees, $jours);
}

// Vérifier si le formulaire est soumis
if ("REQUEST_METHOD" == "POST") {
    $dateNaissance = $_POST["dateNaissance"];

    // Vérifier si la date de naissance est valide
    if (DateTime::createFromFormat('Y-m-d', $dateNaissance) !== false) {
        list($annees, $jours) = calculerAge($dateNaissance);
        echo "Votre âge : $annees ans et $jours jours.";
    } else {
        echo "Format de date invalide. Utilisez le format 'YYYY-MM-DD'.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcul d'âge</title>
</head>

<body>
    <h2>Calcul d'âge</h2>
    <form action="./calcul_age.php" method="post">
        <label for="dateNaissance">Date de naissance (YYYY-MM-DD):</label>
        <input type="text" id="dateNaissance" name="dateNaissance" required>
        <button type="submit">Calculer l'âge</button>
    </form>
</body>

</html>
