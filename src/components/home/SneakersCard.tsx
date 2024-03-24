import Image from "next/image";
import { Sneakers } from "@/types/sneakers";

export function SneakersCard({ item }: { item: Sneakers }) {
  return (
    <div className="relative w-72 border border-gray-200 rounded-3xl cursor-pointer transition hover:shadow-xl">
      <Image
        className="w-72 h-72 rounded-3xl"
        src={item.imageUrl}
        alt="sneaker"
        width="288"
        height="288"
      />
      <Image
        className="absolute top-4 right-6"
        src="/like-1.svg"
        alt="heart"
        width="25"
        height="25"
      />
      <p className="mt-2 px-6">{item.title}</p>
      <div className="flex justify-between my-2 px-6">
        <div>
          <p className="text-gray-400">Цена:</p>
          <p className="font-bold">{item.price} тг.</p>
        </div>
        <Image src="/plus.svg" alt="plus" width="25" height="25" />
      </div>
    </div>
  );
}
