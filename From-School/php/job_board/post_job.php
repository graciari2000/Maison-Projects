<?php
include_once('config.php');
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = 1; // Vous devrez ajuster ceci en fonction de la logique de votre application
    $company = mysqli_real_escape_string($conn, $_POST['company']);
    $industry = mysqli_real_escape_string($conn, $_POST['industry']);
    $job_title = mysqli_real_escape_string($conn, $_POST['job_title']);
    $location = mysqli_real_escape_string($conn, $_POST['location']);
    $job_description = mysqli_real_escape_string($conn, $_POST['job_description']);
    $status = mysqli_real_escape_string($conn, $_POST['status']);

    // Insérer les données dans la base de données
    $sql = "INSERT INTO saved_jobs (user_id, job_title, company, location, job_description, status) 
            VALUES ('$user_id', '$job_title', '$company', '$location', '$job_description', '$status')";

    if (mysqli_query($conn, $sql)) {
        header("location: dashboard.php");
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
    <title>Publier une Offre d'Emploi</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/post_job.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
</head>

<body>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="./index.php"><img src="./img/logo.png" alt="" width="40px"></a>
            </div>
            <ul class="nav">
                <li><a href="login.php">Sign in</a></li>
                <li><a href="./post_job.php">Employers/Post a Job</a></li>
        </div>
        </ul>
    </nav>
    <main>
        <img src="./img/undraw_wall_post_re_y78d.svg" alt="" width="250px">
        <div class="form-group">
            <h2>Publier une Offre d'Emploi</h2>
            <form method="post" action="post_job.php">
                <label>Company Name:</label>
                <input type="text" name="company" required class="form-control" title="company-name"><br><br>

                <label>Company's Industry:</label>
                <select id="industry" name="industry" class="form-control" title="industry">
                    <option value="" selected disabled>Select an Industry</option>
                    <option value="tech">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="transportation">Transportation</option>
                    <option value="energy">Energy</option>
                    <option value="media">Media & Entertainment</option>
                    <option value="other">Other</option>
                </select><br><br>

                <label>Job Title:</label>
                <input type="text" name="job_title" required class="form-control" title="job-title"><br><br>

                <label>Location:</label>
                <input type="text" name="location" class="form-control" title="location"><br><br>

                <label>Job Description:</label>
                <textarea name="job_description" class="form-control" title="job-description"></textarea><br><br>

                <label>Status:</label>
                <select name="status" class="form-control" title="status">
                    <option value="Pending" selected>Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                </select><br><br>

                <input type="submit" value="Publier" class="form-control">
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