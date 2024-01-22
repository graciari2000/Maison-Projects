<?php
function verificationPassword($password) {
    $longueur = strlen($password);
    
    // Vérifier si le mot de passe a au moins 8 caractères, une majuscule et une minuscule
    if ($longueur >= 8 && preg_match('/[A-Z]/', $password) && preg_match('/[a-z]/', $password)) {
        return true;
    } else {
        return false;
    }
}

echo var_export(verificationPassword("kafuiakp"));
echo("\n");
echo var_export(verificationPassword("12345678")); 

