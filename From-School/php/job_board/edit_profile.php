<?php
session_start();

// Database connection details
include 'config.php';

// Check if user is logged in
if (!isset($_SESSION['login_user'])) {
    header("location: login.php");
    exit();
}

// Fetch user info from the database based on the logged-in user's session data
if (isset($_SESSION['login_user'])) {
    $username = $_SESSION['login_user'];

    // Prepare and execute a SELECT statement to get user info
    $sql_user = "SELECT * FROM utilisateurs WHERE username = '$username'";
    $result_user = mysqli_query($conn, $sql_user);

    if (mysqli_num_rows($result_user) > 0) {
        $user = mysqli_fetch_assoc($result_user);
    } else {
        // Redirect if user is not found
        header("location: login.php");
        exit();
    }
} else {
    // Redirect if session variable is not set
    header("location: login.php");
    exit();
}

// Update profile if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $prenom = $_POST['prenom'];
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $date_of_birth = $_POST['date_of_birth'];
    $address = $_POST['address'];

    // Prepare and execute an UPDATE statement to update user info
    $sql_update = "UPDATE utilisateurs SET prenom = '$prenom', nom = '$nom', email = '$email', date_of_birth = '$date_of_birth', address = '$address' WHERE username = '$username'";

    if (mysqli_query($conn, $sql_update)) {
        // Redirect back to dashboard after successful update
        header("location: dashboard.php");
        exit();
    } else {
        echo "Error updating profile: " . mysqli_error($conn);
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Edit Profile</title>
    <link rel="stylesheet" href="./css/style.css">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <div class="container">
        <h1>Edit Profile</h1>
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">Edit Profile Information</h2>
                <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                    <div class="mb-3">
                        <label for="prenom" class="form-label">First Name:</label>
                        <input type="text" class="form-control" id="prenom" name="prenom" value="<?php echo $user['prenom']; ?>">
                    </div>
                    <div class="mb-3">
                        <label for="nom" class="form-label">Last Name:</label>
                        <input type="text" class="form-control" id="nom" name="nom" value="<?php echo $user['nom']; ?>">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="email" name="email" value="<?php echo $user['email']; ?>">
                    </div>
                    <div class="mb-3">
                        <label for="date_of_birth" class="form-label">Date of Birth:</label>
                        <input type="date" class="form-control" id="date_of_birth" name="date_of_birth" value="<?php echo $user['date_of_birth']; ?>">
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Address:</label>
                        <textarea class="form-control" id="address" name="address" rows="3"><?php echo $user['address']; ?></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                </form>
            </div>
        </div>
    </div>
</body>

</html>