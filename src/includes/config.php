<?php

    $pageUrl = strtok( (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) || isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]", "?");
    $pageTitle = "La reinvenzione digitale dei distretti";
    $pageDescription = "Stato dell'arte economico dei distretti, contributo dell'innovazione digitale e tecnologie abilitanti, l'impegno di Tim in tema business.";

    $twitterString = "%23lorem aggiungere il testo del tweet&url=" . $pageUrl . "&via=lorem";
    $whatsappString = $pageTitle. " " . $pageUrl;
?>
