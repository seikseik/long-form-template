<?php

    $pageUrl = strtok( (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) || isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]", "?");
    $pageTitle = "Creatività e spirito di gruppo: così la scuola valorizza l’arte";
    $pageDescription = "Partecipando al concorso “Cento di questi anni” promosso da Fila – Fabbrica Italiana Lapis ed Affini, studenti e insegnanti di tutta Italia si sono confrontati sulle opere del Novecento, reinterpretandole secondo le proprie sensibilità.";

    $twitterString = " " . $pageUrl;
    $whatsappString = $pageTitle. " " . $pageUrl;
?>
