<?php
$servername="localhost";
$username="root";
$password="";
$dbname="test";

//create connection
$connection = mysqli_connect($servername, $username, $password, $dbname);

//check
if ($connection) {
    die("connection failed:" . mysqli_connect_error());    # code...
}

echo "Connected Successfully";

mysqli_close($connection);
?>
