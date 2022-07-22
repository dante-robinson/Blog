import React from "react"
import Link from "next/link"

export default function Linux({setLinuxModalOpen}) {
  return(
    <div className="flex justify-center">
      <div className="absolute border-2 bg-background border-blue w-48 h-content">
        <ul className="text-center text-sm py-2 space-y-1">
          <li>
            <Link href="/Linux/ArchGuide"><a>Arch Linux Install Guide</a></Link><br />
            <Link href="/Linux/PerformanceGuide"><a>Performance Tweaks Guide</a></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
