<?php

    $pageUrl = strtok( (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) || isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]", "?");
    $pageTitle = "Elezioni Quirinale 2022";
    $pageDescription = "";

    $twitterString = "" . $pageUrl;
    $whatsappString = $pageTitle. " " . $pageUrl;
?>
