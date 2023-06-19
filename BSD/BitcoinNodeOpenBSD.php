<?php include("../configs/config.php"); ?>

<!DOCTYPE html>

<html>

<head>
  <?php include("../configs/head.php"); ?> 
</head>

<?php include("../includes/title.php"); ?>

<div class="page-template">
  <div class="page-center-box">
    <div class="page-box">
      <?php include("../includes/nav.php"); ?>

      <div class="page">
        <body>
          <p class="post-date">Jun 19, 2023</p>

          <h2 class="post-title">How to run a Bitcoin Node on OpenBSD</h2>

          <div class="table-of-contents-container">
            <a class="table-of-contents-item" href="#why">Why?</a><br />
            <a class="table-of-contents-item" href="#alt">Alternatives</a><br />
            <a class="table-of-contents-item" href="#install">Installing OpenBSD</a><br />
            <a class="table-of-contents-item" href="#setup">Setup Node</a><br />
            <a class="table-of-contents-item" href="#tor">TOR (Optional)</a><br />
            <a class="table-of-contents-item" href="#done">Done!</a>
          </div>

          <h3 class="header">
            <a id="why">Why?</a>
          </h3>

          <p>
            2 Questions, why run a node? and why OpenBSD? To answer the first 
            question running a node does not pay you any money, you are merely
            supporting the network in staying more decentralized. Running a node
            also gives you a vote over future updates on the network, Nodes need
            to upgrade to the latest version for the change to be implemented on 
            chain else it is scraped after a few months of trying and a new upgrade 
            is launched. If you don't understand the technicality behind things 
            maybe it's best to not run a node or at the very least not upgrade 
            your node without reading lots on the new changes in an update and 
            consulting with others opinions on forums. Why OpenBSD? OpenBSD is 
            a very niche OS with a focus on security and clean code it is less
            likely to be attacked with some bug unlike a Linux distro. We are
            using it here for security purposes.
          </p>

          <h3 class="header">
            <a id="alt">Alternatives</a>
          </h3>

          <p>
            There are many easier solutions to running a full node such as things
            like raspiblitz or umbrel. These solutions both lock you into a Linux
            OS and limit what you can do with the system in terms of add-ons.
            They are both easier to use than this solution however and using any
            extra add-ons like BTCPay Server will be much simpler to configure, I
            will leave links to both of these solutions down below (Of course 
            raspiblitz on works on a Raspberry Pi).
          </p>

          <a href="https://umbrel.com/" class="link">https://umbrel.com/</a>
          <a href="https://raspiblitz.org/" class="link">https://raspiblitz.org/</a>

          <h3 class="header">
          <a id="install">Installing OpenBSD</a>
          </h3>

          <p>
            I'm not going to cover every little detail for how to install OpenBSD,
            it should be pretty straight forward like any other OS. Download the
            ISO/IMG file from the OpenBSD website (listed below) and burn it to 
            a USB/Disc with the program of your choice then boot it (usually
            selecting it in the BIOS but ARM can differ). Most likely you will
            want to use the amd64 image unless you know you are using and arm/riscv
            SOC or your computer is super old and you need macppc (old macs usually,
            like pre 2005 G5 and earlier) or i386 (I think i486 and i586 should
            also work on the i386 image as well these are for PCs pre-1999), i686
            should work on amd64 image as they support 64 bit. For these old PCs
            I would recommend not running a node in general but you can always
            use it as a test to learn or see how well it works before shelling
            out money on more modern hardware (Literally anything since BTC is
            so lightweight).
          </p>

          <a href="https://www.openbsd.org/faq/faq4.html#Download" class="link">
          https://www.openbsd.org/faq/faq4.html#Download
          </a>

          <p>
            The only real options you want to actually change are going to be 
            sshd and xenodm. sshd will allow you to remote into the pc over the 
            ssh protocol and will need to be hardened and adds a layer of potential
            access point for attackers (obviously). The other option xenodm is 
            basically your Xorg (X11) server on OpenBSD, Bitcoin doesn't need a
            GUI to work so we can set this to 'no' and do everything in the terminal. 
            Feel free to enable xenodm (it runs FVWM by default) you may want to 
            install a better DE/WM (Desktop Environment/Window Manager) if you 
            go that route.
          </p>

          <p>
            I just named my user a basic name like bitcoin and did all the other 
            default settings in my OpenBSD install. After you reboot into your 
            installed OpenBSD system you will need to login as root and configure
            doas which is basically like OpenBSD's version of sudo.
          </p>

          <blockquote class="blockquote">
            <p>
              vi /etc/doas.conf
            </p>
          </blockquote>

          Yes I know you probably want to use vim we will install it in a second.
          You will need to press 'i' to enable insert mode and type exactly the 
          text below.

          <blockquote class="blockquote">
            <p>
              permit persist :wheel
            </p>
          </blockquote>

          <p>
            vi unlike vim it a little different to delete a typo u need to move 
            the cursor back to the letter and type a new one or start over by 
            pressing escape and ':q'. Once you have the text proper you can save
            and close vi by pressing escape and running ':wq'.
          </p>

          <p>
            Now we can exit the root user simply by running the command 'exit'.
            Next we can login to the user we created and start installing packages.
          </p>

          <h3 class="header">
            <a id="setup">Setup Node</a>
          </h3>

          <p>
            First let's install vim to make editing future files easier by running
          </p>

          <blockquote class="blockquote">
            <p>
              doas pkg_add vim
            </p>
          </blockquote>

          <p>
           Next we have 2 ways of installing the actual bitcoin node software
           the first way is to install it directly using the OpenBSD pkg system.
           This version will be outdated and in theory could contain a different
           version of the node than what you think you are running (unlikely).
           The first issue of being outdated is due to being on on OpenBSD release
           this issue can be solved by switching to current which you can do if 
           you want to by running the following. I have also added a link to read 
           about -current more as it is a dev build and could have bugs. Please
           read before upgrading as you can't go back without a full reinstall.
          </p>

          <blockquote class="blockquote">
            <p>
              doas sysupgrade -s
            </p>
          </blockquote>

          <a class="link" href="https://www.openbsd.org/faq/current.html">
          https://www.openbsd.org/faq/current.html
          </a>

          <h4 class="small-header">
            Installing the Bitcoin package (Method 1)
          </h4>

          <p>
            This is obviously the easier and is really the recommended way in my 
            opinion, this way is pretty simple you just need to run the following
          </p>

          <blockquote class="blockquote"> 
            <p>
            doas pkg_add bitcoin
            </p>
          </blockquote>

          <p>
            You can select either option but since we don't have an X Server 
            installed it's better to select the no-x11 option. As for setup you 
            can skip to the next section.
          </p>

          <h4 class="small-header">
            Installing Bitcoin from source (Method 2)
          </h4>

          <p>
            First of all we are going to need git we can install that by running 
          </p>

          <blockquote class="blockquote">
            <p>
              doas pkg_add git
            </p>
          </blockquote>

          <p>
            Then we can clone the repo
          </p>

          <blockquote class="blockquote">
            <p>
              git clone https://github.com/bitcoin/bitcoin
            </p>
          </blockquote>

          <p>
            After this finishes we can move into the directory with the 'cd'
            command by running 'cd bitcoin'. Next we are going to want to install 
            all the build dependencies. The reason why we don't need these with 
            the binary package is because you are not needing to build the code 
            yourself your just downloading the application basically, to build 
            the code we need the tools to read the code if that makes sense...
          </p>

          <blockquote class="blockquote">
            <p>
              doas pkg_add bash git gmake libevent libtool boost autoconf automake python sqlite3
            </p>
          </blockquote>

          <p>
          You will want to select the latest version for each of those packages.
          After this we will need to setup a few environment variables for things
          like autoconf and automake. We can do this by running
          </p>

          <blockquote class="blockquote">
            <p>
              export AUTOCONF_VERSION=2.71<br />
              export AUTOMAKE_VERSION=1.16
            </p>
          </blockquote>

          <p>
            These version will vary you don't need to enter the entire version, 
            just the first decimal place. After that is setup we can run
          </p>

          <blockquote class="blockquote">
            <p>
              ./autogen.sh
            </p>
          </blockquote>

          <p>
            After it that we can make our configuration of the code we want tor
            compile into the software in our case we want to have no GUI, so we 
            can run
          </p>

          <blockquote class="blockquote">
            <p>
              ./configure --with-gui=no MAKE=gmake
            </p>
          </blockquote>

          <p>
            After the configure command finishes you can just simply run 'gmake'
            to compile the program. If your familiar with compiling you can speed
            this up by adding -j to the command followed by a space and the number
            of CPU Threads you have. If you have any issues with compiling it 
            could be due to OpenBSD default ulimit restricitons to solve this 
            you can run
          </p>

          <blockquote class="blockquote">
            <p>
              doas usermod -G staff your-username
            </p>
          </blockquote>

          <p>
            This will add your user to the staff group which has a higher ulimit
            by default you will need to logout with 'exit' and then login again
            open a new terminal and only need to 'cd bitcoin' again then you can 
            just retry the 'gmake' command. If you still are getting issues you
            can temporarly raise the ulimit higher by running 
          </p>

          <blockquote class="blockquote">
            <p>
              doas ulimit -d 3000000
            </p>
          </blockquote>

          <h4 class="small-header">
            bitcoin.conf
          </h4>

          Now you just need to really focus on the last part, which is the config 
          itself. I will cover adding tor later which will require further mods 
          to this file. For starters lets return back to the home directory by 
          running 'cd'. From here we are going to copy the default config to our 
          user directory running 

          <blockquote class="blockquote">
            <p>
              mkdir .bitcoin && cp /etc/bitcoin.conf .bitcoin/
            </p>
          </blockquote>

          <p>
            This will make the .bitcoin directory in our home folder and then put
            the .conf file inside, next we can run vim to edit the file by running
          </p>

          <blockquote class="blockquote">
            <p>
              vim .bitcoin/bitcoin.conf
            </p>
          </blockquote>

          <p>
            Once inside we can press "/" to search through the document. For each
            item we edit we want to remove the # in front of that line. I am going
            to provide a list below of the items and the values for them that 
            should be set, to find them easier just type in that items name and
            the = sign and it should go to that item u can then press esacpe and
            then like usual 'i' to edit the file. After changing said item press
            escape and the press '/' to start search the next item.
          </p>

          <p>
            <b>
              assumevalid=0<br />
              blockonly=0<br />
              txindex=1<br />
              discover=1<br />
              dns=0<br />
              dnsseed=0<br />
              listen=1
            </b>
          </p>

          <p>
            That's it you can now exit vim like before with ':wq' and run 'bitcoind'
            whenever you start this PC to run a full node and setup some autostart
            script if you wanted to as well. Once you start bitcoind you can press
            Control+Alt+F2 to move to another TTY and u can login to root or the
            same user running bitcoind and then run the command 'bitcoin-cli 
            -netinfo'. This spits out a local address and port for you to double
            check the node is running you can check this at bitnodes the link issue 
            below.
          </p>

          <a class="link" href="https://bitnodes.io/">https://bitnodes.io/</a>

          <p>
            From there input the address the bitcoin-cli gives you and the port, 
            if you have issues connecting it could be because you need to port 
            trigger or port forward the ports 8333 and 8332 on your router to be
            open however that is beyond the scope of this guide. I personally 
            like to reopen the config file and set the value for 'externalip' to 
            match the ip listen and then add ':' after the IP and add the port 
            just to ensure it's running the same IP every launch. If you plan to 
            use tor don't do this step now wait until you are given a .onion later 
            and then you can paste it there. If you are looking to run a lightning
            node you will need a full node to connect to over RPC which we didn't
            setup. I would recommend not running a lightning node on the same 
            computer but that's up to you, I will have another guide to setup 
            lightning nodes on OpenBSD coming soon.
          </p>

          <h4 class="small-header">
            RPC (Optional unless you want to run a Lightning Node)
          </h4>

          <p>
            If you don't plan on using a lightning node I would recommend not 
            even bothering to set this up. For those that wish to continue we 
            use RPC to basically remotely connect to the node over our LAN (Local 
            Area Network). This can even be run with a node running on TOR (minor
            inconvience noted in TOR section), and is pretty easy to setup. Let's 
            start by stopping our node by going back to TTY1 pressing 
            Control+Alt+F1 and then pressing Control+C Then we can reopen the 
            config file by running
          </p>

          <blockquote class="blockquote">
            <p>
              vim .bitcoin/bitcoin.conf
            </p>
          </blockquote>

          <p>
            So same thing as before I will provide a list with values and you can 
            use '/' to search and 'i' to edit remember to use the escape key each
            time to exit modes and don't forget to remove the # before each edited
            line. For the localip is rpcbind this is different than the IP given 
            from bitcoin-cli. That IP is like a public IP we want to use our local 
            router given IP here as we don't want people outside being able to 
            login. To get this value run 'ifconfig | grep inet' you may see a 
            bunch of inet6 lines ignore those we want just inet lines. The first 
            line will probably be 127.0.0.1 this just means localhost and is 
            used to run things on our machine only so we don't want that one.
            rpcpassword and rpcusername can be whatever you choose.
          </p>

          <p>
            <b>
              rpcallowip=0.0.0.0\0<br /> 
              rpcbind=localip:8332<br />
              rpcpassword=somepassword<br />
              rpcport=8332<br />
              rpcuser=someusername<br />
              server=1
            </b>
          </p>

          <p>
            That's it now you can just restart 'bitcoind' and RPC will run. You 
            can login into the RPC on another pc with bitcoin installed using the 
            rpc commands which I will touch on more in the Lightning Guide.
          </p>

          <h3 class="header">
            TOR (Optional)
          </h3>

          <p>
            Running TOR is pretty simple but we do need to add a few packages and
            edit some TOR configuration files. Let's start by adding the tor 
            packages.
          </p>

          <blockquote class="blockquote">
            <p>
              doas pkg_add tor torsocks
            </p>
          </blockquote>

          <p>
            After this we can start by editing the tor config by running
          </p>

          <blockquote class="blockquote">
            <p>
              doas vim /etc/tor/torrc 
            </p>
          </blockquote>

          <p>
            For this file you want to try search with '/' but not all the commands 
            will show up and will just need to be added manually to a blank line 
          </p>

          <p>
            <b>
              ControlPort 9051<br />
              CookieAuthentication 1<br />
              CookieAuthFileGroupReadable 1<br />
              DataDirectoryGroupReadable 1
            </b>
          </p>

          <p>
            After these settings are set we want to run the following 2 commands
            to start tor and enable it to autostart on each install.
          </p>

          <blockquote class="blockquote">
            <p>
              doas rcctl enable tor<br />
              doas rcctl start tor
            </p>
          </blockquote>

          <p>
            Next thing we need to do is go back and edit the bitcoin.conf again 
            by running
          </p>

          <blockquote class="blockquote">
            <p>
              vim .bitcoin/bitcoin.conf
            </p>
          </blockquote>

          <p>
            <b>
              bind=127.0.0.1<br />
              proxy=127.0.0.1:9050
            </b>
          </p>
          
          <p>
            Lastly we need to add the user to the _tor group and set the right
            permissions the the directory. We can do that by running
          </p>

          <blockquote class="blockquote">
            <p>
              doas usermod -G _tor user<br />
              doas chown -R _tor /var/lib/tor 
            </p>
          </blockquote>

          <p>
            You will need to type 'exit' to logout of the user and log back in 
            again for the group to take affect or you will get an error. After
            this you can run 'bitcoind' and it should load through tor now and 
            when running your bitcoin-cli command you will need to use the rpc 
            commands to get the address. The line will look something like 
            'bitcoin-cli -netinfo -rpcuser=Username -rpcpassword=Password -rpcconnect=IP-from-ifconfig -rpcport=8332'.
            This should give you a .onion IP address which you can use to check
            on bitnodes like before and add it to your 'externalip' setting in 
            bitcoin.conf if you wish (recommended so the address doesnt change).
          </p>

          <p>
            If you don't plan to use RPC at all to connect a Lightning Node you 
            can setup OpenBSD pf module to block all connections that aren't through 
            tor (you will need to disable this by adding # to each line when wanting
            to update the system and/or updating packages). This can be done by 
            running
          </p>

          <blockquote class="blockquote">
            <p>
              doas vim /etc/pf.conf
            </p>
          </blockquote>

          <p>
          Inside of pf.conf you can delete everything by entering 'dd' twice to 
          delete the current line until the file is empty. After this make <thead>
          file look like this
          </p>

          <blockquote class="blockquote">
            <p>
              set skip on lo<br />
              <br />
              # block OUT traffic<br />
              block out<br />
              <br />
              # block IN traffic and allow response to our OUT requests<br />
              block return<br />
              <br />
              # allow TCP requests made by _tor user<br />
              pass out on egress proto tcp user _tor
            </p>
          </blockquote>

          <p>
            You can of course just avoid typing the lines with a '#' in front. 
            The # means these lines are "commented out" and will not be read. 
            Then we just need to restart pf by running 'pfctl -f /etc/pf.conf'
            and that's it no more outside connections. Again only do this step 
            if you don't plan on using RPC as it won't work doing this step. You
            should also change 'discover' to 0 in your bitcoin.conf for added 
            security if you choose to go this route.
          </p>

          <h3 class="header">
            <a id="done">Done!</a>
          </h3>

          <p>
            That's it you are officially supporting Free and Open Source money 
            and are running the backbone of the network, literally. Running 
            multiple nodes on the same IP doesn't help the network so from here
            if you want to contribute further to bitcoin consider running a 
            lightning node which is a layer 2 protocol running ontop of Bitcoin
            or start educating others to perhaps learn more about Bitcoin and
            hopefully they to will contribute to the network by running a 
            node.
          </p>

          <p>
            For those interested in running more things on their node like being 
            able to connect to sparrow or electrum wallet or other things like 
            BTCPay Server, Coinjoin, Whirlpool, etc. will need to look elsewhere
            online as they are beyond the scope of this guide. They should be as
            simple as git cloning the repo and building the package and then you 
            may need to run that program (daemon) in a separate TTY. You can change
            to multiple TTYs by just pressing Control+Alt+F(Number) F1, F2, F3, 
            etc.
          </p>
        </body>
      </div>
      
      <?php include("../includes/footer.php");?>

    </div>
  </div>
</div>

</html>