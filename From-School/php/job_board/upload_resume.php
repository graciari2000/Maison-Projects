<?php
session_start();

// Check if user is logged in
if (!isset($_SESSION['login_user'])) {
    header("location: login.php");
    exit();
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["resumeFile"])) {
    $targetDir = "resume_uploads/";
    $targetFile = $targetDir . basename($_FILES["resumeFile"]["name"]);

    // Check file type (allowing only PDF files)
    $fileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
    if ($fileType != "pdf") {
        echo "Only PDF files are allowed.";
        exit();
    }

    // Move the uploaded file to the target directory
    if (move_uploaded_file($_FILES["resumeFile"]["tmp_name"], $targetFile)) {
        // Update the database with the resume path for the logged-in user
        include 'config.php';
        $username = $_SESSION['login_user'];
        $sql = "UPDATE utilisateurs SET resume_path = '$targetFile' WHERE username = '$username'";
        if (mysqli_query($conn, $sql)) {
            // Close connection
            mysqli_close($conn);
            echo "Resume uploaded successfully.";
            // Redirect back to dashboard
            header("Location: dashboard.php");
            exit();
        } else {
            echo "Error updating resume path: " . mysqli_error($conn);
        }
    } else {
        echo "Error uploading file.";
    }
} else {
    echo "Invalid request.";
}
