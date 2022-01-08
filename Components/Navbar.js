import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div
      className="sticky top-0 z-50
    bg-purple-700  p-5 md:px-10"
    >
      <Link href="/">
        <a className="flex justify-center items-center w-1/2 2xl:w-full lg:w-full ">
          <Image width={400} height={50} src={"/logo.png"} />
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
