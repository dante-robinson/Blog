import Head from "next/head";

export default function GentooGlibctomusl({ title }) {
  return (
    <div className="space-y-[1vh]">
      <Head>
        <title>{title ? title : "Gentoo Glibc to musl"}</title>
        <meta
          name="description"
          content="How to switch from a Gentoo Glibc install to musl without losing data."
        />
      </Head>

      <p className="flex justify-end">Sept 26, 2022</p>

      <h2 className="flex text-xl sm:text-2xl font-bold justify-center">
        Switching Gentoo Glibc to musl and vice versa easy
      </h2>

      <p>
        This guide expects that you are currently running a working Glibc or
        musl based Gentoo system. First of all at the time of writing this
        Gentoo is using 2 different profiles for glibc and musl which are 17.1
        for glibc and 17.0 for musl. The biggest difference between these
        profiles is the way they handle the symlink for libraries. 17.1 will
        place your 32 bit libraries in lib instead of lib32. musl doesn't offer
        32 bit support and hence doesnt need a lib64 directory so everything is
        placed in the lib directory.
      </p>

      <p>
        As many may be able to figure out based on that is that this will not be
        as simple as switching from a glibc desktop profile to a hardened one.
        For this we need to replace not only the file structure but also all
        your compiled binaries. This means you will need to do a system rebuild
        this does not mean you need to install and configure everything again
        just recompile it all thats it.
      </p>

      <p>
        Firstly I would strongly recommend not using the minimal boot ISO and
        downloading some other ISO for like PopOS or Linux Mint etc something
        with a GUI and Desktop you can play around in. Once in this environment
        you are going to want to download a musl stage 3 image which you can get
        from here or find a mirror close to you and download it from them
        faster.
      </p>

      <p>
        <b>Gentoo Downloads - </b>
        <a
          className="text-red break-all hover:underline"
          href="https://www.gentoo.org/downloads/"
        >
          https://www.gentoo.org/downloads/
        </a>
      </p>

      <p>
        <b>Gentoo Mirrors - </b>
        <a
          className="text-red break-all hover:underline"
          href="https://www.gentoo.org/downloads/mirrors/"
        >
          https://www.gentoo.org/downloads/mirrors/
        </a>
      </p>

      <p>
        You can pick up either the musl or musl hardened stage 3, I would
        recommend avoiding the clang/musl for the time being and switch to that
        profile or another profile from a repo that has clang support in the
        future once everything on the system is working under musl.
      </p>

      <p>
        We will need to mount the drive next if you are encrypted you will need
        to run cryptsetup LuksOpen devicename but I'm sure you already know all
        this. We will need to open the compressed stage3 as root so load another
        terminal and run sudo su then launch the default file manager in PopOS
        case you can do this by typing nautilus. Then go to the home directory
        of the user and open the archive wherever you saved it. Then inside the
        file explorer we can move to where you mounted the drive on /mnt
        Remember to only mount the drive to /mnt and don't do make-rslave and
        rbind yet. If you did do this run
      </p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          unmount -l /mnt/whatever
        </p>
      </blockquote>

      <p>
        On our mounted directory we need to delete the following folders
        <br />
        <b>/bin</b> - Where user executable binaries are stored (Need to all be
        recompiled with musl)
        <br />
        <b>/lib and /lib64</b> - Where libraries are stored (Need rebuilt with
        musl)
        <br />
        <b>/sbin</b> - Where system binaries are kept (Need rebuilt with musl)
        <br />
        <b>/usr</b> - Where basically all your installed binaries are kept (Need
        recompiled with musl)
        <br />
        <b>/var/db/pkg</b> - Where gentoo keeps installed package data (If you
        don't delete this it will assume everything is still installed)
        <br />
      </p>

      <p>
        Be mindful of what you are deleting you can delete alot of things and
        replace them with musl defaults the main important things you want to
        keep is your <b>/etc/portage</b> folder this is where make.conf and
        package.use are saved and you also want to keep <b>/var/lib/portage</b>{" "}
        as this is where your world set is kept. I would recommend removing
        whatever default configs you don't need and keep the custom configs you
        already have to make it as close to a fresh install as possible.
      </p>

      <p>
        Then we can copy over every directory from the archive that you
        extracted or have open still. Then you should have a working stage 3
        system running musl which is basically a fresh install with all your
        data in your home directory and your world set with your config files in
        /etc. After this is extracted we can now proceed through a somewhat
        install process first your are going to want to enter your chroot by
        following this commands
      </p>

      <p>
        <a
          className="text-red break-all hover:underline"
          href="https://wiki.gentoo.org/wiki/Handbook:AMD64/Installation/Base#Mounting_the_necessary_filesystems"
        >
          https://wiki.gentoo.org/wiki/Handbook:AMD64/Installation/Base#Mounting_the_necessary_filesystems
        </a>
      </p>

      <p>
        You will need to refresh your ebuild directory as it's most likely gone
        you can do this by running
      </p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          emerge-webrsync
        </p>
      </blockquote>

      <p>
        Then double check your profile is not on the same glibc one as before by
        running
      </p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          eselect profile list
        </p>
      </blockquote>

      <p>
        If it is set you can change this to the proper musl one by running (Note
        - you need to run --force for musl profiles)
      </p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          eselect profile set --force number{" "}
        </p>
      </blockquote>

      <p>
        After this you should now install layman or eselect-repository and add
        some musl repositories
      </p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          emerge -av eselect-repository{" "}
        </p>
      </blockquote>

      <p className="flex justify-center">or</p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          emerge -av layman
        </p>
      </blockquote>

      <p>And add the following overlays</p>

      <p>
        <b>eselect</b>
        <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
          <p className="text-xs sm:text-sm break-all font-semibold">
            eselect repository enable musl && emaint -r musl
          </p>
        </blockquote>
        <b>layman</b>
        <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
          <p className="text-xs sm:text-sm break-all font-semibold">
            layman -a musl && emaint -r musl
          </p>
        </blockquote>
        <br />I would also recommend adding 11201111-overlay but that is up to
        you.
      </p>

      <p>
        After this I would recommend building your world set. You may need to
        remove some applications for your world set which you can find at{" "}
        <b>/var/lib/portage/world</b> (Remember it's in your mounted directory
        incase your using a CLI editor). You may also get a bunch of errors for
        overlays you may have been using on glibc you can sync these using the
        same name emaint command above just replace the overlay name. You can
        start to compile the world set by running
      </p>

      <blockquote className="bg-background border-2 border-magenta px-[1vw] py-[0.5vh]">
        <p className="text-xs sm:text-sm break-all font-semibold">
          emerge -e --keep-going @world
        </p>
      </blockquote>

      <p>
        I have added --keep-going to finish compiling everything regardless of
        failures. You can then see the list of failed packages and see what can
        be removed if they don't work on musl or try modifying your make.conf to
        make things work if possible.
      </p>

      <p>
        After this you can just finish the Gentoo install make sure your build a
        fresh kernel as well for musl as the glibc one may cause issues. musl
        doesn't have a locales so you can skip that section. If you want to
        switch back just do the same thing again with a glibc stage section. If
        you want to switch back just do the same thing again with a glibc stage
        3.
      </p>
    </div>
  );
}
