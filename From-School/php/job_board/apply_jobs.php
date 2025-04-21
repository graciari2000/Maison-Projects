<?php
include_once('config.php');
session_start();
$username = $_SESSION['login_user'];

// Récupérer l'ID de l'offre d'emploi à laquelle l'utilisateur postule
$job_id = $_GET['job_id']; // Supposons que vous passiez l'ID de l'offre dans l'URL

// Insérer les données de candidature dans la base de données
$sql = "INSERT INTO candidatures (username, offreemploi_id) VALUES ('$username', '$offreemploi_id')";
if (mysqli_query($conn, $sql)) {
    echo "Candidature envoyée avec succès.";
} else {
    echo "Erreur: " . $sql . "<br>" . mysqli_error($conn);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Postuler à un Emploi</title>
    <link rel="stylesheet" href="./css/style.css">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="./index.php"><img src="./img/logo.png" alt="" width="40px"></a>
            </div>
            <ul class="nav">
                <!-- This link should be dynamic based on user login status -->
                <li><a href="logout.php">Logout</a></li>
            </ul>
        </div>
    </nav>
    <!-- Interface utilisateur pour postuler à un emploi -->
    <section id="postuler">
        

</html>