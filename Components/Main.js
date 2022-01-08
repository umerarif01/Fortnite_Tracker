import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import PageCard from "./PageCard";

const Main = () => {
  return (
    <div className=" ">
      <h1 className="flex justify-center items-center text-5xl lg:text-6xl font-bold mt-[50px] px-5">
        The Ultimate Fortnite Item Shop Tracker
      </h1>
      <div className="flex justify-center mt-[60px] ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Link href="/itemstore">
            <a>
              <PageCard image={"/bg1.png"} name={"Today Items Shop"} />
            </a>
          </Link>
          <Link href="/database">
            <a>
              <PageCard image={"/bg3.png"} name={"Items Database"} />
            </a>
          </Link>
          <Link href="/popular">
            <a>
              <PageCard image={"/bg2.png"} name={"Items Popular Items"} />
            </a>
          </Link>
          <Link href="/upcoming">
            <a>
              <PageCard image={"/bg4.png"} name={"Upcoming Items"} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
