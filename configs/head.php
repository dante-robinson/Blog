<!-- Load css stylesheets for all pages -->
<link rel="stylesheet" href="/styles/title.css" />
<link rel="stylesheet" href="/styles/global.css" />
<link rel="stylesheet" href="/styles/nav.css" />
<link rel="stylesheet" href="/styles/modal.css" />
<link rel="stylesheet" href="/styles/footer.css" />

<!-- Load icons for footer -->
<link href="/fontawesome/css/fontawesome.css" rel="stylesheet" />
<link href="/fontawesome/css/brands.css" rel="stylesheet" />
<link href="/fontawesome/css/solid.css" rel="stylesheet" />

<title>
    <?php print $PAGE_TITLE; ?>
</title>

<!-- Each page will need it's own case statement -->

<?php
switch ($CURRENT_PAGE) {
    case "Arch Linux Install Guide":
        ?>
        <meta name="description" content="Arch Linux Install Guide." />
        <meta name="keywords" content="" />
        <?php
        break;
    case "Linux Performance Guide":
        ?>
        <meta name="description" content="Arch Linux Install Guide." />
        <meta name="keywords" content="" />
        <?php
        break;
    case "Linux Security Guide":
        ?>
        <meta name="description" content="Linux Security Guide" />
        <meta name="keywords" content="" />
        <?php
        break;
    case "XRP & XLM The biggest scams in Crypto":
        ?>
        <meta name="description"
            content="A simple blog post covering why the tokens XRP and XLM are a scam and should be avoided." />
        <meta name="keywords" content="" />
        <?php
        break;
    case "My experience on Gentoo Musl":
        ?>
        <meta name="description"
            content="My experience on Gentoo musl over a couple weeks as a daily driver. Covering the good and the bad." />
        <meta name="keywords" content="" />
        <?php
        break;
    case "Gentoo Glibc to musl":
        ?>
        <meta name="description" content="How to switch from a Gentoo Glibc install to musl without losing data." />
        <meta name="keywords" content="" />
        <?php
        break;
    case "Communist CBDCs":
        ?>
        <meta name="description" content="Talking about all the cons CBDCs (Central Bank Digital Currencies) will have on our future if we allow them to exist." />
        <meta name="keywords" content="" />
        <?php
        break;
    default:
        ?>
        <meta name="description" content="My personal blog where I talk about Linux, Crypto and other thoughts." />
        <meta name="keywords" content="" />
<?php
}
?>