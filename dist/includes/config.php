<?php

    $pageUrl = strtok( (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) || isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]", "?");
    $pageTitle = "Serpenti: un emblema tra mito e glamour";
    $pageDescription = "";

    $twitterString = " " . $pageUrl;
    $whatsappString = $pageTitle. " " . $pageUrl;
?>
