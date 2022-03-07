<?php

    $pageUrl = strtok( (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) || isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]", "?");
    $pageTitle = "Il nuovo volto della boutique di Milano";
    $pageDescription = "Al centro del restyling, a cui ha contribuito anche l'architetto Stefano Boeri, un omaggio alla città e all'eleganza dello stile italiano. Tra cenni al passato e codici contemporanei";

    $twitterString = "" . $pageUrl;
    $whatsappString = $pageTitle. " " . $pageUrl;
?>
