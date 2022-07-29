import "../styles/global.css"
import { useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faBitcoin } from "@fortawesome/free-brands-svg-icons"
import LinuxModal from "../components/Modals/Linux.js"
import Link from "next/link"
import OnClickOutside from "../components/OnClickOutside.js"

function MyApp({ Component, pageProps }) {
  const [LinuxModalOpen, setLinuxModalOpen] = useState(false)
  const LinuxRef = useRef()
  const LinuxButtonRef = useRef()

  OnClickOutside(LinuxRef, LinuxButtonRef, () => setLinuxModalOpen(false))

  return (
    <div className="bg-background-dark pb-[10vh] min-h-screen w-screen">
      <div className="flex w-screen h-[10vh] items-center justify-center">
        <Link href="/"><a className="text-3xl text-blue font-bold">Dante's Blog</a></Link>
      </div>

      <div className="flex w-screen justify-center">
        <div className="flex justify-center border-4 border-foreground-dark h-content min-h-[80vh] w-[80vw]">
          <div className="flex flex-col h-full w-full">
            <div className="py-2 h-content">
              <nav className="flex justify-center flex-row">
                <ul className="flex text-cyan font-semibold text-lg space-x-[1vw]">
                  <li >
                    <button className="hover:text-red1" ref={LinuxButtonRef} onClick={() => LinuxModalOpen ? setLinuxModalOpen(false) : setLinuxModalOpen(true)}>Linux</button>
                    {LinuxModalOpen && <LinuxModal LinuxRef={LinuxRef} setLinuxModalOpen={setLinuxModalOpen} />}
                  </li>
                  <li className="hover:text-red1">Crypto</li>
                </ul>
              </nav>
            </div>

            <div className="flex h-full w-full justify-center">
              <Component {...pageProps} />
            </div>

            <div className="text-sm relative my-[0.5vh] h-content w-full">
              <footer className="flex text-foreground text-sm justify-between">
                <div>
                  <a
                    href="https://cointr.ee/dante_robinson"
                  >

                    <FontAwesomeIcon
                      className="mx-[0.5vw]"
                      icon={faBitcoin}
                    />

                    CoinTree
                  </a>
                </div>

                <div>
                  <a
                    href="https://github.com/dante-robinson/Blog"
                  >
                    Source Code on Github

                    <FontAwesomeIcon
                      className="mx-[0.5vw]"
                      icon={faGithub}
                    />
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyApp
