<?php

    $pageUrl = strtok( (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) || isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]", "?");
    $pageTitle = "Titolo pagina";
    $pageDescription = "descrizione pagina";

    $twitterString = "%23lorem aggiungere il testo del tweet&url=" . $pageUrl . "&via=lorem";
    $whatsappString = $pageTitle. " " . $pageUrl;
?>