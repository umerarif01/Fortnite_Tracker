import React from "react";
import Navbar from "../Components/Navbar";
import Head from "next/head";

const database = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-black text-white overflow-hidden">
      <Head>
        <title>Fortnite Tracker</title>
        <link rel="icon" href="/bg2.png" />
      </Head>
      <Navbar />

      <div className="flex justify-center items-center flex-col space-y-7">
        <h1 className="text-3xl lg:text-6xl md:text-5xl font-bold mt-[50px] px-5">
          Fortnite Item's Database(coming soon)
        </h1>
      </div>
    </div>
  );
};

export default database;
