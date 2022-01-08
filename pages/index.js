import Head from "next/head";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll bg-black text-white overflow-hidden">
      <Head>
        <title>Fortnite Tracker</title>
        <link rel="icon" href="/bg2.png" />
      </Head>
      <Navbar />
      <Main />
    </div>
  );
}

// h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700 text-white overflow-hidden
