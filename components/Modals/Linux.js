import Link from "next/link"

export default function Linux({ LinuxRef, setLinuxModalOpen }) {
  function OpenLink() {
    setLinuxModalOpen(false);
  }

  return (
    <div ref={LinuxRef} className="flex justify-center">
      <div className="absolute border-2 bg-background border-blue w-56 h-content">
        <ul className="text-center text-sm py-[0.5vh] space-y-1">
          <li>
            <Link href="/Linux/ArchGuide">
              <button onClick={OpenLink}>
                <a>Arch Linux Install Guide</a>
              </button>
            </Link><br />
            <Link href="/Linux/PerformanceGuide">
              <button onClick={OpenLink}>
                <a>Performance Tweaks Guide</a>
              </button>
            </Link><br />
            <Link href="/Linux/SecurityGuide">
              <button onClick={OpenLink}>
                <a>Linux Security Guide</a>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
