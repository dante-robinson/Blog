import Head from 'next/head'
import Image from 'next/image'
import Home from "../components/Home.js"

export default function HomePage() {
  return (
    <div className="">
      <Head>
        <title>Dante's Blog</title>
        <meta name="description" content="Home Page" />
      </Head>

      <Home />
    </div>
  )
} 
