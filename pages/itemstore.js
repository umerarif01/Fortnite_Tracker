import { CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ItemCard from "../Components/ItemCard";
import Navbar from "../Components/Navbar";
import Head from "next/head";

const itemstore = () => {
  const [infos, setInfos] = useState([]);
  const [currentItem, setCurrentItem] = useState(1);
  const [itemPerPage] = useState(16);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const indexOfLastItem = currentItem * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = infos.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    fetchdata();
  }, []);

  async function fetchdata() {
    let response = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    let data = await response.json();
    console.log(data.data);
    setInfos(data.data);
    setLoading(true);
  }

  return (
    <div className="h-screen overflow-y-scroll bg-black text-white overflow-hidden">
      <Navbar />
      <Head>
        <title>Fortnite Tracker</title>
        <link rel="icon" href="/bg2.png" />
      </Head>

      <div className="flex justify-center items-center flex-col space-y-7">
        <h1 className="text-3xl lg:text-6xl md:text-5xl font-bold mt-[50px] px-5">
          Today's Item Shop
        </h1>

        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search any Item"
          className="bg-gradient-to-r from-purple-700 via-purple-400 to-pink-500 placeholder-white 
          text-white font-semibold text-lg p-5 rounded-md outline-none w-half lg:w-1/5"
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center mt-[50px] ">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {infos
              .filter((info) => {
                if (search == "") {
                  return info;
                } else if (
                  info.item.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return info;
                }
              })

              .map((info) => (
                <ItemCard
                  key={info.itemId}
                  name={info.item.name}
                  image={info.item.images.icon}
                  rarity={info.item.rarity}
                  type={info.item.type}
                  vbucks={info.store.cost}
                />
              ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-3">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default itemstore;
