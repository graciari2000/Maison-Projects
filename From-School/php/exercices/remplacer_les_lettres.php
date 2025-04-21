<?php
function remplacerLesLettres($chaine) {
    $chaine = str_replace('e', '3', $chaine);
    $chaine = str_replace('i', '1', $chaine);
    $chaine = str_replace('o', '0', $chaine);
    $chaine = str_replace('E', '3', $chaine); 
    $chaine = str_replace('I', '1', $chaine);
    $chaine = str_replace('O', '0', $chaine);
    
    return $chaine;
}

echo remplacerLesLettres("Bonjour les amis\n");
echo remplacerLesLettres("Les cours de programmation Web sont trops cools"); 
