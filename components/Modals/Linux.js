import Link from "next/link"

export default function Linux({ LinuxRef, setLinuxModalOpen }) {
  function OpenLink() {
    setLinuxModalOpen(false);
  }

  return (
    <div ref={LinuxRef} className="flex w-full justify-center">
      <div className="absolute border-2 bg-background border-blue w-56 h-content">
        <ul className="flex text-center justify-center text-sm py-[0.5vh] space-y-[14vh]">
          <li>
            <Link href="/Linux/ArchGuide">
              <button className="hover:text-red" onClick={OpenLink}>
                <a>Arch Linux Install Guide</a>
              </button>
            </Link><br />
            <Link href="/Linux/PerformanceGuide">
              <button className="hover:text-red" onClick={OpenLink}>
                <a>Performance Tweaks Guide</a>
              </button>
            </Link><br />
            <Link href="/Linux/SecurityGuide">
              <button className="hover:text-red" onClick={OpenLink}>
                <a>Linux Security Guide</a>
              </button>
            </Link>
            <Link href="/Linux/Gentoomusl">
              <button className="hover:text-red" onClick={OpenLink}>
                <a>My experience on Gentoo Musl</a>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
