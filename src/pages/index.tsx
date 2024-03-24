import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Head from "next/head";
import { Sneakers } from "@/types/sneakers";
import { SneakersCard } from "@/components/home/SneakersCard";
import axios from "axios";
import { Text } from "@/components/home/text";
import { Video } from "@/components/home/video";

// export const getSneakersList = async () => {
//   const response = await axios.get(`https://b1364cf1f3ab4cd9.mokky.dev/sneakers?limit=3`);
//   return response.data;
// };

export const getServerSideProps = (async () => {
  const response = await axios.get(`https://b1364cf1f3ab4cd9.mokky.dev/sneakers?limit=3`);
  const topProducts = response.data;
  return { props: { topProducts } };
}) satisfies GetServerSideProps<{ topProducts: Sneakers[] }>;

export default function Home({
  topProducts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="title" content="Home" />
      </Head>
      <main className="max-w-[1220px] m-auto text-lg text-white">
        <Video />
        <Text />
        <h2 className="text-3xl text-center">Top products</h2>
        {topProducts.items.length > 0 ? (
          <div className="flex flex-wrap justify-between gap-10 mt-10 mx-10">
            {topProducts.items.map((item: Sneakers) => (
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
          </div>
        )}
      </main>
    </>
  );
}
