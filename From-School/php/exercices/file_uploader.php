<?php 
//file uploader in php
$target_dir = "uploads/"; //directory where the files will be uploaded to
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]); //creates a variable with the name of the file and adds it to the targetdirectory.
$uploadOk = 1; //variable to check if the file is accepted by the conditions below
$imageFileType = pathinfo($target_file, PATHINFO_EXTENSION); //extracts the file extension from the filename
// Check if file already exists
if (file_exists($target_dir . $name)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
    }