import Head from "next/head";

export default function Gentoomusl({ title }) {
  return (
    <div className="space-y-[1vh]">
      <Head>
        <title>{title ? title : "My experience on Gentoo Musl"}</title>
        <meta
          name="description"
          content="My experience on Gentoo musl over a couple weeks as a daily driver. Covering the good and the bad."
        />
      </Head>

      <p className="flex justify-end">Sept 16, 2022</p>

      <h2 className="flex text-xl sm:text-2xl font-bold justify-center py-[1vh]">
        My experience using Gentoo Musl
      </h2>

      <p>
        For the past month to month and a half I have been playing with musl on
        Gentoo as well as Clang/musl this post is a collection of my experience
        using it full time. For starters I think more people should switch to
        musl sounds like a bold statement for sure but majority of software is
        working fine out of the box and that's on Gentoo I would imagine Void
        and Alpine are easier however you would lose the ability to easily use
        the package manager to test and fix packages not installing without
        downloading the source code on those distros and manually building it. I
        installed apps like Lutris, Wine, OBS Studio, Kdenlive and Krita.
        Everything working just fine with GCC, with LLVM/Clang I did encounter
        alot more issues and needed to mess around alot to get things working
        but you can still get all those packages working by using the following
        2 repos. You should also add the gentoo patchset they are using to
        /etc/portage/patches they can help you compile things if you are using
        LLVM/Clang sometimes they make the packages not compile at all and you
        need to remove them no big deal.
      </p>

      <p className="py-[0.75vh]">
        <b>12101111 Overlay</b> -{" "}
        <a
          className="text-red break-all hover:underline"
          href="https://github.com/12101111/overlay"
        >
          https://github.com/12101111/overlay
        </a>
        <br />
        <b>Clang-Musl Overlay</b> -{" "}
        <a
          className="text-red break-all hover:underline"
          href="https://github.com/clang-musl-overlay/clang-musl-overlay"
        >
          https://github.com/clang-musl-overlay/clang-musl-overlay
        </a>
        <br />
        <b>Clang Musl Patchset</b> -{" "}
        <a
          className="text-red break-all hover:underline"
          href="https://github.com/clang-musl-overlay/gentoo-patchset"
        >
          https://github.com/clang-musl-overlay/gentoo-patchset
        </a>
        <br />
        <br />
        <b>Void Linux</b> -{" "}
        <a
          className="text-red break-all hover:underline"
          href="https://voidlinux.org/download/"
        >
          https://voidlinux.org/download/
        </a>
        <br />
        <b>Alpine Linux</b> -{" "}
        <a
          className="text-red break-all hover:underline"
          href="https://www.alpinelinux.org/downloads/"
        >
          https://www.alpinelinux.org/downloads/
        </a>
      </p>

      <p>
        For GCC the process is alot easier you should only need the native
        Gentoo musl repo however it seems alot of those fixes are pushed to main
        repo these days and are working fine. If you just program its a great
        way to lighten your system as there is no 32 Bit ABI Support which will
        save you on compiling things twice if you are doing this. As to a
        performance increase I would say there is none, however if you are
        looking for that lighter system this is an option to choose. Competition
        is good and supporting musl into mainstream is also good so we don't
        have to rely on GNU Apps for linux to function as much. You can read
        more about the functional differences between musl and glibc here.
      </p>

      <p>
        <a
          className="text-red break-all hover:underline"
          href="https://wiki.musl-libc.org/functional-differences-from-glibc.html"
        >
          https://wiki.musl-libc.org/functional-differences-from-glibc.html
        </a>
      </p>

      <p>
        So what doesn't work on musl can I replace my gaming setup from glibc to
        musl? Well no because there is no 32 Bit Support. You can run games with
        Wine 64 bit only through Lutris not alot though you will need to not use
        system libraries either, Steam however is not open source and thus can't
        be compiled. Discord is also not open sourced and can't be compiled thus
        can't work. You however can set up a separate chroot or use some like
        Conty to set one up for you to play games inside the performance
        difference is a couple % basically native. We will never get support for
        musl from Steam or Discord without having people running it creating
        demand similar to Linux support for games in general without people
        daily driving Linux.
      </p>

      <p>
        <b>Conty Chroot</b> -{" "}
        <a
          className="text-red break-all hover:underline"
          href="https://github.com/Kron4ek/Conty"
        >
          https://github.com/Kron4ek/Conty
        </a>
      </p>

      <p>
        If all you do is program and use a web browser you can make your system
        more light weight than just using Gentoo and installing KISS Linux. I
        recently tried this in a chroot and it works very nice around 100
        packages installed. I think this is a great amount for people using
        lower powered devices like a laptop where compiling all your own
        software will take to long to be worth it. KISS Linux however has
        similar to flaws to Linux From Scratch for anyone who has used that
        before in the fact that you
      </p>

      <p className="py-[0.75vh]">
        <b>A)</b> Cant download packages from a server near you and download
        directly from the source repo (unless setup in your own repo). This is a
        pro as you don't need to rely on a distro to handle packages for you. If
        that distro is abandoned you are left to move to something else. However
        it's also a con as it leads to slower download times something to be
        aware of.
        <br />
        <br />
        <b>B)</b> Have to make your own repo to download packages that are not
        currently in other people's repos. This is why I mentioned if you just
        do programming and basic tasks this is a better distro for you as
        everything will work with a few repos even kdenlive and krita. Making
        your own repo will require making package build files using shell. This
        is personally recommended so you can customize what's being installed
        into the packages similar to USE flags in Gentoo.
        <br />
        <br />
        <b>C)</b> Main repository in the install guide is basically dead you
        need to use the community forked repo to get updated packages as some
        outdated packages are no longer kept on the sources servers.
      </p>

      <p>
        If these are ok comprimises to you I would recommended checking it out
        otherwise a barebones Gentoo musl setup will be fine for you with
        slightly more packages and compiling needed, but you will be able to
        access new released packages manage USE flags easier and not forced to
        run your own repository.
      </p>

      <p>
        <b>KISS Linux</b> -{" "}
        <a
          className="text-red break-all hover:underline"
          href="https://kisslinux.org/"
        >
          https://kisslinux.org/
        </a>
      </p>

      <p>
        {" "}
        So even after these minor flaws I would still recommend people switch to
        musl? Yes! Not everyone for sure don't go recommending your grandma's
        first linux install to be on some musl based distro but those who are
        somewhat familiar with Linux and dont mind spending time here and there
        figuring things out to get them working I would recommend it runs very
        good. What about Clang/musl? Clang/musl is another beast I've spent
        literal days messing with this to get things working then it will work
        then mess up again I would say it needs alot more love and care to get
        working and wouldn't recommend it for a daily driven system unless you
        have alot of free time to maintain it. I would recommend compiling all
        your smaller packages with LLVM/Clang and use GCC for the large ones and
        the ones the small ones that failed using LLVM/Clang by setting Clang
        system wide and using GCC in your package.env for those few packages and
        then go from there. Will I be sticking with musl full time? Sadly not at
        this time. Gaming through a chroot just annoyed me having a system
        overtop of my current system. I have switched back to Gentoo glibc with
        GCC for the time being I may mess more around with system wide
        LLVM/Clang in the future on glibc. I will be trying musl again sometime
        in the future and watching it's development however it's more on apps
        like Steam and Discord not being open sourced holding me back. Another
        option is for them to release a binary compiled against musl but again
        this is also unlikely.
      </p>
    </div>
  );
}
