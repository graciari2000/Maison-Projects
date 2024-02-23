<?php
require_once('config.php');
session_start();

// Vérifier si l'utilisateur est connecté
if (!isset($_SESSION['login_user'])) {
    header("location: login.php");
    exit();
}

// Récupérer tous les jobs postés
$sql = "SELECT * FROM saved_jobs";
$result = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Board - Dashboard</title>
    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <link rel="stylesheet" href="./css/dashboard.css">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="./index.html"><img src="./img/logo.png" alt="" width="40px"></a>
            </div>
            <ul class="nav">
                <li><a href="logout.php">Logout</a></li>
                <li></li>
                <!-- Ajout d'un lien pour se déconnecter -->
                <li><a href="contact_us.php">Contact Us</a></li>
                <li><a href="./post_job.php">Post a Job</a></li>
            </ul>
        </div>
    </nav>

    <div class="container">
        <h2>Welcome, <?php echo $_SESSION['login_user']; ?>!</h2>
        <h3>Job Listings</h3>
        <div class="job-listings">
            <?php
            if (mysqli_num_rows($result) > 0) {
                while ($row = mysqli_fetch_assoc($result)) {
                    echo "<div class='job'>";
                    echo "<h3>" . $row['job_title'] . "</h3>";
                    echo "<h5>" . $row['company'] . "</h5>";
                    echo "<p>" . $row['job_description'] . "</p>";
                    echo "<p><strong>Location:</strong> " . $row['location'] . "</p>";
                    echo "<button type= 'primary'>Postuler </button>";
                    echo "</div>";
                }
            } else {
                echo "No jobs listed.";
            }
            ?>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to contact our support team at support@jobboard.com</p>
            <p class="footer-paragraph">&copy; 2024 Job Board. All rights reserved.</p>
        </div>
    </footer>
</body>

</html>