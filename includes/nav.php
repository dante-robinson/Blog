<nav>
    <ul class="nav-ul">
        <li class="nav-li">
            <button class="LinuxModalButton">Linux</button>
            <div class="LinuxModal hidden">
                <?php
                if ($CURRENT_PAGE == "Index") {
                    include "./includes/Modals/LinuxModal.php";
                } else {
                    include "../includes/Modals/LinuxModal.php";
                }
                ?>
            </div>
        </li>

        <li class="nav-li">
            <button class="CryptoModalButton">Crypto</button>
            <div class="CryptoModal hidden">
                <?php
                if ($CURRENT_PAGE == "Index") {
                    include "./includes/Modals/CryptoModal.php";
                } else {
                    include "../includes/Modals/CryptoModal.php";
                }
                ?>
            </div>
        </li>

        <li class="nav-li">
            <button class="BSDModalButton">BSD</button>
            <div class="BSDModal hidden">
                <?php
                if ($CURRENT_PAGE == "Index") {
                    include "./includes/Modals/BSDModal.php";
                } else {
                    include "../includes/Modals/BSDModal.php";
                }
                ?>
            </div>
        </li>
</ul>
</nav>
<script type="text/javascript" src="/scripts/NavModal.js"></script>
