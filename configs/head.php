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
    <?php 
        global $PAGE_TITLE;        
        print $PAGE_TITLE; ?>
</title>

<!-- Each page will need it's own case statement -->

<?php
global $CURRENT_PAGE;

switch ($CURRENT_PAGE) {
    case "Arch Linux Install Guide":
        ?>
        <meta name="description" content="Arch Linux Install Guide." />
        <meta name="keywords" content="Arch Linux, Install, Guide, easy" />
        <?php
        break;
    case "Linux Performance Guide":
        ?>
        <meta name="description" content="Various tweaks and modifications that can be used to increase the performance of your Linux based system." />
        <meta name="keywords" content="Linux, Performance, tweaks, guide" />
        <?php
        break;
    case "Linux Security Guide":
        ?>
        <meta name="description" content="A collection of detailed hardening tweaks for your Linux Server or desktop with detailed explanations of each change. This guide does not include Networking Security tweaks." />
        <meta name="keywords" content="Linux, Security, Guide" />
        <?php
        break;
    case "XRP & XLM The biggest scams in Crypto":
        ?>
        <meta name="description"
            content="A simple blog post covering why the tokens XRP and XLM are a scam and should be avoided." />
        <meta name="keywords" content="XRP, XLM, Ripple, Stellar, Scam, Crypto" />
        <?php
        break;
    case "My experience on Gentoo Musl":
        ?>
        <meta name="description"
            content="My experience on Gentoo musl over a couple weeks as a daily driver. Covering the good and the bad." />
        <meta name="keywords" content="Gentoo, musl, review" />
        <?php
        break;
    case "Gentoo Glibc to musl":
        ?>
        <meta name="description" content="How to switch from a Gentoo Glibc install to musl without losing data." />
        <meta name="keywords" content="musl, glibc, Gentoo, switch" />
        <?php
        break;
    case "Communist CBDCs":
        ?>
        <meta name="description" content="Talking about all the cons CBDCs (Central Bank Digital Currencies) will have on our future if we allow them to exist." />
        <meta name="keywords" content="CBDC, CBDCs, Central Bank, Digital Currencies, Digital Currency, Crypto, Bitcoin, Free Money" />
        <?php
        break;
    case "4 Months of BSD":
        ?>
        <meta name="description" content="Discussing my past 4 months of daily driving various BSDs." />
        <meta name="keywords" content="FreeBSD, OpenBSD, NetBSD, DragonFlyBSD, review, recommend, recommendation, easiest, easy" />
        <?php
        break;
    case "What makes a sh*tcoin":
        ?>
        <meta name="description" content="How to spot a sh*tcoin. This post covers the many things most sh*tcoins tend to follow so you can decide for yourself if it's worth investing in." />
        <meta name="keywords" content="Bitcoin, Shitcoin, Crypto, Scam, Cardano, Ethereum" />
        <?php
        break;
    case "How to run a Bitcoin Node on OpenBSD":
        ?>
        <meta name="description" content="A simple guide on setting up a fresh computer to be running OpenBSD and acting as a full Bitcoin Node. This guide covers setting RPC as well as setting up TOR if desired." />
        <meta name="keywords" content="Bitcoin, Crypto, Node, decentralized, Full Node, OpenBSD" />
        <?php
        break;
    default:
        ?>
        <meta name="description" content="My personal blog where I talk about Linux, Crypto and other thoughts." />
        <meta name="keywords" content="Dante, Robinson, Blog, Crypto, Bitcoin, Linux, BSD" />
<?php
}
?>
