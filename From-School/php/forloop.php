<?php
for ($i = 1; $i <= 10; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo '* ';
    }
    echo "\n";
}

function estNombrePremier($nombre) {
    if ($nombre < 2) {
        return false;
    }
    for ($i = 2; $i <= sqrt($nombre); $i++) {
        if ($nombre % $i == 0) {
            return false;
        }
    }
    return true;
}

for ($nombre = 3; $nombre <= 100; $nombre++) {
    if (estNombrePremier($nombre)) {
        echo $nombre . " ";
    }
}

$ch = "informatique";
$ch2 = "les ordinateurs Portable";
echo substr($ch, 2, 3) . PHP_EOL;
echo substr($ch, 3, 3) . PHP_EOL;
echo substr($ch, 4, 3) . PHP_EOL;
echo substr($ch, 0, 3) . PHP_EOL;
echo $ch . PHP_EOL;
echo substr($ch2, 0, 20) . PHP_EOL;
echo "Longueur de la chaîne \$ch : " . strlen($ch) . PHP_EOL;
echo "Longueur de la chaîne \$ch2 : " . strlen($ch2) . PHP_EOL;
$ch2 = str_replace("Portable", "de bureau", $ch2);
echo $ch2 . PHP_EOL;


$ch = "hiver#automne#pringtemps#ete";
$saisons = explode("#", $ch);
print_r($saisons);
$couleurs = ['rouge', 'noir', 'bleu'];
$couleurs_str = implode(", ", $couleurs);
echo $couleurs_str;

