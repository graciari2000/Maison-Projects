<?php
include_once('config.php'); // Include database configuration file

// Retrieve jobs from database
$sql = "SELECT * FROM jobs";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // Display jobs
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<h2>" . $row['job_title'] . "</h2>";
        echo "<p>" . $row['job_description'] . "</p>";
        echo "<p><strong>Company:</strong> " . $row['company'] . "</p>";
        echo "<hr>";
    }
} else {
    echo "No jobs posted yet.";
}

mysqli_close($conn);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jobs</title>
</head>
<body>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="./index.html"><img src="./img/logo.png" alt="" width="40px"></a>
        </div>
        <ul class="nav">
            <li><a href="login.php">Login</a></li>
            <li><a href="contact_us.php">Contact Us</a></li>
            <li><a href="./post_job.php">Post a Job</a></li>
    </div>
    </ul>
</nav>
<h1>All Jobs</h1>

    <div class="container"></div>
    <footer class="footer">
        <div class="container">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to contact our support team at support@jobboard.com</p>
            <p class="footer-paragraph">&copy; 2024 Job Board. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>