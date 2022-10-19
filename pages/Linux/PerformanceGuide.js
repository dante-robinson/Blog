import Head from "next/head"

export default function PerformanceGuide({ title }) {
  return (
    <div className="space-y-[1vh]">
      <Head>
        <title>{title ? title : "Linux Performance Tweaks"}</title>
        <meta name="description" content="Linux Performance tweaks guide for all distros. Contains many Arch Linux and SystemD tweaks that won't work on other distros." />
      </Head>

      <p className="flex justify-end">Oct 30, 2021</p>

      <h2 className="flex text-xl sm:text-2xl font-bold justify-center">Linux Performance Tweaks</h2>

      <h3 className="text-lg font-semibold">Table of Contents</h3>

      <div className="text-cyan">
        <a className="hover:underline" href="#reflector-mirrors">Reflector Mirrors (Arch Based Only)</a><br />
        <a className="hover:underline" href="#configure-pacman">Conifgure Pacman (Arch Based Only)</a><br />
        <a className="hover:underline" href="#makepkg">Makepkg Tweaks</a><br />
        <a className="hover:underline" href="#yay">Installing Yay (Arch Based Only)</a><br />
        <a className="hover:underline" href="#pamac">Installing Pamac (Arch Based Only)</a><br />
        <a className="hover:underline" href="#performance">Performance Tweaks</a><br />
        <a className="hover:underline" href="#sound">Installing Sound Drivers and Improving Sound Quality</a><br />
        <a className="hover:underline" href="#fonts">Installing Fonts</a><br />
        <a className="hover:underline" href="#io">Setting I/O Schedulers</a><br />
        <a className="hover:underline" href="#initramfs">Initramfs Tweaks (Arch Based Only)</a><br />
        <a className="hover:underline" href="#laptop">Laptop battery Improvement</a><br />
        <a className="hover:underline" href="#touchpad">Fusuma Touchpad Gestures</a>
      </div>

      <p>Welcome to my Linux Performance Tweaks Guide, this is a personal collection of tweaks and settings that I do to a fresh Install on my system to get it running the way I like it to.
        I won’t be covering things such as microcodes in this guide as they are covered in my Arch Linux install guide already and this guide will be focusing on the next steps directly from there.
        You can find my install guide here - <a className="text-red break-all hover:underline" href="https://danterobinson.dev/Linux/ArchGuide">https://danterobinson.dev/Linux/ArchGuide</a></p>

      <p>This guide was originally designed as a collection of tweaks for Arch Linux but has since been expanded into multiple guides. This guides new role is Performance Tweaks however there are still
        some Arch Linux specific modifications that will be noted in the header of that section.</p>

      <p>If you are interested in the raw version of the guide you can find that on github here
        - <a className="text-red break-all hover:underline" href="https://gist.github.com/dante-robinson/cd620c7283a6cc1fcdd97b2d139b72fa">https://gist.github.com/dante-robinson/cd620c7283a6cc1fcdd97b2d139b72fa</a></p>

      <p>If you are interested in my Linux Security Guide you can find that here
        - <a className="text-red break-all hover:underline" href="https://danterobinson.dev/Linux/SecurityGuide">
          https://danterobinson.dev/Linux/SecurityGuide
        </a>
      </p>

      <p>A lot of people may prefer to create a bunch of dotfiles in there home directory to allow different users to have different settings for things like pacman, audio, makepkg settings etc.
        I see no need for this the users are on the same system as you so why not set them as system wide settings? To each there own I have listed both methods where it applies if you choose to do
        it one way over the other.</p>

      <h3 className="flex text-lg justify-center font-semibold">Reflector Mirrors (Arch Based Only)<a id="reflector-mirrors"></a></h3>

      <p>Lets start with getting your mirror configured this will make sure you are downloading packages from locations closest to you so you achieve the best download speed. In my Arch Install
        Guide we have already installed the reflector package we need and just need to set up reflector and enable the systemd service. If you haven't installed reflector you can do so for your
        distro by running one of the following</p>

      <p>First run this command</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo reflector -c CountryName --sort rate --save /etc/pacman.d/mirrorlist
        </p>
      </blockquote>

      <p>Change the CountryName to your Country Name inside quotes '' and it should give you just mirrors for your country. Next we will enable the systemd service by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo systemctl enable reflector.timer
        </p>
      </blockquote>

      <p>and that’s it now it will refresh your mirrors every bootup. If you are really tight on resources and don’t travel much or have a desktop you can skip running the service as the mirrors aren’t going to change much.</p>

      <h3 className="flex text-lg justify-center font-semibold">Configure pacman (Arch Based Only) <a id="configure-pacman"></a></h3>

      <p>Now we can configure the pacman configuration file to enable parallel downloads by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo nano /etc/pacman.conf
        </p>
      </blockquote>

      <p>and scroll down to to Misc options and uncomment (remove the #) on ParallelDownloads =5 I also change this number to 10 as I have a pretty solid connection and can handle downloading
        more things at a time. After that scroll all the way down to the bottom and below where the commented Server is we can start adding extra repos to download pre compiled packages to save time
        instead of compiling them ourselves. I like to add the following repo as it offers pre compiled AUR packages</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          [chaotic-aur]<br />
          Include = /etc/pacman.d/chaotic-mirrorlist
        </p>
      </blockquote>

      <p>Then we can do Control + X then press y to save and enter after that run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo pacman -Syyu
        </p>
      </blockquote>

      <p>to update the repos and check for updates. Due note that some of these repos are from unsigned parties so add them at your own safety risk. I switch a lot of my drivers over to git versions
        however won’t be covering that in this guide as I don’t recommend others doing to so as some updates can cause issues that you will need to fix.</p>

      <h3 className="flex text-lg justify-center font-semibold">Makepkg Tweaks <a id="makepkg"></a></h3>

      <p>Although we haven’t really have to build anything on our own system yet in this guide we will need to and it would be nice if we could use the full processing power of our system for those
        tasks as they can take awhile especially the kernel. First we need to know how many cpu threads you have on your system we can check this by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          nproc
        </p>
      </blockquote>

      <p>keep the number it tells you in mind we will need that for later now we can edit the makepkg file by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo nano /etc/makepkg.conf
        </p>
      </blockquote>

      <p>or make it a user only setting by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo cp /etc/makepkg.conf ~/.makepkg.conf<br />
          <br />
          sudo nano ~/.makepkg.conf
        </p>
      </blockquote>

      <p>Once inside the makepkg.conf file scroll down till you come across “Compiler and Linker Flags” in this section we are looking for the CF Flags option make sure its uncommented
        (remove # infront if there is one) and and change -march and -mtune to native so it looks like this</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          -march=native -mtune=native
        </p>
      </blockquote>

      <p>Adding this will just add architecture-specific optimizations to compiling.Now we can go down a bit more to RUSTFLAGS and after opt-level=2 add “-C target-cpu=native” after it
        within the same quotations and uncomment the line (remove the # in front of RUSTFLAGS) so it looks like this</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          RUSTFLAGS="-C opt-level=2 -C target-cpu=native"
        </p>
      </blockquote>

      <p>Again same thing as the last line for RUST compiles. Now lets go down a bit more and until you will see MAKEFLAGS uncomment this line and change it to -j and then the number of
        threads on you have on your system so on my 5950X it looks like this</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          MAKEFLAGS="-j32"
        </p>
      </blockquote>

      <p>This will allow your system to use all the threads on the CPU to build packages. Next scroll all the way down to the next section “BUILD ENVIRONMENT” and and the last line before
        the next section uncomment BUILDDIR and make sure it goes to /tmp/makepkg like so</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          BUILDDIR=/tmp/makepkg
        </p>
      </blockquote>

      <p>now scroll all the way down to “COMPRESSION DEFAULTS” and we need to change a few things starting with the first line COMPRESSGZ replace gzip with the word pigz like this</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          COMPRESSGZ=(pigz -c -f -n)
        </p>
      </blockquote>

      <p>pigz works the same as gzip but sohuld use all the cores on your system when compressing to .gz</p>

      <p>Now lets move down to the next line COMPRESSBZ2 this is another simple change all we need to do is add a p in front of bzip2 so it reads pbzip2 like this</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          COMPRESSBZ2=(pbzip2 -c -f)
        </p>
      </blockquote>

      <p>just like the last change for .gz this will also enable all cores for .bz2 Now we can go the next line
        COMPRESSXZ and after -z but before the final – you want to add --threads=0 like so</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          COMPRESSXZ=(xz -c -z --threads=0 -)
        </p>
      </blockquote>

      <p>Threads being set to 0 will use all threads on the system for .xz or you can manually input the number of threads you got earlier from nproc.</p>

      <p>For the last Compression method COMPRESSZST we are going to also add --threads=0 after -q and before the final – like so</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          COMPRESSZST=(zstd -c -z -q --threads=0 -)
        </p>
      </blockquote>

      <p>Now this next option is option but we can scroll down to the next section called EXTENSION DEFAULTS and remove .gz from the end of PKGEXT this will speed up install
        and packaging your items but will cause you to have slightly larger file sizes. It should look like this</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          PKGEXT='.pkg.tar'
        </p>
      </blockquote>

      <h3 className="flex text-lg justify-center font-semibold">Installing Yay (Arch Based Only) <a id="yay"></a></h3>

      <p>I use yay over the other options such as yaourt and paru. Yay is just easier for me to use I find and doesn’t ask me to review PKGBUILD Files like paru which just gets annoying in my
        opinion. For those that don’t know what yay, yaourt or paru are these are called AUR Helpers they are similar to pacman and help you connect directly to the AUR. First we are going to use
        git which you should have already from my install guide if not just run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo pacman -S git
        </p>
      </blockquote>

      <p>and then we can run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          git clone https://aur.archlinux.org/yay.git
        </p>
      </blockquote>

      <p>to clone the repo to our home folder, we can delete it again when we are finished with it we won’t need a special folder for it as yay can upgrade through the AUR once we have access to it.
        Now we can move into the folder and make the package by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          cd yay<br />
          <br />
          makepkg -si
        </p>
      </blockquote>

      <p>This will install yay for us and may install go along the way that's about it now we can go back to our home fodler by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          cd ../
        </p>
      </blockquote>

      and then we can delete the folder by running

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo rm -R yay
        </p>
      </blockquote>

      <h3 className="flex text-lg justify-center font-semibold">Installing Pamac (Arch Based Only) <a id="pamac"></a></h3>

      <p>This might be a little bit different than how some other people in the Arch Community do it however I see no need for Flatpak or Snap package support so I install a version that doesn’t
        have that support built in. I will cover both versions but I recommend the first one.</p>

      <p>To install Pamac without Flatpak or Snap Support run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          yay -S pamac-aur-git
        </p>
      </blockquote>

      <p>or install Pamac with Flatpak and Snap support run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          yay -S pamac-all-git
        </p>
      </blockquote>

      <p>-git usually means the latest/beta version but sometimes repos get out of date so you will have to check that on your own on a package by package basis. That’s pretty much it now in your
        Desktop if you go to your Applications and then under the Settings subdirectory you should see a new app called Add/Remove Software this is pamac. You going to want to open it up and go to
        prefrences under the sandwich looking icon beside the minimize window button and under the tab AUR or Third Party make sure Enable AUR Support is Enabled. Under the General tab you can also
        adjust the parallel downloads and udner Advanced tab you can enable downgrade in case packlages break your system in the future and you need to roll back. If you downloaded the Flatpak and Snap
        Supported version make sure you go to those extra tabs in the settings and enable them also.</p>

      <h3 className="flex text-lg justify-center font-semibold">Performance Tweaks <a id="performance"></a></h3>

      <p>These are overall system tweaks some of which are used in the Garuda Linux Distro to increase gaming performance the first thing we are gonna do is download all the needed packages with</p>

      <p><b>Arch Based</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          yay -S ananicy-cpp irqbalance memavaild nohang preload prelockd uresourced
        </p>
      </blockquote>
      <p><b>Debian Based</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo apt-get install nohang preload
        </p>
      </blockquote>

      <p><b>Gentoo Based</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          emerge -av app-admin/ananicy sys-apps/irqbalance sys-apps/preload
        </p>
      </blockquote>

      <p><b>RedHat Based</b></p>
      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          yum install irqbalance nohang prelockd uresourced
        </p>
      </blockquote>

      <p><b>Void Linux</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo xbps-install -Su irqbalance preload
        </p>
      </blockquote>

      <p>Now explaining what each of these do is just going to make this list of tweaks insanely so instead what I'm going to do is provide the link below for each</p>
      <p><b>ananicy-cpp</b> - <a className="text-red break-all hover:underline" href="https://gitlab.com/ananicy-cpp/ananicy-cpp">https://gitlab.com/ananicy-cpp/ananicy-cpp</a><br />
        <b>irqbalance</b> - <a className="text-red break-all hover:underline" href="https://github.com/Irqbalance/irqbalance">https://github.com/Irqbalance/irqbalance</a><br />
        <b>memavaild</b> - <a className="text-red break-all hover:underline" href="https://github.com/hakavlad/memavaild">https://github.com/hakavlad/memavaild</a><br />
        <b>nohang</b> - <a className="text-red break-all hover:underline" href="https://github.com/hakavlad/nohang">https://github.com/hakavlad/nohang</a><br />
        <b>preload</b> - <a className="text-red break-all hover:underline" href="https://wiki.archlinux.org/title/Preload">https://wiki.archlinux.org/title/Preload</a><br />
        <b>prelockd</b> - <a className="text-red break-all hover:underline" href="https://github.com/hakavlad/prelockd">https://github.com/hakavlad/prelockd</a><br />
        <b>uresourced</b> - <a className="text-red break-all hover:underline" href="https://gitlab.freedesktop.org/benzea/uresourced">https://gitlab.freedesktop.org/benzea/uresourced</a></p>

      <p>Next we will enable these processes to startup at runtime using systemd and we can do that by running these commands</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo systemctl disable systemd-oomd<br />
          <br />
          sudo systemctl enable ananicy-cpp<br />
          <br />
          sudo systemctl enable irqbalance<br />
          <br />
          sudo systemctl enable memavaild<br />
          <br />
          sudo systemctl enable nohang<br />
          <br />
          sudo systemctl enable preload<br />
          <br />
          sudo systemctl enable prelockd<br />
          <br />
          sudo systemctl enable uresourced
        </p>
      </blockquote>

      <p>If your install command is missing some of the packages you can install them manually through the github reopos. Be sure to check your distros specific package list as for
        example Ubuntu may have more available than Debian. If your running Gentoo you will of course need to enable these with OpenRC and Void Linux will need enabled with runit.</p>

      <p>I have also added the command to disable systemd-oomd because I don't use a swap partition as mentioned previously I would rather just buy more ram. However this is really disabled
        because nohang basically replaces this modules use and will prevent OOM (Out of Memory) errors.</p>

      <p>Next we can run this</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sed -i 's|zram_checking_enabled = False|zram_checking_enabled = True|g' /etc/nohang/nohang.conf
        </p>
      </blockquote>

      <p>for those that don't understand this command this basically finds zram checking enabled and that changes that line to true.</p>

      <p>Now we are going to make/edit a bunch of config files for performance even on my Framework Laptop these don't kill battery life to much but it is a difference so if that matters to
        you maybe skip all of these. We are starting with the cpu governor</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo nano /usr/lib/tmpfiles.d/cpu-governor.conf
        </p>
      </blockquote>

      <p>and paste</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          w /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor - - - - performance
        </p>
      </blockquote>

      <p>Then like everything else in this guide with nano use Control + X to save and exit. Now we can set energy preferences to performance by opening</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo nano /usr/lib/tmpfiles.d/energy_performance_preference.conf
        </p>
      </blockquote>

      <p>and paste</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          w /sys/devices/system/cpu/cpufreq/policy*/energy_performance_preference - - - - performance
        </p>
      </blockquote>

      <p>next pcie devices such as gpus</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo nano /usr/lib/tmpfiles.d/pcie_aspm_performance.conf
        </p>
      </blockquote>

      <p>and paste</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          w /sys/module/pcie_aspm/parameters/policy - - - - performance
        </p>
      </blockquote>

      <p>next is another device power management setting</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo nano /usr/lib/tmpfiles.d/power_dpm_state.conf
        </p>
      </blockquote>

      <p>and paste</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          w /sys/class/drm/card0/device/power_dpm_state - - - - performance
        </p>
      </blockquote>

      <p>If you have a newer AMD GPU then you can also open this file</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo nano /usr/lib/udev/rules.d/30-amdgpu-pm.rules
        </p>
      </blockquote>

      <p>and paste</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          KERNEL=="card0", SUBSYSTEM=="drm", DRIVERS=="amdgpu", ATTR{"{device/power_dpm_state}"}="performance"
        </p>
      </blockquote>

      <p>If your running an older AMD GPU such as 300 series or older then you may be running on the radeon driver and you can open this instead</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo nano /usr/lib/udev/rules.d/30-radeon-pm.rules
        </p>
      </blockquote>

      <p>and paste</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          KERNEL=="card0", SUBSYSTEM=="drm", DRIVERS=="radeon", ATTR{"device/power_dpm_state"}="performance"
        </p>
      </blockquote>

      <p>Next we are going to set the SATA Drives to performance mode, If you use all NVMe (note that not all M.2 Drives are NVMe) drives like I do you don't need to set this
        I still do in case I need to connect to a SATA Drive though. We need to first run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo nano /usr/lib/udev/rules.d/50-sata.rules
        </p>
      </blockquote>

      <p>and paste</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          # SATA Active Link Power Management<br />
          ACTION=="add", SUBSYSTEM=="scsi_host", KERNEL=="host*", ATTR{"link_power_management_policy"}="max_performance"
        </p>
      </blockquote>

      <p>Lastly we are just going to set the hdparam rules. This will cause your Internal and External HDDs to never turn off so if you use an external drive or have a HDD in your system
        that's a secondary drive you may want to not set this or unplug your external drive unless needed as it will probably cause the drive to die sooner just from never being able to sleep.
        If you use SSDs since they are using a flash NAND this is less of an issue unless your drives are overheating or something first we can open the file with</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo nano /usr/lib/udev/rules.d/69-hdparm.rules
        </p>
      </blockquote>

      <p>and paste</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          ACTION=="add|change", KERNEL=="sd[a-z]", ATTR{"queue/rotational"}=="1", RUN+="/usr/bin/hdparm -B 254 -S 0 /dev/%k"
        </p>
      </blockquote>

      <h3 className="flex text-lg justify-center font-semibold">Installing sound drivers and Improving Sound Quality <a id="sound"></a></h3>

      <p>In my install guide all I did was show you a basic Arch Install with a desktop but didn’t provide any sound to your system so we can add that now here so those with sound already you
        can skip this. We can install the packages for sound by running this command</p>

      <p><b>Arch Based</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          yay -S pipewire-pulse pipewire-jack lib32-pipewire-jack alsa-plugins alsa-firmware sof-firmware alsa-card-profiles
        </p>
      </blockquote>

      <p><b>Debian Based</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo apt-get install alsa-firmware-loaders pulseaudio pulseaudio-module-jack jackd2
        </p>
      </blockquote>

      <p><b>Gentoo Based</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          emerge -av dev-haskell/alsa-core media-plugins/alsa-plugins media-libs/alsa-lib sys-firmware/alsa-firmware media-sound/pulseaudio
        </p>
      </blockquote>

      <p><b>RedHat Based</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          yum install alsa-firmware pipewire-alsa alsa-sof-firmware pipewire-plugin-jack pipewire
        </p>
      </blockquote>

      <p><b>Void Linux</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo xbps-install -Su libpulseaudio-pipewire libpulseaudio-pipewire-32bit pipewire-alsa pipewire-alsa-32bit libjack-pipewire libjack-pipewire-32bit pipewire pipewire-32bit alsa-plugins alsa-firmware jack jack_capture
        </p>
      </blockquote>

      <p>Once you have these we can start to edit the config files to improve the sound quality. Changing these audio settings will increase CPU Usage on lower end cpus just keep that in
        mind and do your own settings before keeping these settings, however on my 3990X, 5950X and 1165G7 I don’t even notice a 1% hit on cpu usage so I assume it doesn’t really affect modern
        cpus unless your running a dual core maybe. First we need to find out what byte order your cpu has and we can check that by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          lscpu | grep 'Byte Order'
        </p>
      </blockquote>

      <p>Remember if it is Little Endian or Big Endian for later on. I like to edit the global system config by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo nano /etc/pulse/daemon.conf
        </p>
      </blockquote>

      <p>however you can also make a user specific config by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          cp /etc/pulse/daemon.conf ~/.config/pulse/daemon.conf<br />
          <br />
          nano ~/.config/pulse/daemon.conf
        </p>
      </blockquote>

      <p>This next step is mostly just uncommenting lines in this config a comment is made with ; instead of #. So we just need to delete the ; in front of the word for that setting to be applied.
        Im going to list in order the specific lines the need a comment removed and also the changes you need to make to some of the values and I will explain the changes after.</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          daemonize = no<br />
          cpu-limit = no<br />
          high-priority = yes<br />
          nice-level = -11<br />
          realtime-scheduling = yes<br />
          realtime-priority = 5<br />
          resample-method = soxr-vhq<br />
          avoid-resampling = false<br />
          enable-remixing = no<br />
          rlimit-rtprio = 9<br />
          default-sample-format = float32le<br />
          default-sample-rate = 96000<br />
          alternate-sample-rate = 48000<br />
          default-sample-channels = 2<br />
          default-channel-map = front-left,front-right<br />
          default-fragments = 2<br />
          default-fragment-size-msec = 125
        </p>
      </blockquote>

      <p>If your system was Little Endian you can keep everything like this for now, however if you are running a Big Endian system you need to change float32le to flat32be. I have used a sample rate
        of 96KHz if you hear popping upon a reboot or no sound at all feel free to change this back to something like 48KHz you can also raise this to something like 192KHz if your audio setup supports
        it, below I can linked to more Sample rates if you have a higher end audio recording setup. If your having high latency play around with the default fragment and size msec settings.</p>

      <p>Audio Sampling Rates
        - <a className="text-red break-all hover:underline" href="https://en.wikipedia.org/wiki/Sampling_(signal_processing)#Audio_sampling">
          https://en.wikipedia.org/wiki/Sampling_(signal_processing)#Audio_sampling
        </a>
      </p>

      <p>Moving onto the ALSA Config now we can again edit the Global system config by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo nano /etc/asound.conf
        </p>
      </blockquote>

      <p>or make a user specific config by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          cp /etc/asound.conf ~/.asoundrc<br />
          nano ~/.asoundrc
        </p>
      </blockquote>

      <p>If it errors copying the asound file don’t worry about it just means it doesn’t exist yet. If your file is empty you can just paste the following code otherwise if your file has text find
        “Use PulseAudio by default” and remove everything down to the final closing {"}"}. And replace it with the following</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          # Use PulseAudio plugin hw<br />
          <br />
          pcm.!default {"{"} <br />
          type plug <br />
          slave.pcm hw <br />
          {"}"}
        </p>
      </blockquote>

      <p>If your into Audio production also check out the app cadence which can provide some system checks for you
        - <a className="text-red break-all hover:underline" href="https://kx.studio/Applications:Cadence">
          https://kx.studio/Applications:Cadence
        </a>
      </p>

      <p>Also don’t forget to switch to a realtime kernel for low latency. If your new to Audio Production on Linux and don’t know exactly what to use check out this page
        - <a className="text-red break-all hover:underline" href="https://jackaudio.org/applications/">
          https://jackaudio.org/applications/
        </a>
      </p>

      <p>Read more about upmixing/downmixing here
        - <a className="text-red break-all hover:underline" href="https://wiki.archlinux.org/title/Advanced_Linux_Sound_Architecture#High_quality_resampling">
          https://wiki.archlinux.org/title/Advanced_Linux_Sound_Architecture#High_quality_resampling
        </a>
      </p>

      <h3 className="flex text-lg justify-center font-semibold">Installing Fonts <a id="fonts"></a></h3>

      <p>These are just extra fonts for some apps that manually set there own and also includes apple-fonts which gives you the SF Pro Fonts.</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          yay -S noto-fonts noto-fonts-cjk ttf-dejavu ttf-liberation ttf-opensans apple-fonts
        </p>
      </blockquote>

      <h3 className="flex text-lg justify-center font-semibold">Setting I/O Schedulers <a id="io"></a></h3>

      <p>Linux can get very slow during I/O intense applications however this can be improved by setting schedulers. NVMe Drives do not really benefit from this however we can create a config that
        allows us to automatically set NVMe Drives to none and set any SATA drives to run on BFQ we can do this by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo nano /etc/udev/rules.d/60-ioschedulers.rules
        </p>
      </blockquote>

      <p>Once this new file is open just paste the following</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          # set scheduler for NVMe<br />
          <br />
          ACTION=="add|change", KERNEL=="nvme[0-9]\*", ATTR{"queue/scheduler"}="none"<br />
          <br />
          # set scheduler for SSD and eMMC<br />
          <br />
          ACTION=="add|change", KERNEL=="sd[a-z]|mmcblk[0-9]\*", ATTR{"queue/rotational"}=="0", ATTR{"queue/scheduler"}="bfq"<br />
          <br />
          # set scheduler for rotating disks<br />
          <br />
          ACTION=="add|change", KERNEL=="sd[a-z]", ATTR{"queue/rotational"}=="1", ATTR{"queue/scheduler"}="bfq"
        </p>
      </blockquote>

      <p>If you would like to run something like mq-deadline on your NVMe Drives by default then on the second line at the end in quotations where it says “none” replace none with mq-deadline and
        keep the quotations around it then we can save this file by pressing Control + X then y and enter.</p>

      <h3 className="flex text-lg justify-center font-semibold">initramfs tweaks (Arch Based Only) <a id="initramfs"></a></h3>

      <p>Your going to want to make sure everything we need is properly loading up in the initial boot stages of our system and we can do this with a very simple tool called hwdetect you can install this by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo pacman -S hwdetect
        </p>
      </blockquote>

      <p>and then run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo hwdetect --filesystem
        </p>
      </blockquote>

      <p>we are going to want to add the missing MODULES to our mkinitcpio file by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo nano /etc/mkinitcpio.conf
        </p>
      </blockquote>

      <p>after adding those extra modules your also going to want to go down to the next Option called BINARIES are make sure it matches on of the following</p>

      <p><b>BTRFS (Single Device)</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          BINARIES="fsck fsck.btrfs btrfsck"
        </p>
      </blockquote>

      <p><b>BTRFS (Multi Device)</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          BINARIES="fsck fsck.btrfs btrfs btrfsck"
        </p>
      </blockquote>

      <p><b>EXT4</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          BINARIES="fsck fsck.ext[2|3|4] e2fsck"
        </p>
      </blockquote>

      <p><b>XFS</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          BINARIES="fsck fsck.xfs xfs_repair"
        </p>
      </blockquote>

      <p><b>VFAT (FAT32) Usually Bootloaders</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          BINARIES="fsck fsck.vfat dosfsck"
        </p>
      </blockquote>

      <p>You are more then welcome to add multiple of these like EXT4 and XFS just don’t type in fsck twice as it’s already been loaded and then you can again Control + X and then press y and enter
        to save the file and exit. Lastly we just need to reconfigure the kernel by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo mkinitcpio -P
        </p>
      </blockquote>

      <h3 className="flex text-lg justify-center font-semibold">Laptop Battery Improvement <a id="laptop"></a></h3>

      <p>You can increase you battery life by adding the tlp package</p>

      <p><b>Arch Based</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo pacman -S tlp
        </p>
      </blockquote>

      <p><b>Debian Based</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo apt-get install tlp
        </p>
      </blockquote>

      <b>Gentoo Based</b> - <a className="text-red break-all hover:underline" href="https://github.com/dywisor/tlp-portage/blob/maint/README.rst">https://github.com/dywisor/tlp-portage/blob/maint/README.rst</a><br />
      <b>RedHat Based</b> - <a className="text-red break-all hover:underline" href="https://access.redhat.com/discussions/4903881">https://access.redhat.com/discussions/4903881</a><br />

      <p><b>Void Linux</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo xbps-install -Su tlp
        </p>
      </blockquote>

      <p>and enabling the systemd process like this</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          systemctl enable tlp.service –now
        </p>
      </blockquote>

      <p>This may decrease performance a bit so feel free to remove the package if it slows your system down to much. If you would like to dial in your tlp settings such as limiting
        clock speeds on battery you can check out this guide - <a className="text-red break-all hover:underline" href="https://linrunner.de/tlp/settings/index.html">https://linrunner.de/tlp/settings/index.html</a></p>

      <p>You can open the config file by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo nano /etc/tlp.conf
        </p>
      </blockquote>

      <h3 className="flex text-lg justify-center font-semibold">Fusuma Touchpad Gestures <a id="touchpad"></a></h3>

      <p>This will improve the default gestures and you can get these by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          yay -S ruby-fusuma libinput ruby
        </p>
      </blockquote>

      <p>then we need to our user to the input group by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo gpasswd -a \$USER input
        </p>
      </blockquote>

      <p>where \$USER is your username then we can install a gem for fusuma by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          sudo gem install fusuma
        </p>
      </blockquote>

      <p>Then a reboot and it should be running.</p>
    </div>
  );
}
