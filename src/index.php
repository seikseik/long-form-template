<?php
    include_once('./includes/config.php');
?>
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle; ?></title>
    <meta name="description" content="<?php echo $pageDescription; ?>"/>
    <link rel="canonical" href="<?php echo $pageUrl; ?>">

    <!-- CONFIGURAZIONE STATS -->
    <script  type="text/javascript">
        var pageHref='<?php echo $pageUrl; ?>';
        var pageType='dettaglio_content';
    </script>
    <esi:include src='http://www.repstatic.it/cless/common/stable/js/script/tlh/traffic_light_handler.html' />
    <script async="" onerror="try { asr_error() } catch(e) {}" onload="try { kw_tlh_ready(); } catch(e) {}" src="//oasjs.kataweb.it/adsetup.js"></script>
    <!-- CONFIGURAZIONE STATS -->

    <!-- facebook -->
    <meta property="fb:app_id" content="182234715127717" />
    <meta property="og:site_name" content="" />
    <meta property="og:type" content="article">
    <meta property="og:title" content="<?php echo $pageTitle; ?>">
    <meta property="og:description" content="<?php echo $pageDescription; ?>">
    <meta property="og:image" content="<?php echo $pageUrl; ?>assets/img/social.jpg?<?php echo filemtime('./assets/img/social.jpg'); ?>">
    <meta property="og:url" content="<?php echo $pageUrl; ?>">
    <meta property="article:published_time" content="2020-02-14T09:00">
    <!-- facebook -->

    <!-- twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="" />
    <meta name="twitter:title" content="<?php echo $pageTitle; ?>" >
    <meta name="twitter:description" content="<?php echo $pageDescription; ?>">
    <meta name="twitter:image" content="<?php echo $pageUrl; ?>assets/img/social.jpg?<?php echo filemtime('./assets/img/social.jpg'); ?>" >
    <meta name="twitter:url" content="<?php echo $pageUrl; ?>">
    <!-- twitter -->

</head>
<body>
    <h1>Starter kit</h1>

    <ul>
        <li><a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $pageUrl; ?>" target="_blank">FB</a></li>
        <li><a href="https://twitter.com/intent/tweet?text=<?php echo $twitterString; ?>" target="_blank">TW</a></li>
        <li><a href="https://api.whatsapp.com/send?text=<?php echo rawurlencode($whatsappString); ?>" target="_blank">WU</a></li>
    </ul>






    <div class="footer">
        <p><esi:include src="https://lab.gedidigital.it/utils/includes/footer/stampa_nazionale.html" /></p>
    </div>


    <esi:include src='http://www.repstatic.it/cless/common/stable/include/wt/wt.html' />
    <esi:include src='http://www.repstatic.it/cless/common/stable/include/nielsen/nielsen.html' />
</body>
</html>
