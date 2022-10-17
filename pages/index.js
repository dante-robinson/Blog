import Head from "next/head";
import Home from "../components/Home.js";

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

      <Home />
    </div>
  );
}
