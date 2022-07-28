import React from "react"

export default function SecurityGuide() {
  return (
    <div className="text-foreground text-sm py-[2vh] px-[2vw] space-y-[1vh]">
      <p className="flex justify-end"> Feb 13, 2021</p>

      <h1 className="flex text-2xl font-bold justify-center">Linux Security Guide</h1>

      <h3 className="text-lg font-semibold">Table of Contents</h3>

      <div className="text-cyan">
        <a className="hover:underline" href="#sysctl">Sysctl</a><br />
        <a className="hover:underline" href="#bootloader">Bootloader</a><br />
        <a className="hover:underline" href="mac">Mandatory Access Control</a><br />
        <a className="hover:underline" href="#sandboxing">Sandboxing</a><br />
        <a className="hover:underline" href="#root">Root Tweaks</a><br />
        <a className="hover:underline" href="#extra">Extra Tweaks</a><br />
        <a className="hover:underline" href="#blacklist">Blacklisting</a><br />
        <a className="hover:underline" href="#fstab">FSTAB</a><br />
        <a className="hover:underline" href="#lock-bootloader">Password Locking Bootloader</a><br />
        <a className="hover:underline" href="#lynis">Lynis</a><br />
        <a className="hover:underline" href="#best">Best Practices</a>
      </div>

      <h2 className="flex text-lg justify-center font-semibold"><a id="sysctl">Sysctl</a></h2>

      <p>We are going to start with some sysctl configuration. These are basically tunable kernel settings that can be set temporarily or hardcoded which is what we are going to do here by adding the commands to .conf files.</p>

      <p>First things first we want to delete the default set sysctl configuration we can do that by running this command</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo rm /usr/lib/sysctl.d/50-default.conf
        </p>
      </blockquote>

      <p>In the <b>/etc/sysctl.d</b> directory we are going to create a file named <b>kptr_restrict.conf</b> which we can do by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo touch /etc/sysctl.d/kptr_restrict.conf
        </p>
      </blockquote>

      <p>however for the sake of keeping this guide somewhat shorter and a lot quicker to implement I am going to be using nano to create the file and save it in the directory. So we can open the file by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/kptr_restrict.conf
        </p>
      </blockquote>

      <p>and then inside the file we are going to paste</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          kernel.kptr_restrict=2
        </p>
      </blockquote>

      <p>Then we can press Control + X and then enter to save the file in that location. I'm not going to keep reiterating over this all the way through the guide but that's how we'll be saving the files
        using nano here on out unless stated otherwise.</p>

      <p>I also mentioned earlier you can set these temporarily I'm not gonna state this for all of the sysctl changes but you can run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sysctl -w kernel.kptr_restrict=2
        </p>
      </blockquote>

      <p>this will temporarily set the change on your system if you would like to set the others temporarily just remove the kernel.kptr_restrict=2 part with the other configurations.</p>

      <p>So what does that even do? This setting will attempt to prevent any possible kernel leaks such as dmesg or /proc/kallsyms. These pointers can be very useful for a kernel exploit. The =2 will
        print all kernel pointers regardless of privileges (such as root) as 0s and =1 one will just print it that way for the user.</p>

      <p>Now we can run nano again to create <b>dmesg_restrict.conf</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/dmesg_restrict.conf
        </p>
      </blockquote>

      <p>and inside we can paste</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          kernel.dmesg_restrict=1
        </p>
      </blockquote>

      <p>This will prevent users from accessing the kernel logs which can be useful to gain information such as kernel pointers.</p>

      <p>Next create the <b>ldisc_autoload.conf</b> file</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/ldisc_autoload.conf
        </p>
      </blockquote>

      <p>and inside we can add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          dev.tty.ldisc_autoload=0
        </p>
      </blockquote>

      <p>This will Automatically loading TTY Line Disciplines. If you are unfamiliar with TTY line discipline it processes all incoming and outgoing characters to and from a tty device.</p>

      <p>Next create the <b>protected_fifos</b> file</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/protected_fifos.conf
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          fs.protected_fifos=2
        </p>
      </blockquote>

      <p>This will avoid unintentional writes to an attacker-controlled FIFO, where a program may have expected to create a regular file.</p>

      <p>Next create the <b>protected_regular.conf</b> file</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/protected_regular.conf
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          fs.protected_regular=2
        </p>
      </blockquote>

      <p>This protection is similar to protected_fifos, but it avoids writing to an attacker-controlled regular file, where the program may have expected to create one.</p>

      <p>Next create the <b>protected_hardlinks.conf</b> file</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/protected_hardlinks.conf
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          fs.protected_hardlinks=1
        </p>
      </blockquote>

      <p>This will make sure hardlinks cannot be created by users if they don't already own the source file, or do not have read/write access to it.</p>

      <p>Next create the <b>protected_symlinks.conf</b> file</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/protected_symlinks.conf
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          fs.protected_symlinks=1
        </p>
      </blockquote>

      <p>Symlinks will now only be permitted to be followed only when outside a sticky world-writable directory, when the uid of the symlink and follower match, or when the directory owner matches the symlink’s owner.</p>

      <p>Next create the <b>suid_dumpable.conf</b> file</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/suid_dumpable.conf
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          fs.suid_dumpable=0
        </p>
      </blockquote>

      <p>Any process which has changed privilege levels or is execute only will not be dumped.</p>

      <p>Next create the <b>core_uses_pid.conf</b> file</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/core_uses_pid.conf
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          kernel.core_uses_pid=1
        </p>
      </blockquote>

      <p>By setting core_uses_pid to 1, the coredump filename becomes core.PID. If core_pattern does not include “%p” (by default it doesn't) and core_uses_pid is set, then .PID will be appended to the filename.</p>

      <p>Next create the <b>ctrl-alt-del.conf</b> file</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/ctrl-alt-del.conf
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          kernel.ctrl-alt-del=0
        </p>
      </blockquote>

      <p>This will cause the system to prevent restarting when ctrl + alt + del is pressed. Usually Windows users do this.</p>

      <p>Next create the <b>modules_disabled.conf</b> file</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/perf_event_paranoid.conf
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          kernel.perf_event_paranoid=3
        </p>
      </blockquote>

      <p>This makes it so only root can access perf events</p>

      <p>Next create the <b>randomize_va_space.conf</b> file</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/randomize_va_space.conf
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          kernel.randomize_va_space=2
        </p>
      </blockquote>

      <p>This enables heap randomization.</p>

      <p>Next create the <b>unprivileged_bpf_disabled.conf</b> file</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/unprivileged_bpf_disabled.conf
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          kernel.unprivileged_bpf_disabled=1
        </p>
      </blockquote>

      <p>This will disable all unprivileged calls to bpf().</p>

      <p>Next create the <b>ptrace_scope.conf</b> file</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/ptrace_scope.conf
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          kernel.yama.ptrace_scope=2
        </p>
      </blockquote>

      <p>NOTE* THIS WILL BREAK SOME WINE/PROTON GAMES FROM LAUNCHING. This makes only processes with the CAP_SYS_PTRACE flag are able to use ptrace. Ptrace is a system call that allows the
        program to change and inspect a running process which would allow an attacker to see and potentially compromise running programs.</p>

      <p>Next create the <b>kexec.conf</b> file</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/kexec.conf
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          kernel.kexec_load_disabled=1
        </p>
      </blockquote>

      <p>This will disable kexec which can be used to replace the current running kernel.</p>

      <p>Next add the <b>sysrq.conf</b> file</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/sysrq.conf
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          kernel.sysrq=0
        </p>
      </blockquote>

      <p>This will disable the SysRq key which exposes tons of potentially dangerous debugging functionality to unprivileged, local users.</p>

      <p>next create the <b>unprivileged_users_clone.conf</b> file</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/unprivileged_users_clone.conf
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          kernel.unprivileged_userns_clone=0
        </p>
      </blockquote>

      <p>This will disable unprivileged user namespaces. User namespaces can allow for privilege escalation and this will restrict them to being root only. Some sandboxing programs such as
        bubblewrap may break but can usually be fixed by making sandbox binaries setuid.</p>

      <p>You should consider running a Linux Hardened version of the kernel however keep in mind you will lose things like bluetooth support by doing this. If this is something you are interested
        in running to secure your kernel even further you can read your official documentation from your distro. For most it will just require downloading linux-hardened and linux-hardened-headers
        and then if you use GRUB you will need to rebuild it with grub-mkconfig. If you wanted to take your security even further you can compile your kernel from source which will give you unique
        kernel keys. You can also check out GRSecurity for extra patches however they do cost money you can check out there page here
        - <a className="text-red hover:underline" href="https://grsecurity.net/">https://grsecurity.net/</a></p>

      <h2 className="flex text-lg justify-center font-semibold"><a id="bootloader">Bootloader Parameters</a></h2>

      <p>Now we will move into the Bootloader parameters I would recommend using GRUB as your bootloader however either GRUB, Syslinux or systemd-boot will work for these.</p>

      <p>If you are using <b>GRUB</b> you edit your boot parameters running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/default/grub
        </p>
      </blockquote>

      <p>and you can add the following parameters to the end of GRUB_CMDLINE_LINUX_DEFAULT=""</p>

      <p>If you are using <b>Syslinux</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /boot/syslinux/syslinux.cfg
        </p>
      </blockquote>

      <p>and you can apply your parameters to the APPEND line.</p>

      <p>If you are using <b>Systemd-boot</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /boot/loader/entries/arch.conf
        </p>
      </blockquote>

      <p>and you can add them to the end of the options line. If you cannot edit the parameters from the boot menu, you may need to edit <b>/boot/loader/loader.conf</b> and add editor 1 to enable editing.
        If on another distro it probably won't be called arch.conf you can do</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          ls /boot/loader/entries/
        </p>
      </blockquote>

      <p>to see what the configuration file is called.</p>

      <p>Next you need to figure out what you want to run AppArmor or SELinux. SELinux is more secure in my opinion but can be a lot more work to setup for your distro compared to AppArmor.</p>

      <h4 className="text-lg font-semibold">AppArmor</h4>

      <p>AppArmor - <a className="text-red hover:underline" href="https://www.apparmor.com/">https://www.apparmor.com/</a></p>

      <p>For App Armor you should just need to install the apparmor package for Arch that would be</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo pacman -S apparmor
        </p>
      </blockquote>

      <p>and enable the service with</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo systemctl enable apparmor.service
        </p>
      </blockquote>

      <p>on Debian based Distros (Ubuntu, Mint, Kali, etc)</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo apt-get install apparmor apparmor-utils auditd
        </p>
      </blockquote>

      <p>on SUSE based distros (OpenSUSE, idk anymore...)</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          zypper install libapparmor apparmor-profiles apparmor-utils apparmor-parser yast2-apparmor
        </p>
      </blockquote>

      <p>for Void Linux</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo xbps-install apparmor
        </p>
      </blockquote>

      <p>on RedHat based distros (Fedora, Quebes, etc) to my understanding AppArmor is not supported.</p>

      <p>You can then enable AppArmor by adding</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          apparmor=1 security=apparmor
        </p>
      </blockquote>

      <p>to your bootloader parameters.</p>

      <h4 className="text-lg font-semibold">SELinux</h4>

      <p>If your going the SELinux route you can follow the guides below. I would recommend going this route.</p>

      <p><b>Arch</b> - <a className="text-red hover:underline" href="https://wiki.archlinux.org/title/SELinux ">https://wiki.archlinux.org/title/SELinux</a><br />
        <b>Debian</b> - <a className="text-red hover:underline" href="https://wiki.debian.org/SELinux/Setup">https://wiki.debian.org/SELinux/Setup</a><br />
        <b>Fedora</b> - <a className="text-red hover:underline" href="https://docs.fedoraproject.org/en-US/quick-docs/getting-started-with-selinux/#getting-started-with-selinux-selinux-states-and-modes">https://docs.fedoraproject.org/en-US/quick-docs/getting-started-with-selinux/#getting-started-with-selinux-selinux-states-and-modes</a><br />
        <b>Gentoo</b> - <a className="text-red hover:underline" href="https://wiki.gentoo.org/wiki/SELinux/Installation">https://wiki.gentoo.org/wiki/SELinux/Installation</a><br />
        <b>Mint</b> - <a className="text-red hover:underline" href="https://forums.linuxmint.com/viewtopic.php?p=1236610#p1236610">https://forums.linuxmint.com/viewtopic.php?p=1236610#p1236610</a><br />
        <b>RedHat</b> - <a className="text-red hover:underline" href="https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/using_selinux/getting-started-with-selinux_using-selinux#selinux-states-and-modes_getting-started-with-selinux">https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/using_selinux/getting-started-with-selinux_using-selinux#selinux-states-and-modes_getting-started-with-selinux</a><br />
        <b>Ubuntu</b> - <a className="text-red hover:underline" href="https://wiki.ubuntu.com/SELinux">https://wiki.ubuntu.com/SELinux</a><br /></p>

      <p>Next we are going to add the other Bootloader parameters starting with the</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          slab_nomerge
        </p>
      </blockquote>

      <p>This with disable slab merging. For those curious a slab is a set of one or more contiguous pages of memory set aside by the slab allocator for an individual cache.
        If multiple different subsystems wanted to allocate separate 128-byte objects without any special properties, they wouldn't each get separate slab types with separate slabinfo entries,
        instead would be all merged into one slab type and thus one slabinfo entry. This can be exploited by an attacker and thus should be disabled.</p>

      <p>Next add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          slub_debug=FZ
        </p>
      </blockquote>

      <p>This will enable sanity checks (F) and redzoning (Z). Sanity checks make sure that the memory has been overwritten correctly. Redzoning adds extra areas around slabs that detect when
        a slab is overwritten past its real size, which can help detect overflows. If you are interested in other parameters that can be used you can read the linux kernel docs found here
        - <a className="text-red hover:underline" href="https://github.com/torvalds/linux/blob/master/Documentation/vm/slub.rst">https://github.com/torvalds/linux/blob/master/Documentation/vm/slub.rst</a></p>

      <p>Next add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          init_on_alloc=1 init_on_free=1
        </p>
      </blockquote>

      <p>This will zero out memory during allocation and free time to prevent leaking any secrets in memory.</p>

      <p>Next add this if you use ECC Ram (Xeon, EPYC, Power9, etc)</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          mce=0
        </p>
      </blockquote>

      <p>This will cause the kernel to panic on any uncorrectable errors in memory which could be exploited.</p>

      <p>Next add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          pti=on
        </p>
      </blockquote>

      <p>This enables Kernel Page Table Isolation which mitigates Meltdown and prevents some KASLR bypasses. For those unfamiliar with the Meltdown exploit you can read more about it here
        - <a className="text-red hover:underline" href="https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)">https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)</a></p>

      <p>Next add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          mds=full,nosmt
        </p>
      </blockquote>

      <p>This will enable all mitigations for the MDS vulnerability and disable SMT. Disabling hyperthreading may have a significant performance gain as you will lose half of your threads.
        If you do not wish to disable hyperthreading just remove the <b>,nosmt</b> part of the line. By not disabling hyperthreading you may be at risk of getting a Spectre attack which you
        can read about here - <a className="text-red hover:underline" href="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)">https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)</a></p>

      <p>Next add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          module.sig_enforce=1
        </p>
      </blockquote>

      <p>This forces the kernel to only load modules signed with a valid key which increases security as it makes it harder to load malicious kernel modules. This prevents all out-of-tree
        kernel modules from being loaded. Some modules such as virtualbox wireguard and nvidia drivers may not load and will require a dkms module as a workaround. You can learn more about
        DKMS Modules here - <a className="text-red hover:underline" href="https://wiki.archlinux.org/title/Dynamic_Kernel_Module_Support">https://wiki.archlinux.org/title/Dynamic_Kernel_Module_Support</a></p>

      <p>Next add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          oops=panic
        </p>
      </blockquote>

      <p>This causes the kernel to panic on oopses. This will prevent the kernel from continuing to run any flawed processes which can be exploited. Kernel exploits sometimes also cause an
        oops in which this will also help prevent. If your system crashes when using this it could be due to a buggy driver so you may need to remove that driver or this parameter.</p>

      <p>We can install the microcode for the CPU which often provide bug fixes. They are found in ucode packages and can be installed on your distro by installing either the intel-ucode or
        amd-ucode packages. You can install both if you really wanted to.</p>

      <p>Next we want to one of the following lines to the end of our Bootloader configuration options.</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          amd-iommu=on
        </p>
      </blockquote>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          intel-iommu=on
        </p>
      </blockquote>

      <p>This will enable IOMMU to help prevent DMA attacks.</p>

      <p>Next we can add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          lockdown=confidentiality
        </p>
      </blockquote>

      <p>This will enable kernel lockdown which will lock down in the many ways userspace can escalate to kernel mode.</p>

      <p>After you have applied these parameters we can move on, if you are using GRUB just run the command below to reconfigure GRUB.</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo grub-mkconfig -o /boot/grub/grub.cfg
        </p>
      </blockquote>

      <h2 className="flex text-lg justify-center font-semibold"><a name="mac">Mandatory Access Control (MAC)</a></h2>

      <p>The MAC system gives tighter control over what a program has access to. This means we can prevent our browser from having access to our entire home directory or another application that
        may only need access to 1 specific folder. This will prevent any exploits from attacking outside of that specific directory the application is aloud to access.</p>

      <p>If you selected to use AppArmor over SELinux as your MAC you can create create profiles by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          aa-genprof /usr/bin/(program)
        </p>
      </blockquote>

      <p>and of course replace the (program) with a name like firefox for example. We can then start using the program as normal and AppArmor will automatically detect what files it needs to have
        access to and will add them to the profile. You can then check the profile manually to make sure everything is correct as it probably won't cover everything the application will do.</p>

      <p>If you want to take it even further. You can setup a system-wide AppArmor policy by using an initramfs hook to confine systemd. You can find out more about that here
        - <a className="text-red hover:underline" href="https://gitlab.com/apparmor/apparmor/-/wikis">https://gitlab.com/apparmor/apparmor/-/wikis/FullSystemPolicy</a></p>

      <p>If you chose the SELinux route their's 2 ways of setting it up the first is targeted policy which is the most common use case and Multi-Level-Security (MLS). The configuration should
        be located at <b>/etc/selinux/config</b>. You can use one of the following documentation to set SELinux up how you would like.</p>

      <p><b>Targeted</b> - <a className="text-red hover:underline" href="https://github.com/SELinuxProject/selinux-notebook/blob/main/src/type_enforcement.md#type-enforcement">https://github.com/SELinuxProject/selinux-notebook/blob/main/src/type_enforcement.md#type-enforcement</a><br />
        <b>MLS</b> - <a className="text-red hover:underline" href="https://github.com/SELinuxProject/selinux-notebook/blob/main/src/mls_mcs.md">https://github.com/SELinuxProject/selinux-notebook/blob/main/src/mls_mcs.md</a></p>

      <h2 className="flex text-lg justify-center font-semibold"><a name="sandboxing">Sandboxing</a></h2>

      <p>A Sandbox allows us to run programs in an isolated environment that has no, or limited access to the rest of our system.</p>

      <p>Bubblewrap is a good choice to use on linux. Those coming from Windows may be familiar with programs such as Sandboxie this is a similar concept.</p>

      <p>I would advise switching to Wayland from Xorg if you can as Xorg does have some security flaws however most Window Managers don't support wayland and only a few Desktop Environments offer
        support for it. You may also notice more bugs with things like games when running Wayland. Both GNOME and KDE offer Wayland support so if you run one of these Desktops you should try switching.
        If your more into window managers you can check out Sway or WayfireWM.</p>

      <p>For those of us stuck with Xorg for the time being note that Xorg windows can have access to another window. This can exploited by screenshot programs or keyloggers and can even go as deep
        as recording the root password. We can somewhat combat this by running either Xpra (Remote desktop access) or Xephyr which is a nested X server which is what the majority of us will be using.
        We can install Xephyr on our system with one of the follow commands.</p>

      <p><b>Arch Based</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo pacman -S xorg-server-xephyr
        </p>
      </blockquote>

      <p><b>Debian Based</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo apt-get install xserver-xephyr
        </p>
      </blockquote>

      <p><b>Gentoo Based</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          emerge -av x11-base/xorg-server
        </p>
      </blockquote>

      <p><b>RedHat Based</b></p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          yum install xorg-x11-server-xephyr
        </p>
      </blockquote>

      <p>You can learn more about running Xephyr on your system here - <a className="text-red hover:underline" href="https://wiki.archlinux.org/title/Xephyr#Execution">https://wiki.archlinux.org/title/Xephyr#Execution</a></p>

      <h2 className="flex text-lg justify-center font-semibold"><a name="root">Root Tweaks</a></h2>

      <p>First we are going to run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/securetty
        </p>
      </blockquote>

      <p>and remove everything in the file that doesn't have a # in front of the line this will prevent login access to root in other TTYs.</p>

      <p>Next we can run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/pam.d/su
        </p>
      </blockquote>

      <p>and</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/pam.d/su-l
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          auth required pam_wheel.so use_uid
        </p>
      </blockquote>

      <p>or remove the # in front of the line if it already exists and then save both files.</p>

      <p>Next we can run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/ssh/sshd_config
        </p>
      </blockquote>

      <p>and under the Authentication: area you should see the line</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          PermitRootLogin no
        </p>
      </blockquote>

      <p>with a # in front of it just remove the # and save the file. If it doesn't exist you can add the line there and save the file.</p>

      <p>Next we can run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/pam.d/passwd
        </p>
      </blockquote>

      <p>and comment out all the lines which means make sure there is a # in front of each line. Then at the bottom add this line</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          password required pam_unix.so sha512 shadow nullok rounds=65536
        </p>
      </blockquote>

      <p>This will increase the number of hashing rounds that shadow will use. It will make an attacker have to compute a lot more hashes to be able to crack your password.
        Shadow uses 5000 rounds rounds and can be increased as much as you would like however your logins will be slower the more rounds you add. If you would like to add more
        rounds you can change the 65536 to a number you prefer. You will need to rehash your passwords after applying this setting. You can run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          passwd
        </p>
      </blockquote>

      <p>to change your root passwd and you can run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          passwd user
        </p>
      </blockquote>

      <p>replacing user with your username to change the users password.</p>

      <p>Some distributions start Xorg with Root access, with Xorg being such a large amount of code there can likely be exploits that can be used to gain root access. We can mitigate this
        issue by forcing Xorg to be run by the user by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/X11/Xwrapper.config
        </p>
      </blockquote>

      <p>and then adding the line</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          needs_root_rights = no
        </p>
      </blockquote>

      <p>we can check what's running as root and make sure Xorg isn't there by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo ps -U root -u root u
        </p>
      </blockquote>

      <p>If you would like to lock out the root login access completely you can run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          passwd -l root
        </p>
      </blockquote>

      <h2 className="flex text-lg justify-center font-semibold"><a name="extra">Extra Tweaks</a></h2>

      <p>We can start the extras by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/profile
        </p>
      </blockquote>

      <p>and then in the first couple lines you should see the umask line. By default it is set 022 which is not very secure. This allows every user read access across the entire system for
        newly created files. We want to change line to 0077 which will make it so the files can only be read by the owner. If you would like to understand what the numbers mean you can read this
        post here - <a className="text-red hover:underline" href="https://www.cyberciti.biz/tips/understanding-linux-unix-umask-value-usage.html">https://www.cyberciti.biz/tips/understanding-linux-unix-umask-value-usage.html</a></p>

      <p>USBs can be dangerous it should go without saying if you find one you shouldn't plug it into your system. If you have never seen a USBKill you can check there page here
        - <a className="text-red hover:underline" href="https://usbkill.com/">https://usbkill.com/</a> you can see a video off some tests with it here -
        <a className="text-red hover:underline" href="https://www.youtube.com/watch?v=I6bRoSK39io">https://www.youtube.com/watch?v=I6bRoSK39io</a> this is just 1 example. Another deadly example can be seen in this thread
        - <a className="text-red hover:underline" href="https://unix.stackexchange.com/questions/65891/how-to-execute-a-shellscript-when-i-plug-in-a-usb-device">
          https://unix.stackexchange.com/questions/65891/how-to-execute-a-shellscript-when-i-plug-in-a-usb-device</a> where an sh script can be run as soon as the device is plugged in gaining
        direct access of the system.</p>

      <p>You can install USBGuard and set up a configuration file to help with this but for something like a USBKill it will send power to the USB once its plugged in you would have to disable
        the ports in your BIOS to prevent something like that. Besides disabling in the BIOS as not every System will have that option, you can also add-on the word <b>nousb</b> at the end of the
        boot parameters covered earlier to prevent USBs from being read this won't block power to the device though so a USBKill attack is still possible. You can read more about USBGuard here
        - <a className="text-red hover:underline" href="https://usbguard.github.io/documentation/configuration.html">https://usbguard.github.io/documentation/configuration.html</a></p>

      <p>If your running the linux-hardened kernel you can also add this sysctl configuration setting by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/deny_new_usb
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          kernel.deny_new_usb=1
        </p>
      </blockquote>

      <h4 className="text-lg font-semibold">Direct Memory Attacks (DMA)</h4>

      <p>Next we can try to combat Direct Memory Attacks (DMA). This requires disabling Firewire which is an old bus system made by Apple that isn't really used today if you have a specific need for
        one of these ports such as an old iPod or something then be sure to not disable this.</p>

      <p>Next thing that will be disable in this config is Thunderbolt, due note not all USB Type-C connections are Thunderbolt. Thunderbolt can be used for many things such as eGPU, Docks, Displays,
        etc. Some laptops that only have USB-C ports like the Dell XPS or a Macbook rely on Thunderbolt for everything you plan to really do with it like using a display or a dock so it's best to not
        disable this unless you know your not using these features.</p>

      <p>To set these changes we can run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/modprobe.d/blacklist-dma.conf
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          install firewire-core /bin/true<br />
          install thunderbolt /bin/true
        </p>
      </blockquote>

      <p>Of course just remove the line for Thunderbolt or Firewire if you need them.</p>

      <h4 className="text-lg font-semibold">Core Dumps</h4>

      <p>Next thing we want to take care of is our Core Dumps. We are going to start with our sysctl by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/sysctl.d/coredump.conf
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          kernel.core_pattern=|/bin/false
        </p>
      </blockquote>

      <p>Next we will disable our systemd coredumps if your running a different init system like runit then you can skip this.</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/systemd/coredump.conf.d/custom.conf
        </p>
      </blockquote>

      <p>if the directory doesn't exist it will show a message at the bottom of the nano editor and won't let you save you will need to exit and run this command first.</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo mkdir /etc/systemd/coredump.conf.d/
        </p>
      </blockquote>

      <p>Then you can create the file and add this</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          [Coredump]
          Storage=none
        </p>
      </blockquote>

      <p>Then we can disable ulimit dumps. ulimit “ulimit” reports the resource limit of the current user.</p>

      <p>We can disable this dump by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/security/limits.conf
        </p>
      </blockquote>

      <p>in this file we can hold the down arrow to move to the bottom of the file above the line that says <b>#End of file</b> we will add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          * hard core 0
        </p>
      </blockquote>

      <h4 className="text-lg font-semibold">NTP</h4>

      <p>Next we can run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-lg font-semibold">
          sudo timedatectl set-ntp 0
        </p>
      </blockquote>

      <p>and then run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo systemctl disable systemd-timesyncd.service
        </p>
      </blockquote>

      <p>This will disable NTP (Network Time Protocol). If your time becomes messed up makes sure its correct in the BIOS and you can use timedatectl to manually set your time.
        By disabling this we resist tracking as the time set on the computer is not an active telling of our location since its manually set. NTP also allows for the possibility of having
        a replay attacks which you can read more about here - <a className="text-red hover:underline" href="https://en.wikipedia.org/wiki/Replay_attack">https://en.wikipedia.org/wiki/Replay_attack</a></p>

      <h4 className="text-lg font-semibold">Editing files as root (vi and nano)</h4>

      <p>It is unrecommended to run ordinary text editors as root because many text editors can do more than edit text files and this can be exploited. You can try this by opening vi as root by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo vi
        </p>
      </blockquote>

      <p>If you enter enter ":sh". You will now have a root shell with access to your entire system which an attacker can easily exploit.</p>

      <p>we can use sudoedit to combat this. sudoedit copies the file to a temporary location, then opens the text editor as an ordinary user. Then it will edit the temporary file and overwrite the
        original file as the root user. This way, the actual editor doesn't run as root. To use sudoedit run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudoedit /path/to/file
        </p>
      </blockquote>

      <p>By default it will use vi but the default editor can be changed by setting the EDITOR or SUDO_EDITOR environment variable. If you use nano you can run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          EDITOR=nano sudoedit /path/to/file
        </p>
      </blockquote>

      <p>If you use nano we can set that to be the default when sudoedit is run by setting an environment variable. First run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/environment
        </p>
      </blockquote>

      <p>scroll down to the bottom and edit or add the lines</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          EDITOR=nano sudoedit /path/to/file
        </p>
      </blockquote>

      <p>make sure there's no # in front of it either.</p>

      <h2 className="flex text-lg justify-center font-semibold"><a name="blacklist">Blacklisting</a></h2>

      <h4 className="text-lg font-semibold">Network Protocols</h4>

      <p>First thing we are going to want to do for this section is create</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/modprobe.d/uncommon-network-protocols.conf
        </p>
      </blockquote>

      <p>and inside this file we want to put</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          install dccp /bin/true<br />
          install sctp /bin/true<br />
          install rds /bin/true<br />
          install tipc /bin/true<br />
          install n-hdlc /bin/true<br />
          install ax25 /bin/true<br />
          install netrom /bin/true<br />
          install x25 /bin/true<br />
          install rose /bin/true<br />
          install decnet /bin/true<br />
          install econet /bin/true<br />
          install af_802154 /bin/true<br />
          install ipx /bin/true<br />
          install appletalk /bin/true<br />
          install psnap /bin/true<br />
          install p8023 /bin/true<br />
          install llc /bin/true<br />
          install p8022 /bin/true
        </p>
      </blockquote>

      <p>You may think since it says true that we are loading all these but we are not. "install" basically tells modprobe to run a command instead of loading the module. /bin/true is
        a command that returns 0 which will do nothing. When put together it tells the kernel to run /bin/true instead of loading the module, which will prevent the module from being loaded.</p>

      <h4 className="text-lg font-semibold">Filesystems</h4>

      <p>Lastly we can Blacklist uncommon filesystems. We can run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/modprobe.d/uncommon-filesystems.conf
        </p>
      </blockquote>

      <p>and inside put</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          install cramfs /bin/true<br />
          install freevxfs /bin/true<br />
          install jffs2 /bin/true<br />
          install hfs /bin/true<br />
          install hfsplus /bin/true<br />
          install squashfs /bin/true<br />
          install udf /bin/true
        </p>
      </blockquote>

      <p>Now by all means if you need some of these like HFS for reading macOS drives then remove that line.</p>

      <h2 className="flex text-lg justify-center font-semibold"><a name="fstab">FSTAB</a></h2>

      <p>Please make sure you actually have all these partitions before setting these If you have only some of them then only set some of them.</p>

      <p>To open your fstab config you can run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/fstab
        </p>
      </blockquote>

      <p>Your going to want to find each of your drives mount and in the options line it may not say defaults but your just going to want to add the following after what you have</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          <pre>UUID=xxxx     /          ext4    defaults                           0 1</pre>
          <pre>UUID=xxxx     /tmp       ext4    defaults,nosuid,noexec,nodev       0 1</pre>
          <pre>UUID=xxxx     /home      ext4    defaults,nosuid,nodev              0 1</pre>
          <pre>UUID=xxxx     /var       ext4    defaults,nosuid                    0 1</pre>
          <pre>UUID=xxxx     /boot      ext4    defaults,nosuid,noexec,nodev       0 1</pre>
          <pre>UUID=xxxx     /var/tmp   ext4    defaults,bind,nosuid,noexec,nodev  0 1</pre>
        </p>
      </blockquote>

      <p>make sure to replace ext4 with the Filesystem your using for example xfs. The 2 numbers at the end mean Dumping and Fscking so 0 dumping is what we want and the second number as 1 to check the partitions.</p>

      <p><b>nosuid</b> - Do not allow setuid or setgid bits.<br />
        <b>noexec</b> - Do not allow execution of any binaries on the filesystem.<br />
        <b>nodev</b> - Do not interpret devices on the file system.</p>

      <h2 className="flex text-lg justify-center font-semibold"><a name="lock-bootloader">Password Locking Bootloader</a></h2>

      <p>We are going to cover Password Locking any changes to the bootloader. You can set this up to prevent editing menu entries and the command line meaning an attacker won't be able to change the
        bootloader options we set earlier if they cracked through the encryption they will then require this password to do that so this password should be different than your Primary Partition encrypted
        password if you have one.</p>

      <h4 className="text-lg font-semibold">GRUB</h4>

      <p>We will need 2 terminals open to set this password up. In the first terminal run the command</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          grub-mkpasswd-pbkdf2
        </p>
      </blockquote>

      <p>It will then prompt you to enter the password you would like to use. after typing in your password 2x it will print out something like <b>PBKDF2 hash of your password is
        grub.pbkdf2.sha512.10000.xxxxxxx</b> we need the <b>grub.pbkdf2.sha512.10000.</b> part and all the numbers and letters after it. Keep this terminal open and in the second terminal run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/grub.d/40_custom
        </p>
      </blockquote>

      <p>and at the bottom of the file add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          set superusers="root"<br />
          password_pbkdf2 root xxxxxxx
        </p>
      </blockquote>

      <p>where xxxxxxx is the part of the password you got from the last terminal. If your terminal doesn't let you copy and paste with Control + C and Control + V you can try copying with
        Control + Shift + C and Pasting with Control + Shift + V or look at the documentation for your terminal.</p>

      <p>Next we can create another optional setting if you just want to password lock the boot parameters from being edited and access to the GRUB Console which is basically all we want to do,
        however you can have it password protect it all like executing a menu entry etc. If you want it be setup where its protecting executing a menu and what not just skip this part. We are going to run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /boot/grub/grub.cfg
        </p>
      </blockquote>

      <p>scroll down a little bit until you see the line <b>### BEGIN /etc/grub.d/10_linux ###</b> you can also press Control + W and type <b>menuentry</b> as 1 word then enter and Control + W and
        enter over and over until you reach this spot. Once here you just want to add <b>--unrestricted</b> after your entries name so as an example</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          menuentry 'Arch Linux' --unrestricted
        </p>
      </blockquote>

      <p>leave everything after it you just want to add that one option to the first entry.</p>

      <p>Lastly we can rebuild our Bootloader configuration by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo grub-mkconfig -o /boot/grub/grub.cfg
        </p>
      </blockquote>

      <h4 className="text-lg font-semibold">SysLinux</h4>

      <p>We need to start by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /boot/syslinux/syslinux.cfg
        </p>
      </blockquote>

      <p>and add the line</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          MENU MASTER PASSWD (password)
        </p>
      </blockquote>

      <p>replace (password) with the password you want to use. If you want to also set a menu password then inside the same file add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          MENU PASSWD (password)
        </p>
      </blockquote>

      <p>Again replace (password) with the password you want to use. Another thing to note is that the passwords can either be plaintext or hashed with MD5, SHA-1, SHA-2-256 or SHA-2-512.
        If you would like to use one of these hashing algorithms check out this page -
        <a className="text-red hover:underline" href="https://emn178.github.io/online-tools/sha256.html">https://emn178.github.io/online-tools/sha256.html</a></p>

      <h4 className="text-lg font-semibold">Systemd-boot</h4>

      <p>For Systemd-boot we need to run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /boot/loader/loader.conf
        </p>
      </blockquote>

      <p>and add the line</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          editor no
        </p>
      </blockquote>

      <p>This will disable all further editing to the Bootloader parameters we set earlier. systemd-boot does not officially support password protecting the kernel parameters however you can
        use this community tool to add a password if you would like - <a className="text-red hover:underline" href="https://github.com/kitsunyan/systemd-boot-password">https://github.com/kitsunyan/systemd-boot-password</a></p>

      <h2 className="flex text-lg justify-center font-semibold"><a name="lynis">Lynis</a></h2>

      <p>For those unfamiliar lynis is an enterprise application for macOS, Linux and BSD based systems. You can read more about it here -
        <a className="text-red hover:underline" href="https://cisofy.com/">https://cisofy.com/</a></p>

      <p>With all of these tweaks so far this should bring you over 65 score and on some distros into the high 70s. Keep in mind this is before any Network settings have been set.
        I am working on coming out with a networking guide next and will share it here.</p>

      <p>Most likely you will have systemd errors if your running on a distro with systemd you can check these issues by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          /usr/bin/systemd-analyze security
        </p>
      </blockquote>

      <p>try to disable as many of these you dont need. If your not running a server you should remove things like SSH completely unless you have a very specific use case where you need to remote into your system.</p>

      <p>If you would further like to increase your lynis score make sure you can install ClamAV, Aide (note there's a special SELinux version if you opted to go that route), RKHunter and
        OpenVAS and make sure you don't just install these... make sure you enable them in your init system.</p>

      <p><b>AIDE</b> - <a className="text-red hover:underline" href="https://aide.github.io/">https://aide.github.io/</a><br />
        <b>ClamAV</b> - <a className="text-red hover:underline" href="https://www.clamav.net/">https://www.clamav.net/</a><br />
        <b>RKHunter</b> - <a className="text-red hover:underline" href="https://sourceforge.net/projects/rkhunter/">https://sourceforge.net/projects/rkhunter/</a><br />
        <b>OpenVAS</b> - <a className="text-red hover:underline" href="https://github.com/greenbone/openvas-scanner">https://github.com/greenbone/openvas-scanner</a></p>

      <h2 className="flex text-lg justify-center font-semibold"><a name="best">Best Practices</a></h2>

      <p>Set your hostname to "host" by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          {"echo host >> /etc/hostname"}
        </p>
      </blockquote>

      <p>Set your username to "user" if you have multiple users you can name them "user1" and "user2"</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          {"sudo usermod -l user <old-name>"}
        </p>
      </blockquote>

      <p>if you are going with multiple users change the word user to the username you want. Then you can the home directory name by running</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo usermod -d /home/user -m user
        </p>
      </blockquote>

      <p>-d or --home flag will tell usermod where to set the new home directory. -m flag will copy the contents of the old home directory into the new one.</p>

      <p>If you are going to use a password manager I would recommend KeePassXC as its an offline storage of your passwords. Do not upload your .kdbx file to Google Drive or something
        just because it's encrypted. If you want a backup of the file store it on a USB or something.</p>

      <p>Remove software your not using.</p>

      <p>If your running Gentoo or Void Linux you may want to consider switching to musl from glibc as the code base is smaller and many software especially closed source ones are linked
        with glibc. To run these software on a musl system you will need to create and isolated mounting point on the system if there are any viruses spread this way this may help you combat them.</p>

      <p>As Richard Stallman once said "A smartphone is a computer - it's not built using a computer - the job it does is the job of being a computer. So, everything we say about computers, that the
        software you run should be free - you should insist on that - applies to smart phones just the same. And likewise to those tablets." I would recommend picking up a Google Pixel and looking at the
        project GrapheneOS which you can find a link to here - <a className="text-red hover:underline" href="https://grapheneos.org/">https://grapheneos.org/</a> If you would like to know why a Google
        Pixel you can read this article here - <a className="text-red hover:underline" href="https://dt.gl/tweetstorm-grapheneos/">https://dt.gl/tweetstorm-grapheneos/</a></p>

      <p>If your looking for a laptop with Coreboot support and hardware switches to disable some functions of the device you can check out the Purism Laptop -
        <a className="text-red hover:underline" href="https://puri.sm/">https://puri.sm/</a> and the Framework laptop (at the time of writing doesn't have Coreboot but is planned)
        - <a className="text-red hover:underline" href="https://frame.work/">https://frame.work/</a></p>

      <p>if you don't have one of these devices you can disable your Microphone and webcam through software however hardware switches cutting off the power to the devices is far more secure as it can't be
        tampered with. None the less to disable your webcam run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/modprobe.d/blacklist-webcam.conf
        </p>
      </blockquote>

      <p>and add</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          install uvcvideo /bin/true
        </p>
      </blockquote>

      <p>For the microphone sometimes it can be tied to the speakers so just keep in mind that by disabling it you may lose your speakers output as well. It may be a better idea to try to unplug the
        ribbon cable connecting that module and seeing if the system will still POST fine. Again if you really wanted to you can run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo ls /proc/asound/modules
        </p>
      </blockquote>

      <p>it should give back a name which you can then run</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          sudo nano /etc/modprobe.d/blacklist-mic.conf
        </p>
      </blockquote>

      <p>and put</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="font-semibold">
          install (module-name) /bin/true
        </p>
      </blockquote>

      <p>just replace the (module-name) with the name it gave you. You can also check you BIOS to see if you can disable it in there to.</p>

      <p>You should lock your BIOS with a separate password this will prevent people from being able to boot off a USB Drive to bypass bootloader protections on your device and be able to just focus on your
        encrypted partitions. Of course this can be bypassed by just removing the storage drive from the system but it's still an extra step for any in person attacker especially if they are trying to leave
        everything the way it was so you didn't know the system has been touched.</p>

      <p>You can also check out the company Yubico to pick up a YubiKey here - <a>https://www.yubico.com/ca/works-with-yubikey/catalog/linux/</a> This will allow you to not only have the password for user/root
        but also require the system to have the yubikey plugged into the device to be able to login. They even offer some Keys with fingerprint scanners so they would need the YubiKey and your fingerprint.
        You can also pick up multiple YubiKeys or use the same key to lock access to accounts in some applications such as KeePassXC there is a good thread about this here if you are interested in reading
        the pros and cons of something like this - <a className="text-red hover:underline" href="https://security.stackexchange.com/questions/201345/is-it-reasonable-to-use-keepassxc-with-yubikey">
          https://security.stackexchange.com/questions/201345/is-it-reasonable-to-use-keepassxc-with-yubikey</a></p>

      <p>If you need to use a Virtual Machine please use virt-manager to setup a KVM or QEMU based virtual machine, Gnome Boxes is another good choice. Virtual box has many issues which you can read about
        in this thread from whonix - <a className="text-red hover:underline" href="https://www.whonix.org/wiki/KVM#Why_Use_KVM_Over_VirtualBox.3F">https://www.whonix.org/wiki/KVM#Why_Use_KVM_Over_VirtualBox.3F</a></p>
    </div>
  )
}
