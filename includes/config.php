<?php

    $pageUrl = strtok( (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) || isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]", "?");
    $pageTitle = "Il cantiere dei cittadini digitali ";
    $pageDescription = "Una grande alleanza guidata da TIM per diffondere le competenze tecnologiche nel nostro Paese insieme ad aziende pubbliche, private e no profit.";

    $twitterString = "#digitaltransformation" . $pageUrl;
    $whatsappString = $pageTitle. " " . $pageUrl;
?>
