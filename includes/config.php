<?php

    $pageUrl = strtok( (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) || isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]", "?");
    $pageTitle = "La nuova rete del calcio";
    $pageDescription = "Lo sport in tv sta vivendo una transizione epocale, spostandosi dal satellite allo streaming. Ora, grazie a TimVision, i tifosi hanno lo stadio in tasca";

    $twitterString = " " . $pageUrl;
    $whatsappString = $pageTitle. " " . $pageUrl;
?>
