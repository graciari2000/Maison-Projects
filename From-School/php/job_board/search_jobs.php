<?php
if (isset($_POST['search_query'])) {
    $search_query = mysqli_real_escape_string($conn, $_POST['search_query']);

    // Construct the SQL query
    $sql = "SELECT * FROM offres_emploi WHERE titre_poste LIKE '%$search_query%'";

    // Execute the SQL query
    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        // Display search results
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<div class='job'>";
            echo "<h3>" . $row['titre_poste'] . "</h3>";
            echo "<p>" . $row['description'] . "</p>";
            echo "<p><strong>Location:</strong> " . $row['localisation'] . "</p>";
            echo "</div>";
        }
    } else {
        echo "No jobs found matching your search query.";
    }
}

include_once('config.php');

// Check if search query is provided
if (isset($_POST['search_query'])) {
    $search_query = mysqli_real_escape_string($conn, $_POST['search_query']);

    // Construct the SQL query
    $sql = "SELECT * FROM offresemploi WHERE column_name LIKE '%$search_query%'";

    // Execute the SQL query
    $result = mysqli_query($conn, $sql);

    if ($result) {
        // Display search results
        while ($row = mysqli_fetch_assoc($result)) {
            // Output search results
        }
    } else {
        // Handle query execution error
        echo "Error: " . mysqli_error($conn);
    }
}