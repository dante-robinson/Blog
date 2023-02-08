<?php include("../configs/config.php"); ?>

<!DOCTYPE html>

<html>

<head>
  <?php
  include("../configs/head.php");
  ?>
</head>

<?php
include("../includes/title.php");
?>

<div class="page-template">
  <div class="page-center-box">
    <div class="page-box">
      <?php
      include("../includes/nav.php");
      ?>

      <div class="page">
        <p class="post-date">Oct 30, 2021</p>

        <h2 class="post-title">Arch Linux Install Guide</h2>

        <h3 class="table-of-contents-header">Table of Contents</h3>

        <div class="table-of-contents-container">
          <a class="table-of-contents-item" href="#format">Formatting the Drive</a><br />
          <a class="table-of-contents-item" href="#btrfs">BTRFS Subvolumes and Mounting</a><br />
          <a class="table-of-contents-item" href="#ext4">EXT4 Mounting</a><br />
          <a class="table-of-contents-item" href="#xfs">XFS Mounting</a><br />
          <a class="table-of-contents-item" href="#fstab">Mounting Boot and setting up FSTAB</a><br />
          <a class="table-of-contents-item" href="#timezone">Setting Timezone and Locales</a><br />
          <a class="table-of-contents-item" href="#hosts">Setting up localhost and hosts</a><br />
          <a class="table-of-contents-item" href="#gpu">Installing GPU Driver</a><br />
          <a class="table-of-contents-item" href="#initramfs">Initramfs Setup</a><br />
          <a class="table-of-contents-item" href="#user">Creating the user</a><br />
          <a class="table-of-contents-item" href="#systemd">Enabling systemd Startups</a><br />
          <a class="table-of-contents-item" href="#desktop">Installing a Desktop</a><br />
          <a class="table-of-contents-item" href="#extra">Extra Junk</a>
        </div>

        <body>
          <p>Welcome to my personal Arch Linux Build Setup this is somewhat of a personal run through of how I have my
            main system setup but more of an install guide so let’s get started.
            I have been running Arch since 2018 and it was my first distro, after multiple wacky installs to get
            something
            working and messing stuff up and needing to reinstall. I have
            learned what I personally like along the way and and making a write up on that as well as some other ways to
            install I have personally run to give an understanding to anyone reading.
            I have since tried many other Distros over the years such as popOS, Mint, Ubuntu, Debian, Artix, MX, Fedora,
            Manjaro and Elementary. However I keep coming back to Arch for just the
            sheer amount of packages (AUR) and how easy it is to use (learning curve aside of course). *Switched to
            Gentoo
            now as I am wanting more control over my system that Arch won't allow.</p>
          <p>To make this guide less complex I have not added any encryption or LVM instructions if you are looking for
            that please check out this guide - <a class="link"
              href="https://www.coded-with-love.com/blog/install-arch-linux-encrypted/">
              https://www.coded-with-love.com/blog/install-arch-linux-encrypted/</a></p>

          <p>You can find the raw version of this guide on github here
            - <a class="link"
              href="https://gist.github.com/dante-robinson/fdc55726991d3f17e0dbef1701d343ef">https://gist.github.com/dante-robinson/fdc55726991d3f17e0dbef1701d343ef</a>
          </p>

          <h3 class="header">Formatting the Drive <a id="format"></a></h3>

          <p>First of all you should understand how Linux reads drives already if you run the command</p>

          <blockquote class="blockquote">
            <p>
              ls /dev
            </p>
          </blockquote>

          <p>you should look for the drive you want to install sata drives will be labeled Sd(x) and nvme drives will be
            labeled nvme0n(x) with the x being the number or letter of the drive usually
            sda or nvme0n1. If you have multiple drives this is easy to figure out to if your familiar with how
            partitions
            are labeled already you should tell which drive you need already if not run </p>

          <blockquote class="blockquote">
            <p>
              cfdisk /dev/sd(x) or cfdisk /dev/nvme0n(x)
            </p>
          </blockquote>

          <p>on the drive you think you need. You should see the size of the partitions listed if the size doesn’t match
            up to your drive size that you are looking to install on just quit and try the next
            drive until you find the one you need for me its nvme0np1 so I will run </p>

          <blockquote class="blockquote">
            <p>
              cfdisk /dev/nvme0n1
            </p>
          </blockquote>

          <p>I then delete all the partitions on the drive and over the free space I do New and I type 1G for my boot
            partition and then select Type and set it to EFI System. I then move down to the free
            space item again and select new and select the rest of my drive whatever the partition size it gives me
            after
            that just select write and then you can quit the program.</p>

          <p>I don’t run a Swap Partition as I can always create a .swapfile later on off the root partition and resize
            it
            to my liking. However I prefer to not create swapfiles due to the fact that they
            are slow and really hammer on your drive. If you have really low amounts of ram like 2GB then you should
            look
            at making a swapfile but the likely fact is anyone running that low of ram is most
            likely running on a HDD not an SSD so swap will be even slower for them. Basically swap will allow you to
            use
            more ram by using space on the drive you assign in the case that you need it.</p>

          <p>People also tend to like to create a separate partition for their /home folder, It can be annoying when
            installing applications and needing more storage on my root and having majority
            dedicated to /home so I don’t do it however if you do a /home partition some advantages are being able to
            move
            from Distro to Distro and just manual partition the installs to use that /home
            you already have so all your games and stuff are already there, and if your system becomes corrupt your data
            “should” be safe on the separate partition.</p>

          <p>You can see the new partitions by running</p>

          <blockquote class="blockquote">
            <p>
              lsblk
            </p>
          </blockquote>

          <p>if you have a SATA Drive you should see sda1 and sda2 for example. In my case I have nvme0n1p1 and
            nvme0n1p2
            this is how linux lists partitions off drives pretty straight forward.</p>

          <p>This is pretty simple to do we can encrypt our root partition by running</p>

          <blockquote class="blockquote">
            <p>
              cryptsetup luksFormat /dev/nvme0n1p2
            </p>
          </blockquote>

          <p>of course swap <b>/dev/nvme0n1p2</b> out with where your drives partition is.</p>

          <p>Now we need to put some file systems on the drives for the keep the order of the partitions in your head as
            you will need to remember which partition is for which FS. In this case I have
            my first partition set to be my boot directory so I’m going to format it to FAT32 by running</p>

          <blockquote class="blockquote">
            <p>
              mkfs.fat -F32 /dev/nvme0n1p1
            </p>
          </blockquote>

          <p>just change the nvme0n1p1 to whatever drive and partition you are using such as sda1. Next I format my last
            partition to BTRFS now this is just what I am running at the moment I used to
            run XFS but have switched over to this for snapshots. If your new I recommend running EXT4 while XFS does
            tend
            to be slightly faster in my use case some games like WoW didn't work on it so
            it’s best to just stick to EXT4 here so your not making separate partitions in EXT4 for some games lol.
            BTRFS
            doesn’t have this issue in my use so far. If you want to read more I have some links here for each.</p>

          <p><b>BTRFS</b> - <a class="link"
              href="https://wiki.archlinux.org/title/Btrfs">https://wiki.archlinux.org/title/Btrfs</a></p>

          <p><b>EXT4</b> - <a class="link"
              href="https://wiki.archlinux.org/title/Ext4">https://wiki.archlinux.org/title/Ext4</a></p>

          <p><b>XFS</b> - <a class="link"
              href="https://wiki.archlinux.org/title/XFS">https://wiki.archlinux.org/title/XFS</a></p>

          <p>To format to <b>BTRFS</b> run</p>

          <blockquote class="blockquote">
            <p>
              mkfs.btrfs /dev/nvme0n1p2
            </p>
          </blockquote>

          <p>If your going to run <b>XFS</b> or <b>EXT4</b> its pretty similar</p>

          <blockquote class="blockquote">
            <p>
              mkfs.xfs /dev/nvme0n1p2
            </p>
          </blockquote>

          <p>or</p>

          <blockquote class="blockquote">
            <p>
              mkfs.ext4 /dev/nvme0n1p2
            </p>
          </blockquote>

          <p>and that’s the partitions finished off if your running a similar setup to me If you made a separate
            partition
            for your /home directory just run the ame command on that partition unless your running
            BTRFS then format your home partition to something else like XFS or EXT4. If you created a swap partition
            you
            will need to run</p>

          <blockquote class="blockquote">
            <p>
              mkswap /dev/nvme0n1p(x)<br />
              <br />
              swapon /dev/nvme0n1p(x)
            </p>
          </blockquote>

          <p>on your partition you want for swap most likely the x will be 3 in this case but your mileage may vary. If
            you are making a swapfile I will show you how to make that in my Arch Tweaks gist.</p>

          <h3 class="header">BTRFS Subvolumes and Mounting <a id="btrfs"></a></h3>

          <p>Alright if your running btrfs then you will need to follow these steps before continuing to create your
            snapshots, if your running XFS or EXT4 skip this Section.</p>

          <p>First I mount my btrfs partition by running</p>

          <blockquote class="blockquote">
            <p>
              mount /dev/nvme0n1p2 /mnt
            </p>
          </blockquote>

          <p>Now we can create the subvolumes on the /mnt directory by running</p>

          <blockquote class="blockquote">
            <p>
              btrfs su cr /mnt/@<br />
              <br />
              btrfs su cr /mnt/@var<br />
              <br />
              btrfs su cr /mnt/@opt<br />
              <br />
              btrfs su cr /mnt/@tmp<br />
              <br />
              btrfs su cr /mnt/@snapshots
            </p>
          </blockquote>

          <p>if you didn’t create a separate /home partition then run if you did make a separate partition I will get to
            you later on don’t worry about it for now.</p>

          <blockquote class="blockquote">
            <p>
              btrfs su cr /mnt/@home
            </p>
          </blockquote>

          <p>Then we can unmount the partition by running</p>

          <blockquote class="blockquote">
            <p>
              umount /mnt
            </p>
          </blockquote>

          <p>So basically su is short form for the subvol command and you can also use sub and the cr command is short
            form for create again pretty straight forward just saving some time.</p>

          <p>The subvolumes meanings</p>

          <p>
            <b>@</b> - Root<br />
            <b>@home</b> - Home Directory<br />
            <b>@var</b> - Logs,some temp. files, caches etc.<br />
            <b>@opt</b> - Add-on packages<br />
            <b>@tmp</b> - Main temporary files location<br />
            <b>@snapshots</b> - snapper will store your BTRFS Snapshots here if not using snapper this partition is not
            needed
          </p>

          <p>So now we need to mount the partition as subvolumes… you can do so by running these commands and we might
            as
            well setup the fstab while we are here.</p>

          <blockquote class="blockquote">
            <p>
              mount -o noatime,commit=120,space_cache=v2,subvol=@ /dev/nvme0n1p2 /mnt<br />
              <br />
              mkdir /mnt/{"{boot,home,var,opt,tmp,snapshots}"}<br />
              <br />
              mount -o noatime,commit=120,space_cache=v2,subvol=@opt /dev/nvme0n1p2 /mnt/opt<br />
              <br />
              mount -o noatime,commit=120,space_cache=v2,subvol=@tmp /dev/nvme0n1p2 /mnt/tmp<br />
              <br />
              mount -o noatime,commit=120,space_cache=v2,subvol=@snapshots /dev/nvme0n1p2 /mnt/snapshots<br />
              <br />
              mount -o subvol=@var /dev/nvme0n1p2 /mnt/var<br />
            </p>
          </blockquote>

          <p>and then again if you don’t have a /home partition then run this also</p>

          <blockquote class="blockquote">
            <p>
              mount -o noatime,commit=120,space_cache=v2,subvol=@home /dev/nvme0n1p2 /mnt/home
            </p>
          </blockquote>

          <p>you may need to change the /dev/nvme0n1 command to your specific partition if not using an NVME drive setup
            the same way I have mine.</p>

          <p><b>mount</b> – the -o just means options when using mount and these are the options we are using</p>

          <p><b>noatime</b> – basically improves performance by not writing the time the file was last accessed</p>

          <p><b>commit</b> – the time in seconds it takes for the data to be synchronized to storage set at 120 seconds
            here so if you lose power or crash any data within the
            last 2 minutes will be probably be lost feel free to change this.</p>

          <p><b>compress</b> – by not listing compress this sets my compression to none. You can use whatever
            compression
            method you prefer, the better the compression method the less space files will take on
            the drive leaving more space for other things. However this will affect the drive speeds as you can see in
            the
            benchmark here
            <a class="link" href="https://www.reddit.com/r/btrfs/comments/hyra46/benchmark_of_btrfs_decompression/">-
              https://www.reddit.com/r/btrfs/comments/hyra46/benchmark_of_btrfs_decompression/</a><br />
            If you want to add compression just add ",compress=type" where type is the method you want for example lzo.
            Make sure you add the comma or the fstab won't work properly.
          </p>

          <p><b>space_cache</b> – I have this set to =v2 you can remove this if you if you prefer to use v1 which can be
            more stable the devs say but I have had any issues running v2.
            This just lets the kernel know where blocks of free space are on the disk to write data to when a file is
            created.</p>

          <p><b>Subvol</b> – just selects the subvolume</p>

          <p>If you have a separate /home partition you can now mount that for EXT4 running</p>

          <blockquote class="blockquote">
            <p>
              mount -o noatime,commit=120 /dev/nvme0n1p(x) /mnt/home
            </p>
          </blockquote>

          <p>the options using the mount command are similar to BTRFS however you can also add barrier=0 if you would
            that
            will help performance however you may run into data loss
            in the case of a power loss if not the entire partition becoming corrupted so I left it out here if your on
            a
            laptop or a UPS maybe consider this. I will link to a section
            to read more about this feature in the next section.</p>

          <p>And for XFS by running</p>

          <blockquote class="blockquote">
            <p>
              mount /dev/nvme0n1p(x) /mnt/home
            </p>
          </blockquote>

          <p>XFS has its own performance tweaks outside of the fstab I link to more info about at the end of the guide
          </p>

          <h3 class="header">EXT4 Mounting <a id="ext4"></a></h3>

          <p>You will need to mount your partitions to the /mnt Directory by running</p>

          <blockquote class="blockquote">
            <p>
              mount -o noatime,commit=120 /dev/nvme0n1p(x) /mnt
            </p>
          </blockquote>

          <p>and if you have a separate /home directory also run</p>

          <blockquote class="blockquote">
            <p>
              mkdir /mnt/home && mount -o noatime,commit=120 /dev/nvme0n1p(x) /mnt/home
            </p>
          </blockquote>

          <p>You can run just mount with out -o (options) but it’s easier to apply the performance tweaks to the fstab
            while mounting now so that we don’t have to come back and change them later on.</p>

          <p><b>noatime</b> – basically improves performance by not writing the time the file was last accessed</p>

          <p><b>commit</b> – the time in seconds it takes for the data to be synchronized to storage set at 120 seconds
            here so if you lose power or crash any data within the last 2 minutes
            will be probably be lost feel free to change this. </p>

          <p><b>barrier</b> - you can also add barrier=0 if you would that will help performance however you may run
            into
            data loss in the case of a power loss if not the entire partition
            becoming corrupted so I left it out here if your on a laptop or on a UPS System maybe consider this. You can
            read more about this here</p>

          <p><a class="link"
              href="https://wiki.archlinux.org/title/Ext4#Turning_barriers_off">https://wiki.archlinux.org/title/Ext4#Turning_barriers_off</a>
          </p>

          <h3 class="header">XFS Mounting <a id="xfs"></a></h3>

          <p>Very simple to mount partitions no extra options just run</p>

          <blockquote class="blockquote">
            <p>
              mount /dev/nvme0n1p(x) /mnt
            </p>
          </blockquote>

          <p>and if you have an separate /home partition also run</p>

          <blockquote class="blockquote">
            <p>
              mkdir /mnt/home && mount /dev/nvme0n1p(x) /mnt/home
            </p>
          </blockquote>

          <h2 class="header">Mounting Boot and setting up FSTAB (ALL) <a id="fstab"></a></h2>

          <p>Alright now we just have to mount the boot partition we created earlier to /mnt we can do that by running
          </p>

          <blockquote class="blockquote">
            <p>
              mkdir /mnt/boot && mount /dev/nvme0n1p1 /mnt/boot
            </p>
          </blockquote>

          <p>for me its my first partition so it looks like this change yours accordingly of course. If you are running
            on
            an older EFI system that doesn’t support UEFI change /mnt/boot to /mnt/boot/efi</p>

          <p>After that we can start to install the basics to the mounted system by running</p>

          <blockquote class="blockquote">
            <p>
              pacstrap /mnt base base-devel nano`
            </p>
          </blockquote>

          <p>pacstrap is similar to pacman Arch’s default package manager and it just used in the install process to
            install packages to the mounted directory, you can also install more stuff
            besides base and base-devel however for this guide we are just going to keep things simple.</p>

          <p>After that finishes we can generate the fstab file for our mounted system by running</p>

          <blockquote class="blockquote">
            <p>
              {"genfstab -U /mnt >> /mnt/etc/fstab"}
            </p>
          </blockquote>

          <p>genfstab is just a command to create a file that tells the kernel what partitions to mount and where -U
            basically just means to assign UUID Values to each.</p>

          <p>If your running BTRFS you also want to run</p>

          <blockquote class="blockquote">
            <p>
              nano /mnt/etc/fstab
            </p>
          </blockquote>

          <p>and then you should see some sort of editor and you want to make sure there's not option that looks similar
            to this</p>

          <blockquote class="blockquote">
            <p>
              /dev/nvme0n1p2 UUID=xxxxx<br />
              <br />
            <pre>LABEL=ROOT   /   btrfs rw,relatime,compress=lzo,ssd,space_cache=v2,subvolid=256,subvol=/@,subvol=@</pre>
            </p>
          </blockquote>

          <p>you basically want to remove the entire entry.</p>

          <h3 class="header">Setting Timezone and Locales <a id="timezone"></a></h3>

          <p>Now we can move into the mounted system by running</p>

          <blockquote class="blockquote">
            <p>
              arch-chroot /mnt
            </p>
          </blockquote>

          <p>now we need to get our timezone which we can get a list of available timezones by running</p>

          <blockquote class="blockquote">
            <p>
              timedatectl list-timezones
            </p>
          </blockquote>

          <p>then just use your keyboard to move down till you find the timezone closest to you once your done that
            press
            Control + C and run this command using that timzone</p>

          <blockquote class="blockquote">
            <p>
              ln -sf /usr/share/zoneinfo/Region/City /etc/localtime
            </p>
          </blockquote>

          <p>After that we can sync the clock by running</p>

          <blockquote class="blockquote">
            <p>
              hwclock --systohc
            </p>
          </blockquote>

          <p>Now let’s add a language for our system to use by running</p>

          <blockquote class="blockquote">
            <p>
              nano /etc/locale.gen
            </p>
          </blockquote>

          <p>once in the locale.gen file you will see a lot of lanaguages all you need to do is scroll down to your
            lanaguge in my case “en_US.UTF-8 UTF-8” and what your going to want
            to do is remove the # from the front of the line this is a comment and anything with a # in front of it will
            not be read, so we remove it so the language we want is read by
            the system. After that we do Control + X and then it will ask to save the buffer we just press Y then it
            should ask file name to write just press enter. Now run this command
            to use the locale files on the system</p>

          <blockquote class="blockquote">
            <p>
              locale-gen
            </p>
          </blockquote>

          <p>and then we want to set the default language by running</p>

          <blockquote class="blockquote">
            <p>
              {"echo LANG=en_US.UTF-8 >> /etc/locale.conf"}
            </p>
          </blockquote>

          <p>with whatever language you have in my case it looks like this. The echo command basically means insert this
            text into the file, you can also run nano /etc/locale.conf and
            add LANG=en_US.UTF-8 (or whatever language your using) if you would prefer to do it that way instead.</p>

          <h3 class="header">Setting up localhost and hosts <a id="hosts"></a></h3>

          <p>We are almost done a basic Arch Linux install now and just need to do a few more things for now we need to
            setup the hostname of the Computer and edit our hosts file
            to be able to properly connect to the Internet. We can set our host name using the echo command again or
            using
            nano on the file and adding your hostname there, this can
            be any name you want I just name mine host so the command looks like this</p>

          <blockquote class="blockquote">
            <p>
              {"echo host >> /etc/hostname"}
            </p>
          </blockquote>

          <p>now we can edit our hosts file to use our hostname by editing the file with nano by running</p>

          <blockquote class="blockquote">
            <p>
              nano /etc/hosts
            </p>
          </blockquote>

          <p>Inside the hosts file under where it says see hosts for details you want to input this</p>

          <blockquote class="blockquote">
            <p>
              127.0.0.1 localhost<br />
              ::1 localhost<br />
              127.0.1.1 myhostname.localdomain myhostname
            </p>
          </blockquote>

          <p>where “myhostname” is the hostname you set so in my case it would be host.localdomain host for the last
            line.
            After that’s done Control + X again press y to save and then
            enter to overwrite the file.Now we need to start install packages like the kernel itself and the bootloader
            we
            can install everything we need by running just this one command</p>

          <blockquote class="blockquote">
            <p>
              pacman -Syyu grub efibootmgr linux linux-firmware linux-headers networkmanager wpa_supplicant
              network-manager-applet reflector git bluez blueman bluez-utils xdg-utils xdg-user-dirs cups dosfstools
              e2fsprogs lvm2 foomatic-db-engine foomatic-db
            </p>
          </blockquote>

          <p>after that finishes if you are running BTRFS you need to also run</p>

          <blockquote class="blockquote">
            <p>
              pacman -S grub-btrfs btrfs-progs
            </p>
          </blockquote>

          <p>If your running XFS you need to also run this</p>

          <blockquote class="blockquote">
            <p>
              pacman -S xfsprogs
            </p>
          </blockquote>

          <h3 class="header">Installing GPU Driver <a id="gpu"></a></h3>

          <p>First we need to configure the pacman configuration file by running</p>

          <blockquote class="blockquote">
            <p>
              nano /etc/pacman.conf
            </p>
          </blockquote>

          <p>Once inside scroll down to find the 2 lines saying</p>

          <blockquote class="blockquote">
            <p>
              #[multilib]<br />
              #Include = /etc/pacman.d/mirrorlist
            </p>
          </blockquote>

          <p>and remove the # symbols in front of each line then press Control + X then enter to save and exit the file.
            Then run</p>

          <blockquote class="blockquote">
            <p>
              pacman -Syyu
            </p>
          </blockquote>

          <p>to refresh the mirrors. After that’s finished we can start to install our GPU Drivers run the commands
            specific to your GPU. For the Nvidia Driver I am
            using the Closed Source Nvidia driver instead of the Open Source one from nouveau as it runs games much
            better. I have linked a performance comparison as
            well if you are interested in looking but In my opinion its no where close to being worth running for
            gaming.<br />
            <a class="link"
              href="https://www.phoronix.com/scan.php?page=article&item=nvidia-nouveau-2019&num=2">https://www.phoronix.com/scan.php?page=article&item=nvidia-nouveau-2019&num=2</a>
          </p>

          <p><b>INTEL</b></p>
          <blockquote class="blockquote">
            <p>
              pacman -S mesa lib32-mesa xf86-video-intel vulkan-intel
            </p>
          </blockquote>

          <p><b>AMD</b></p>
          <blockquote class="blockquote">
            <p>
              pacman -S mesa lib32-mesa xf86-video-amdgpu vulkan-radeon lib32-vulkan-radeon libva-mesa-driver
              mesa-vdpau`
            </p>
          </blockquote>

          <p><b>NVIDIA</b></p>
          <blockquote class="blockquote">
            <p>
              pacman -S nvidia-dkms nvidia-settings nvidia-utils lib32-nvidia-utils`blockquote
            </p>
          </blockquote>

          <p><b>NOUVEAU</b> (Open Source Nvidia)</p>
          <blockquote class="blockquote">
            <p>
              pacman -S mesa xf86-video-nouveau
            </p>
          </blockquote>

          <p>For the nvidia package I went with nvidia-dkms over nvidia you can change this if you would like but let me
            explain why you should consider running DKMS.
            The standard nvidia driver will work fine with the default linux kernel however if you switch to a realtime
            kernel or other kernel like zen may not work.
            So its better to have DKMS from the gecko, If you don’t ever plan on running that then just change to
            nvidia.
            You can read more about DKMS here
            - <a class="link"
              href="https://wiki.archlinux.org/title/Dynamic_Kernel_Module_Support">https://wiki.archlinux.org/title/Dynamic_Kernel_Module_Support</a>
            Now let me explain these commands a little bit for those that are new, pacman is your package manager
            similar
            to apt-get or dnf. -S basically means download and install
            these packages and -Syyu basically means to update all the repos upgrade any new app versions and download
            and
            install these packages you can also run -Syyu without listing any packages.
            You can also run -Sy to just update Repos and -R to remove packages that's a basic run through of pacman.
            Next
            we will install the microcode for the CPU so run
            the command below for your CPU</p>

          <p><b>INTEL</b></p>
          <blockquote class="blockquote">
            <p>
              pacman -S intel-ucode
            </p>
          </blockquote>

          <p><b>AMD</b></p>
          <blockquote class="blockquote">
            <p>
              pacman -S amd-ucode
            </p>
          </blockquote>

          <h3 class="header">Initramfs Setup <a id="initramfs"></a></h3>

          <p>Now we need to edit our initial ram disk by running</p>

          <blockquote class="blockquote">
            <p>
              nano /etc/mkinitcpio.conf
            </p>
          </blockquote>

          <p>in the 7th line where it says MODULES=() without a # infront of it your gonna want to add a few things here
            this is going to change depending on your GPU and FS that you chose.</p>

          <p>To start adding modules all you need to do is type the module between the () and then have a space between
            each module I have listed the modules u may need below.</p>

          <p>
            <b>BTRFS</b> – btrfs<br />
            <b>Intel GPU</b> - i915<br />
            <b>AMD GPU</b> – amdgpu<br />
            <b>NVIDIA Driver</b> – nvidia nvidia_modeset nvidia_uvm nvidia_drm<br />
            <b>Nouveau Driver</b> – nouveau<br />
            <b>EXT4</b> - ext4<br />
            <b>XFS</b> - xfs
          </p>

          <p>After this we need to reset up our kernels to use these modules by running</p>

          <blockquote class="blockquote">
            <p>
              mkinitcpio -P
            </p>
          </blockquote>

          <p>Next we will need to install a Bootloader for a System to load our OS. If you are installing Arch along
            side
            another OS you can use this command to be able to read those other Operating Systems.</p>

          <blockquote class="blockquote">
            <p>
              pacman -S os-prober
            </p>
          </blockquote>

          <p>After that we can continue installing our bootloader by running this command</p>

          <blockquote class="blockquote">
            <p>
              grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=Arch
            </p>
          </blockquote>

          <p>and then run</p>

          <blockquote class="blockquote">
            <p>
              grub-mkconfig -o /boot/grub/grub.cfg
            </p>
          </blockquote>

          <p>The first line is just used to install the GRUB Bootloader to the system, some people prefer SystemD-Boot
            however I find GRUB Easier to use and still use it
            in all my installs hence its being used here. The target is just saying to install a bootloader for the
            x86_64
            Architecture type then the restis pretty straight
            forward. The config command is more useful and will be used to update your bootloader in the future if you
            add
            or remove kernels from your system to be able to
            see those boot options. If you have another OS along the arch install and installed os-prober you can run
            that
            now by running </p>

          <blockquote class="blackquote">
            <p>
              os-prober
            </p>
          </blockquote>

          <p>and then run the grub-mkconfig command again exactly how its written above.</p>

          <h3 class="header">Creating the user <a id="user"></a></h3>blockquote

          <p>Pretty much at the end now finishing touches before we have a basic install, next up is setting the root
            account password we can do that by running</p>

          <blockquote class="blockquote">
            <p>
              passwd
            </p>
          </blockquote>

          <p>and then entering a password 2x then we will create a user by running</p>

          <blockquote class="blockquote">
            <p>
              useradd -mG wheel username
            </p>
          </blockquote>

          <p>and of course username being the username would would like, Note that this username must be all lowercase
            letters and may only consist of numbers, letters, underscores,
            digits, periods, @ and dashes. The name may not start with a dash. The "\$" sign is allowed at the end of
            usernames. -mG the m means to create a new home directory for the
            user and the G means to add the user to the group specified in this case wheel. You can also delete users by
            running userdel -r username.</p>

          <p>Now with our user created we need to add a passwd for the new user the command is similar to the way we
            added
            a password for root by just adding the username to the end like so</p>

          <blockquote class="blockquote">
            <p>
              passwd username
            </p>
          </blockquote>

          <p>After that we need to edit our sudoers file to allow users of the wheel group to use the sudo command. We
            can
            edit that file by running one of the 2 commands below</p>

          <blockquote class="blockquote">
            <p>
              EDITOR=nano visudo
            </p>
          </blockquote>

          <p>or</p>

          <blockquote class="blockquote">
            <p>
              nano /etc/sudoers
            </p>
          </blockquote>

          <p>the first option will prevent you from destroying your system if you make a mistake. You need to go down
            until you see the line</p>

          <blockquote class="blockquote">
            <p>
              %wheel ALL=(ALL) ALL
            </p>
          </blockquote>

          <p>and remove the comment in front of it in this case the # symbol make sure to leave the % or the system will
            break. Then we can do Control + X press y to save and then enter.</p>

          <h3 class="header">Enabling systemd Startups <a id="systemd"></a></h3>

          <p>Now we can enable systemd to auto start certain items on boot not everything is a systemd enabled item but
            keep the command in mind as you may need it to enable certain
            programs in the future. We will run the following commands</p>

          <blockquote class="blockquote">
            <p>
              systemctl enable NetworkManager
              systemctl enable bluetooth
              systemctl enable org.cups.cupsd
            </p>
          </blockquote>

          <p>This is going to enable internet bluetooth and printing services.</p>

          <h3 class="header">Installing a Desktop <a id="desktop"></a></h3>

          <p>Now we can move on to the final step and that's installing the Desktop Environment (DE), there's lots to
            chose from and Arch allows you to pretty much run any of them easily I
            will cover a few.I personally run XFCE as I like to keep my system lightweight and don’t care for many
            effects
            or built in software. Here are a few links to view some different DE’s.<br />
            <b>XFCE</b> - <a class="link" href="https://xfce.org/">https://xfce.org/</a><br />
            <b>GNOME</b> - <a class="link" href="https://www.gnome.org/">https://www.gnome.org/</a><br />
            <b>KDE</b> - <a class="link"
              href="https://kde.org/plasma-desktop/">https://kde.org/plasma-desktop/</a><br />
            <b>LXQt</b> - <a class="link" href="https://lxqt-project.org/">https://lxqt-project.org/</a><br />
            <b>Budgie</b> - <a class="link" href="https://getsol.us/home/">https://getsol.us/home/</a><br />
            <b>Cinnamon</b> - <a class="link"
              href="https://en.wikipedia.org/wiki/Cinnamon_(desktop_environment)">https://en.wikipedia.org/wiki/Cinnamon_(desktop_environment)</a><br />
            <b>MATE</b> - <a class="link"
              href="https://en.wikipedia.org/wiki/MATE_(software)">https://en.wikipedia.org/wiki/MATE_(software)</a>
          </p>

          <h4 class="small-header">To Install XFCE</h4>

          <blockquote class="blockquote">
            <p>
              pacman -S xfce4 lightdm-gtk-greeter-settings xorg<br />
              <br />
              systemctl enable lightdm
            </p>
          </blockquote>

          <p>Installing just lightdm-gtk-greeter-settings will automatically grab the dependencies lightdm and
            lightdm-gtk-greeter to save some typing ;)</p>

          <h4 class="small-header">To Install GNOME</h4>

          <blockquote class="blockquote">
            <p>
              pacman -S gnome gdm xorg<br />
              <br />
              systemctl enable gdm
            </p>
          </blockquote>

          <h4 class="small-header">To Install KDE Plasma</h4>

          <blockquote class="blockquote">
            <p>
              pacman -S plasma sddm xorg<br />
              <br />
              systemctl enable sddm
            </p>
          </blockquote>

          <h4 class="small-header">To Install LXQt</h4>

          <blockquote class="blockquote">
            <p>
              pacman -S lxqt lightdm lightdm-gtk-greeter xorg<br />
              <br />
              systemctl enable lighdm
            </p>
          </blockquote>

          Would recommend switching to a QT/Webkit Greeter (on low end PCs) once getting an AUR Helper installed.

          <h4 class="small-header">To Install Budgie</h4>

          <blockquote class="blockquote">
            <p>
              pacman -S budgie-desktop lightdm-gtk-greeter-settings xorg gnome-control-center gnome-terminal<br />
              <br />
              systemctl enable lighdm
            </p>
          </blockquote>

          <h4 class="small-header">To Install Cinnamon</h4>

          <blockquote class="blockquote">
            <p>
              pacman -S cinnamon gnome-terminal lightdm-gtk-greeter-settings xorg<br />
              <br />
              systemctl enable lighdm
            </p>
          </blockquote>

          <h4 class="small-header">To Install MATE</h4>

          <blockquote class="blockquote">
            <p>
              pacman -S mate mate-extra ttf-freefont lightdm-gtk-greeter-settings xorg gnome-terminal<br />
              <br />
              systemctl enable lighdm
            </p>
          </blockquote>

          <p>If you noticed each Desktop has a different systemctl enabled packaged these are called Display Managers,
            not
            all Managers support every single Environment.
            You can read about different Display Managers here - <a class="link"
              href="https://wiki.archlinux.org/title/Display_manager#Graphical">https://wiki.archlinux.org/title/Display_manager#Graphical</a>
            <br />
            You can also find different Display Environments other than those listed here by checking out this page - <a
              class="link"
              href="https://wiki.archlinux.org/title/Desktop_environment#Officially_supported">https://wiki.archlinux.org/title/Desktop_environment#Officially_supported</a>
          </p>

          <p>After that you can type exit to leave the chroot and then run the command</p>

          <blockquote class="blockquote">
            <p>
              umount -a
            </p>
          </blockquote>

          <p>to unmount all partitions it should do this automatically on reboot anyways but always good to double check
            to not get corrupted or something, their may be some errors
            running that as not everything can be unmounted that fine you can then just run the command</p>

          <blockquote class="blockquote">
            <p>
              reboot
            </p>
          </blockquote>

          <p>and then GRUB Should load into your system! If something breaks or is not working the best way to work on
            your Arch System in the future is to keep a USB with
            an ISO on it doesn’t need to be the most up to date that way if your system breaks you can load the ISO on
            the
            USB and mount the partitions like we did in the beginning
            and then just arch-chroot mnt into your system and edit any files or remove/install anything you need to try
            and bootup your system successfully.</p>

          <p>XFS Performance Tweaks - <a class="link"
              href="https://wiki.archlinux.org/title/XFS#Performance">https://wiki.archlinux.org/title/XFS#Performance</a>
          </p>

          <h3 class="header">Extra Junk <a id="extra"></a></h3>

          <p><s>Personally I have tried LXQt in the past I like it but the UI is just not good enough for me to switch
              from XFCE Full time. I hope to change over in the future but the
              difference in ram usage is minimal like 100-150MB on my system compared to XFCE.</s> I have switched over
            to
            SwayWM now which runs lighter than both and works well for my needs,
            I wouldn't recommend it for a novice but if you are interested you check it out <a> here </a>. For those
            that
            think “Ram is
            supposed to be used so it doesn’t matter” your right and I would rather my system resources going to the
            applications I use and not the Desktop.</p>

          <p>You can find my Linux Performance Tweaks guide here - <a class="link"
              href="https://danterobinson.dev/Linux/PerformanceGuide">https://danterobinson.dev/Linux/PerformanceGuide</a>
          </p>
          <p>If your looking to add more Security to your system check my Security Guide here - <a class="link"
              href="https://danterobinson.dev/Linux/SecurityGuide">https://danterobinson.dev/Linux/SecurityGuide</a></p>
        </body>
      </div>

      <?php
      include("../includes/footer.php");
      ?>

    </div>
  </div>
</div>

</html>