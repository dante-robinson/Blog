import React from "react"
import ArchGuide from "../pages/Linux/ArchGuide.js"
import PerformanceGuide from "../pages/Linux/PerformanceGuide.js"
import SecurityGuide from "../pages/Linux/SecurityGuide.js"
import Link from "next/link"

export default function ListPosts() {
  return (
    <div className="space-y-[1.4vh]">
      <div className="border-2 border-blue h-[20vh] mx-[1vw] overflow-hidden">
        <Link href="/Linux/SecurityGuide">
          <a><SecurityGuide title={"Dante's Blog"} /></a>
        </Link>
      </div>
      <div className="border-2 border-blue h-[20vh] mx-[1vw] overflow-hidden">
        <Link href="/Linux/PerformanceGuide">
          <a><PerformanceGuide title={"Dante's Blog"} /></a>
        </Link>
      </div>
      <div className="border-2 border-blue h-[20vh] mx-[1vw] overflow-hidden">
        <Link href="/Linux/ArchGuide">
          <a><ArchGuide title={"Dante's Blog"} /></a>
        </Link>
      </div >
    </div >
  )
}
