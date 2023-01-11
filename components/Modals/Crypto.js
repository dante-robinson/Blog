import Link from "next/link";

export default function Crypto({ CryptoRef, setCryptoModalOpen }) {
  function OpenLink() {
    setCryptoModalOpen(false);
  }

  return (
    <div ref={CryptoRef} className="flex w-full justify-center">
      <div className="absolute border-2 bg-background border-blue w-64 h-content">
        <ul className="flex flex-wrap flex-col text-center justify-center text-sm py-[0.5vh]">
          <li>
            <Link href="/Crypto/XRPXLMScam">
              <button className="hover:text-red" onClick={OpenLink}>
                <a>XRP & XLM The biggest scams</a>
              </button>
            </Link>
            <br />
          </li>
          <li>
            <Link href="/Crypto/CommunistCBDC">
              <button className="hover:text-red" onClick={OpenLink}>
                <a>Communist CBDCs</a>
              </button>
            </Link>
            <br />
          </li>
        </ul>
      </div>
    </div>
  );
}
