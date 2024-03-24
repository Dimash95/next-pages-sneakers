import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import { Sneakers } from "@/types/sneakers";
import { SneakersCard } from "@/components/home/SneakersCard";
import axios from "axios";
import { useThemeContext } from "@/theme-provider";

export const getSneakersList = async (titleValue: string) => {
  try {
    const response = await axios.get(
      `https://b1364cf1f3ab4cd9.mokky.dev/sneakers?title=*${titleValue}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default function AllProducts() {
  const { theme } = useThemeContext();
  const [sneakers, setSneakers] = useState<Sneakers[]>([]);
  const [titleValue, setTitleValue] = useState("");
  const [pending, setPending] = useState(true);

  const handleSearch = (e: any) => {
    setTitleValue(e.target.value);
  };

  useEffect(() => {
    const displaySneakersList = async (titleValue: string) => {
      const fetchedData = await getSneakersList(titleValue);
      setSneakers(fetchedData);
      setPending(false);
      console.log(theme);
    };

    displaySneakersList(titleValue);
  }, [titleValue]);
  return (
    <>
      <Head>
        <title>Sneakers</title>
        <meta name="title" content="Sneakers" />
      </Head>
      <main className="m-auto text-lg text-white">
        <div className="flex justify-between items-center gap-8 max-w-[1220px] m-auto mt-10">
          <h1 className="text-4xl text-center">Sneakers</h1>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) => handleSearch(e)}
          />
        </div>
        {sneakers.length > 0 ? (
          <div className="flex flex-wrap justify-between gap-10 mt-10 mx-10">
            {sneakers.map((item: Sneakers) => (
              <div key={item.id}>
                <SneakersCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-between gap-10 mt-10 mx-10">
            <div className="skeleton w-72 h-72"></div>
            <div className="skeleton w-72 h-72"></div>
            <div className="skeleton w-72 h-72"></div>
            <div className="skeleton w-72 h-72"></div>
            <div className="skeleton w-72 h-72"></div>
            <div className="skeleton w-72 h-72"></div>
            <div className="skeleton w-72 h-72"></div>
            <div className="skeleton w-72 h-72"></div>
          </div>
        )}
      </main>
    </>
  );
}
