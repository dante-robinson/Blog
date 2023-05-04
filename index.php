<?php require "./configs/config.php"; ?>

<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="/styles/index.css" />

    <?php
    require "./configs/head.php";
    ?>
</head>

<?php
require "./includes/title.php";
?>

<div class="page-template">
    <div class="page-center-box">
        <div class="page-box">

            <?php
            require "./includes/nav.php";
            ?>

            <div class="page">
                <div>
                    <p class="intro">
                        Thanks for visiting my Blog. You can find a list of my most recent
                        posts to the right or below depending on your screen size, The
                        source code for this blog is fully open-sourced and can be found
                        on my github page which can be found in the footer or clicking
                        <a class="link" href="https://github.com/dante-robinson/Blog">
                            here
                        </a>
                        . The entire code base is licensed under BSD-3-Clause which
                        requires forks to retain the same license however unlike a GPL
                        License the BSD License does not require you to open source your
                        code if you don't want to.
                    </p>
                </div>

                <div class="two-columns">
                    <div class="about-me">
                        <h3>About Me</h3>
                        <p>
                            For those interested I am someone who has always been interested
                            in computers and have used practically everything out there from
                            MXM Upgradable laptops to Dual Socket CPU builds. I have been
                            using computers since a very young age and have acquired a lot
                            of knowledge over this time that I hopefully can share in an
                            easy to read manner on this blog.
                        </p>

                        <p>
                            Politically I lean heavily on the right, if I were to identify
                            myself as a ideology it would be libertarian however I don't
                            agree with everything from any specific party. I rarely vote as
                            I find politicians liars they create the problems then campaign
                            around the solution it's stupid. Polcompball Wiki has a good
                            description and covers likes and dislikes on ideologies if you
                            are unfamiliar which can be found
                            <a class="link" href="https://polcompball.miraheze.org/wiki/Libertarianism">
                                here
                            </a>
                            . For those in the know it should go without saying that
                            economically I lean heavily toward the Austrian school of
                            thought which for those unaware what that means I have provided
                            a comparison to the Keynesian school of thought
                            <a class="link"
                                href="https://www.analyticssteps.com/blogs/what-austrian-economics-austrian-economics-vs-keynesian-economics">
                                here
                            </a>
                            .
                        </p>

                        <p>
                            Based on that it should be no surprise I am interested in
                            Cryptocurrencies based on the original value which is to remove
                            government from money. A lot of people entering the space post
                            2016 I would say are here to make fiat (government money
                            dollars, euros, etc.). I like to read many books and posts
                            online that most would call long/boring about economics and the
                            system. I want to fully understand things before making any
                            opinions, because of this I am very open minded on topics and
                            try to understand every side of things. I also wish to discuss
                            those conclusions here. If you don't understand cryptocurrency
                            or are interested in learning why bitcoin is important vs the
                            altcoins most people buy these days I would strongly suggest
                            reading
                            <b>The Bitcoin Standard by Saifedean Ammous</b>.
                        </p>

                        <p>
                            I am at altruist at the core and believe in giving back more
                            than we receive I hope to give back to others with many
                            different guides on this blogs covering a range of topics. I
                            encourage everyone to give back something to those in need, I
                            have linked 2 awesome youtube channels below on this topic.
                        </p>

                        <div class="recommended-channels">
                            <a class="link" href="https://www.youtube.com/c/BIPhakathi">
                                BIPhakathi
                            </a>

                            <a class="link" href="https://www.youtube.com/channel/UC6lIbuv_ai9ml_B3IVAgxrw">
                                Goodness in People
                            </a>
                        </div>
                    </div>

                    <div class="link-list">
                        <h4>Recent Posts</h4>

                        <ul class="index-posts">
                            <li class="post-list-item">
                                <a class="page-link" href="Crypto/WhatMakesShtcoins">What makes a sh*tcoin</a>
                                <p class="post-date">Mar 09, 2023</p>
                            </li>
                            <li class="post-list-item">
                                <a class="page-link" href="BSD/4MonthsofBSD">4 Months of BSD</a>
                                <p class="post-date">Mar 03, 2023</p>
                            </li>
                            <li class="post-list-item">
                                <a class="page-link" href="Crypto/CommunistCBDC">Communist CBDCs</a>
                                <p class="post-date">Jan 11, 2023</p>
                            </li>
                            <li class="post-list-item">
                                <a class="page-link" href="Crypto/XRPXLMScam">XRP & XLM The biggest scams</a>
                                <p class="post-date">Oct 7, 2022</p>
                            </li>
                            <li class="post-list-item">
                                <a class="page-link" href="Linux/GentooGlibctomusl">Switching Gentoo Glibc to
                                    musl</a>
                                <p class="post-date">Sept 26, 2022</p>
                            </li>
                            <li class="post-list-item">
                                <a class="page-link" href="Linux/Gentoomusl">My experience using Gentoo
                                    Musl</a>
                                <p class="post-date">Sept 16, 2022</p>
                            </li>
                            <li class="post-list-item">
                                <a class="page-link" href="Linux/SecurityGuide">Linux Security Guide</a>
                                <p class="post-date">Feb 13, 2022</p>
                            </li>
                            <li class="post-list-item">
                                <a class="page-link" href="Linux/PerformanceGuide">
                                    Linux Performance Tweaks Guide</a>
                                <p class="post-date">Oct 30, 2021</p>
                            </li>
                            <li class="post-list-item">
                                <a class="page-link" href="Linux/ArchGuide">Arch Linux Install Guide</a>
                                <p class="post-date">Oct 30, 2021</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="note">
                    <p>
                        * All opinions on this blog are my own you are more than welcome
                        to disagree with anything.
                    </p>
                </div>
            </div>

            <?php
            require "./includes/footer.php";
            ?>

        </div>
    </div>
</div>

</html>