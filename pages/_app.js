import "../styles/global.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function MyApp({ Component, pageProps }) {
  return (
  <div className="bg-background-dark h-screen w-screen">
    <div className="flex w-screen py-8 justify-center">
      <h1 className="text-3xl text-blue font-bold">Dante's Blog</h1>
    </div>

    <div className="flex w-screen justify-center">
      <div className="flex justify-center border-4 border-foreground-dark h-[80vh] w-[80vw]">
        <div className="flex flex-col h-full w-full">
          <div className="py-2 h-content">
            <nav className="flex justify-center flex-row">
              <ul className="flex text-cyan font-semibold text-lg space-x-[1vw]">
                <li className="hover:text-red1">Linux</li>
                <li className="hover:text-red1">Crypto</li>
              </ul>
            </nav>
          </div>

          <div className="flex h-full">
            <Component {...pageProps} />
          </div>
    
          <div className="text-sm relative h-content w-full">
            <footer className="flex justify-end">
              <div>
                <a
                  href="https://github.com/dante-robinson/Blog"
                  className="text-foreground"
                >
                  Source Code on Github
                </a>
                <FontAwesomeIcon
                  className="text-foreground mx-[0.5vw]"
                  icon={faGithub}
                />
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
