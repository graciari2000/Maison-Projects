<?php
session_start();

// Database connection details
include 'config.php';

// Check if user is logged in
if (!isset($_SESSION['login_user'])) {
    header("location: login.php");
    echo 'Connexion etablie';
}

// Fetch user info from the database based on the logged-in user's session data
$username = $_SESSION['login_user'];
$sql_user = "SELECT * FROM utilisateurs WHERE username = '$username'";
$result_user = mysqli_query($conn, $sql_user);

if (!$result_user || mysqli_num_rows($result_user) === 0) {
    // Redirect if user data not found
    header("location: login.php");
    exit();
}

$user = mysqli_fetch_assoc($result_user);

// Prepare and execute a SELECT statement to get saved jobs for the user
$user_id = $user['userId'];

// Close connection
mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>User Dashboard</title>
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
                <!-- This link should be dynamic based on user login status -->
                <li><a href="apply_jobs.php">Apply to Jobs</a></li>
                <li><a href="logout.php">Logout</a></li>
            </ul>
        </div>
    </nav>
    <div class="container-fluid">
        <h1>Welcome, <?php echo $user['prenom']; ?></h1>
        <div class="user-info">
            <p><strong>Username:</strong> <?php echo $user['username']; ?></p>
            <p><strong>Email:</strong> <?php echo $user['email']; ?></p>
            <!-- Additional Profile Information -->
            <p><strong>Date of Birth:</strong> <?php echo $user['date_of_birth']; ?></p>
            <p><strong>Address:</strong> <?php echo $user['address']; ?></p>
            <button type="button" onclick="location.href='edit_profile.php'" class="btn btn-primary">Edit Profile</button>
            <!-- Resume Section -->
            <div class="resume-section">
                <h2>Resume</h2>
                <?php if (!empty($user['resume_path'])) : ?>
                    <p><a href="<?php echo $user['resume_path']; ?>" target="_blank">View Resume</a></p>
                <?php else : ?>
                    <p>No resume uploaded yet.</p>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#uploadResumeModal">Upload Resume</button>
                <?php endif; ?>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-8">
                <h2>Saved Jobs</h2>
                <?php if (!empty($savedJobs)) : ?>
                    <ul class="list-group">
                        <?php foreach ($savedJobs as $job) : ?>
                            <li class="list-group-item">
                                <h5><?php echo $job['job_title']; ?></h5>
                                <p><strong>Company:</strong> <?php echo $job['company']; ?></p>
                                <p><strong>Location:</strong> <?php echo $job['location']; ?></p>
                                <p><strong>Description:</strong> <?php echo $job['job_description']; ?></p>
                                <p><strong>Applied Status:</strong>
                                    <?php if ($job['status'] === 'Accepted') : ?>
                                        <span class="badge bg-success">Accepted</span>
                                    <?php elseif ($job['status'] === 'Refused') : ?>
                                        <span class="badge bg-danger">Refused</span>
                                    <?php else : ?>
                                        <span class="badge bg-secondary">Pending</span>
                                    <?php endif; ?>
                                </p>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                <?php else : ?>
                    <p>No saved jobs yet.</p>
                <?php endif; ?>
            </div>
            <div class="col-md-4">
                <!-- Placeholder for other sections -->
            </div>
        </div>
    </div>

    <!-- Modal for uploading resume -->
    <div class="modal fade" id="uploadResumeModal" tabindex="-1" aria-labelledby="uploadResumeModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="uploadResumeModalLabel">Upload Resume</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="upload_resume.php" method="post" enctype="multipart/form-data">
                        <div class="mb-3">
                            <label for="resumeFile" class="form-label">Choose file:</label>
                            <input type="file" class="form-control" id="resumeFile" name="resumeFile" accept=".pdf">
                        </div>
                        <button type="submit" class="btn btn-primary">Upload</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</body>

</html>