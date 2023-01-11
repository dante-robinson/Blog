import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Dante's Blog</title>
        <meta
          name="description"
          content="My personal blog where I talk about Linux, Crypto and other thoughts."
        />
      </Head>

      <div className="flex flex-col w-[80vw] px-[3vw]">
        <div>
          <p className="text-center py-[1.5vh]">
            Thanks for visiting my Blog. You can find a list of my most recent
            posts to the right or below depending on your screen size, The
            source code for this blog is fully open-sourced and can be found on
            my github page which can be found in the footer or clicking{" "}
            <a
              className="text-blue hover:text-red underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/dante-robinson/Blog"
            >
              here
            </a>
            . The entire code base is licensed under BSD-3-Clause which requires
            forks to retain the same license however unlike a GPL License the
            BSD License does not require you to open source your code if you
            don't want to.
          </p>
        </div>

        <div className="flex md:flex-row flex-col">
          <div className="h-full text-center py-[1.5vh] md:w-[40vw] space-y-[1vh]">
            <h3 className="text-lg font-bold">About Me</h3>
            <p>
              For those interested I am someone who has always been interested
              in computers and have used practically everything out there from
              MXM Upgradable laptops to Dual Socket CPU builds. I have been
              using computers since a very young age and have acquired a lot of
              knowledge over this time that I hopefully can share in an easy to
              read manner on this blog.
            </p>

            <p>
              Politically I lean heavily on the right, if I were to identify
              myself as a ideology it would be libertarian however I don't agree
              with everything from any specific party. I rarely vote as I find
              politicians liars they create the problems then campaign around
              the solution it's stupid. Polcompball Wiki has a good description
              and covers likes and dislikes on ideologies if you are unfamiliar
              which can be found{" "}
              <a
                className="text-blue hover:text-red underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://polcompball.miraheze.org/wiki/Libertarianism"
              >
                here
              </a>
              . For those in the know it should go without saying that
              economically I lean heavily toward the Austrian school of thought
              which for those unaware what that means I have provided a
              comparison to the Keynesian school of thought{" "}
              <a
                className="text-blue hover:text-red underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.analyticssteps.com/blogs/what-austrian-economics-austrian-economics-vs-keynesian-economics"
              >
                here
              </a>
              .
            </p>

            <p>
              Based on that it should be no surprise I am interested in
              Cryptocurrencies based on the original value which is to remove
              government from money. A lot of people entering the space post
              2016 I would say are here to make fiat (government money dollars,
              euros, etc.). I like to read many books and posts online that most
              would call long/boring about economics and the system. I want to
              fully understand things before making any opinions, because of
              this I am very open minded on topics and try to understand every
              side of things. I also wish to discuss those conclusions here. If
              you don't understand cryptocurrency or are interested in learning
              why bitcoin is important vs the altcoins most people buy these
              days I would strongly suggest reading{" "}
              <b>The Bitcoin Standard by Saifedean Ammous</b>.
            </p>

            <p>
              I am at altruist at the core and believe in giving back more than
              we receive I hope to give back to others with many different
              guides on this blogs covering a range of topics. I encourage
              everyone to give back something to those in need, I have linked 2
              awesome youtube channels below on this topic.
            </p>

            <div className="flex justify-between px-[8vw]">
              <a
                className="text-blue hover:text-red"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/c/BIPhakathi"
              >
                BIPhakathi
              </a>

              <a
                className="text-blue hover:text-red"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UC6lIbuv_ai9ml_B3IVAgxrw"
              >
                Goodness in People
              </a>
            </div>
          </div>

          <div className="text-center py-[1.5vh] justify-center md:w-[40vw] md:space-y-[1vh] space-y-[1.5vh]">
            <h4 className="text-lg font-bold">Recent Posts</h4>

            <ul className="space-y-[1vh] px-[1vw] lg:pl-[7.5vw] xl:pl-[9.5vw] 2xl:pl-[11vw]">
              <li className="flex flex-row lg:w-[27vw] xl:w-[21vw] 2xl:w-[17.5vw] justify-between">
                <div className="text-blue hover:text-red">
                  <Link href="/Crypto/CommunistCBDC">
                    <a>Communist CBDCs</a>
                  </Link>
                </div>
                <p>Jan 11, 2023</p>
              </li>
              <li className="flex flex-row lg:w-[27vw] xl:w-[21vw] 2xl:w-[17.5vw] justify-between">
                <div className="text-blue hover:text-red">
                  <Link href="/Crypto/XRPXLMScam">
                    <a>XRP & XLM The biggest scams</a>
                  </Link>
                </div>
                <p>Oct 7, 2022</p>
              </li>
              <li className="flex flex-row lg:w-[27vw] xl:w-[21vw] 2xl:w-[17.5vw] justify-between">
                <div className="text-blue hover:text-red">
                  <Link href="/Linux/GentooGlibctomusl">
                    <a>Switching Gentoo Glibc to musl</a>
                  </Link>
                </div>
                <p>Sept 26, 2022</p>
              </li>
              <li className="flex flex-row lg:w-[27vw] xl:w-[21vw] 2xl:w-[17.5vw] justify-between">
                <div className="text-blue hover:text-red">
                  <Link href="/Linux/Gentoomusl">
                    <a>My experience on Gentoo Musl</a>
                  </Link>
                </div>
                <p>Sept 16, 2022</p>
              </li>
              <li className="flex flex-row lg:w-[27vw] xl:w-[21vw] 2xl:w-[17.5vw] justify-between">
                <div className="text-blue hover:text-red">
                  <Link href="/Linux/SecurityGuide">
                    <a>Linux Security Guide</a>
                  </Link>
                </div>
                <p>Feb 13, 2022</p>
              </li>
              <li className="flex flex-row lg:w-[27vw] xl:w-[21vw] 2xl:w-[17.5vw] justify-between">
                <div className="text-blue hover:text-red">
                  <Link href="/Linux/PerformanceGuide">
                    <a>Linux Performance Tweaks Guide</a>
                  </Link>
                </div>
                <p>Oct 30, 2021</p>
              </li>
              <li className="flex flex-row lg:w-[27vw] xl:w-[21vw] 2xl:w-[17.5vw] justify-between">
                <div className="text-blue hover:text-red">
                  <Link href="/Linux/ArchGuide">
                    <a>Arch Linux Install Guide</a>
                  </Link>
                </div>
                <p>Oct 30, 2021</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-[5vh] flex h-full w-full justify-center">
          <p>
            * All opinions on this blog are my own you are more than welcome to
            disagree with anything.
          </p>
        </div>
      </div>
    </div>
  );
}
