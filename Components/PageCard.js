import Image from "next/image";
import React from "react";

const PageCard = ({ name, image }) => {
  return (
    <div
      className="bg-gray-800 p-3 rounded-md flex justify-center flex-col items-center
        hover:scale-105 
        transition transform duration-300 ease-out
        hover:bg-gray-900 lg:p-5 2xl:p-7"
    >
      <Image width={200} height={200} src={image} />
      <h1 className="text-white text-3xl font-semibold py-2">{name}</h1>
    </div>
  );
};

export default PageCard;
