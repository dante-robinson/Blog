<!-- Add all new page titles here -->
<?php
switch ($_SERVER["SCRIPT_NAME"]) {
    case "/Linux/ArchGuide.php":
        $CURRENT_PAGE = "Arch Linux Install Guide";
        $PAGE_TITLE = $CURRENT_PAGE;
        break;
    case "/Linux/PerformanceGuide.php":
        $CURRENT_PAGE = "Linux Performance Guide";
        $PAGE_TITLE = $CURRENT_PAGE;
        break;
    case "/Linux/SecurityGuide.php":
        $CURRENT_PAGE = "Linux Security Guide";
        $PAGE_TITLE = $CURRENT_PAGE;
        break;
    case "/Crypto/XRPXLMScam.php":
        $CURRENT_PAGE = "XRP & XLM The biggest scams in Crypto";
        $PAGE_TITLE = $CURRENT_PAGE;
        break;
    case "/Linux/Gentoomusl.php":
        $CURRENT_PAGE = "My experience on Gentoo Musl";
        $PAGE_TITLE = $CURRENT_PAGE;
        break;
    case "/Linux/GentooGlibctomusl.php":
        $CURRENT_PAGE = "Gentoo Glibc to musl";
        $PAGE_TITLE = $CURRENT_PAGE;
        break;
    case "/Crypto/CommunistCBDC.php":
        $CURRENT_PAGE = "Communist CBDCs";
        $PAGE_TITLE = $CURRENT_PAGE;
        break;
    case "/BSD/4MonthsofBSD.php":
        $CURRENT_PAGE = "4 Months of BSD";
        $PAGE_TITLE = $CURRENT_PAGE;
        break;
    case "/Crypto/WhatMakesShtcoins.php":
        $CURRENT_PAGE = "What makes a sh*tcoin";
        $PAGE_TITLE = $CURRENT_PAGE;
        break;
    default:
        $CURRENT_PAGE = "Index";
        $PAGE_TITLE = "Dante's Blog";
}
?>
