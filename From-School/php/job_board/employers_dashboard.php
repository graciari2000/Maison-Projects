<?php
session_start();

// Database connection details
include 'config.php';

// Check if employer is logged in
if (!isset($_SESSION['employer_user'])) {
    header("location: employer_login.php");
    exit();
}

// Fetch employer info from the database based on the logged-in employer's session data
if (isset($_SESSION['employer_user'])) {
    $employer_id = $_SESSION['employer_user'];

    // Fetch employer details
    $sql_employer = "SELECT * FROM employers WHERE id = '$employer_id'";
    $result_employer = mysqli_query($conn, $sql_employer);

    if (mysqli_num_rows($result_employer) > 0) {
        $employer = mysqli_fetch_assoc($result_employer);

        // Fetch jobs posted by the employer
        $sql_jobs = "SELECT * FROM jobs WHERE employer_id = '$employer_id'";
        $result_jobs = mysqli_query($conn, $sql_jobs);
        $jobs = array();

        if (mysqli_num_rows($result_jobs) > 0) {
            while ($row = mysqli_fetch_assoc($result_jobs)) {
                $jobs[] = $row;
            }
        }
    } else {
        // Redirect if employer is not found
        header("location: employer_login.php");
        exit();
    }
} else {
    // Redirect if session variable is not set
    header("location: employer_login.php");
    exit();
}

// Close connection
mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Employer Dashboard</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/dashboard.css">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="./index.php"><img src="./img/logo.png" alt="" width="40px"></a>
            </div>
            <ul class="nav">
                <!-- This link should be dynamic based on employer login status -->
                <li><a href="post_job.php">Post Job</a></li>
                <li><a href="logout.php">Logout</a></li>
            </ul>
        </div>
    </nav>
    <div class="container-fluid">
        <h1>Welcome, <?php echo $employer['company_name']; ?></h1>
        <div class="company-info">
            <p><strong>Company Name:</strong> <?php echo $employer['company_name']; ?></p>
            <p><strong>Email:</strong> <?php echo $employer['email']; ?></p>
            <p><strong>Phone:</strong> <?php echo $employer['phone']; ?></p>
            <!-- Other company details can be added here -->
        </div>
        <div class="row mt-4">
            <div class="col-md-8">
                <h2>Jobs Posted</h2>
                <?php if (!empty($jobs)) : ?>
                    <ul class="list-group">
                        <?php foreach ($jobs as $job) : ?>
                            <li class="list-group-item">
                                <h5><?php echo $job['job_title']; ?></h5>
                                <p><strong>Location:</strong> <?php echo $job['location']; ?></p>
                                <p><strong>Description:</strong> <?php echo $job['description']; ?></p>
                                <!-- Additional job details can be displayed here -->
                                <a href="applicants.php?job_id=<?php echo $job['id']; ?>" class="btn btn-primary">View Applicants</a>
                                <a href="edit_job.php?job_id=<?php echo $job['id']; ?>" class="btn btn-secondary">Edit</a>
                                <a href="delete_job.php?job_id=<?php echo $job['id']; ?>" class="btn btn-danger">Delete</a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                <?php else : ?>
                    <p>No jobs posted yet.</p>
                <?php endif; ?>
            </div>
            <div class="col-md-4">
                <!-- Placeholder for other sections -->
            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>