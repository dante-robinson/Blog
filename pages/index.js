import Head from 'next/head'
import Home from "../components/Home.js"

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Dante's Blog</title>
        <meta content="Home Page" />
      </Head>

      <Home />
    </div>
  )
} 
