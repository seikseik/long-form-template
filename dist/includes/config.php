<?php

    $pageUrl = strtok( (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) || isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]", "?");
    $pageTitle = "Noi esuli";
    $pageDescription = "Dalla fine cruenta della convivenza in Istria, Fiume e Dalmazia al faticoso e sofferto percorso di riconciliazione. La storia del confine orientale raccontata da chi l’ha vissuta. Per ricordare.";

    $twitterString = " " . $pageUrl;
    $whatsappString = $pageTitle. " " . $pageUrl;
?>
