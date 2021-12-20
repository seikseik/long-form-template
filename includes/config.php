<?php

    $pageUrl = strtok( (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) || isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]", "?");
    $pageTitle = "Serpenti: un emblema tra mito e glamour";
    $pageDescription = "Il segno più iconico della creatività di Bulgari cambia, senza mai perdere appeal e potere di seduzione, da oltre settant'anni.";

    $twitterString = "#bulgari #bulgariserpenti #Bulgarijewelry" . $pageUrl;
    $whatsappString = $pageTitle. " " . $pageUrl;
?>
