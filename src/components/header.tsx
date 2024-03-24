import Link from "next/link";
import Image from "next/image";
import { IconHeart, IconShoppingCart, IconUserCircle } from "@tabler/icons-react";
import Theme from "./theme";
import { changeTheme } from "@/utils/helper";

export default function Header() {
  return (
    <header className="flex justify-center items-center w-3/4 mx-auto px-10 py-4 bg-red-400 rounded-3xl text-white">
      <nav className="flex justify-between w-full">
        <Link className="text-2xl" href="/">
          Next Sneakers Shop
        </Link>

        <ul className="flex flex-1 justify-center gap-5 text-lg">
          <li>
            <Link href="/sneakers">Кроссовки</Link>
          </li>
          <li>
            <Link href="/about">О нас</Link>
          </li>
          <li>
            <Link href="/contacts">Контакты</Link>
          </li>
        </ul>
        <ul className="flex gap-5 text-white">
          <li>
            <IconHeart size={30} />
          </li>
          <li>
            <IconShoppingCart size={30} />
          </li>
          <li>
            <IconUserCircle size={30} />
          </li>
          <li>
            <Theme />
          </li>
          <li>
            <div className=" grid place-items-center bg-primary">
              <div>
                <button
                  className="py-2 px-8 bg-buttons text-typography m-2"
                  onClick={() => changeTheme("")}
                >
                  Default
                </button>
                <button
                  className="py-2 px-8 bg-buttons text-typography m-2"
                  onClick={() => changeTheme("theme1")}
                >
                  theme 1
                </button>
                <button
                  className="py-2 px-8 bg-buttons text-typography m-2"
                  onClick={() => changeTheme("theme2")}
                >
                  theme 2
                </button>
                <button
                  className="py-2 px-8 bg-buttons text-typography m-2"
                  onClick={() => changeTheme("theme3")}
                >
                  theme 3
                </button>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
