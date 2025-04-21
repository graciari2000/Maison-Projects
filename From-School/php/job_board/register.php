<?php
include_once('config.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $nom = mysqli_real_escape_string($conn, $_POST['nom']);
    $prenom = mysqli_real_escape_string($conn, $_POST['prenom']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    // Autres champs du formulaire

    // Insérer les données dans la base de données
    $sql = "INSERT INTO Utilisateurs (username, password, nom, prenom, email) VALUES ('$username', '$password', '$nom', '$prenom', '$email')";
    if (mysqli_query($conn, $sql)) {
        header("location: login.php");
    } else {
        echo "Erreur: " . $sql . "<br>" . mysqli_error($conn);
    }
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <link rel="stylesheet" href="./css/register.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
    crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
    integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
    crossorigin="anonymous"></script>
</head>

<body>
    <main>
        <a href="./index.php"><img src="./img/logo.png" alt="" width="60px"></a>
        <div class="form-group">
            <h2>Welcome!</h2>
            <form method="post" action="./register.php">
                <label>Username:</label>
                <input type="text" name="username" required class="form-control" title="username"><br><br>
                <label>Password:</label>
                <input type="password" name="password" required class="form-control" title="password"><br><br>
                <label>Surname:</label>
                <input type="text" name="nom" required class="form-control" title="nom"><br><br>
                <label>Name:</label>
                <input type="text" name="prenom" required class="form-control" title="prenom"><br><br>
                <label>Email:</label>
                <input type="email" name="email" required class="form-control" title="email"><br><br>
                <!-- Autres champs du formulaire -->
                <input type="submit" value="S'inscrire">
                <p>Already a user?<a href="./login.php"> Sign in!</a></p>
            </form>
        </div>
    </main>
    <footer class="footer">
        <div class="container">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to contact our support team at support@jobboard.com</p>
            <p class="footer-paragraph">&copy; 2024 Job Board. All rights reserved.</p>
        </div>
    </footer>
</body>

</html>