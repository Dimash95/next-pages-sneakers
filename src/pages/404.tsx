import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });

  return (
    <main className="flex flex-col justify-center items-center m-auto text-lg text-white">
      <h1 className=" text-3xl">404</h1>
      <p>
        U gonna redirect to{" "}
        <Link href="/" className="underline text-green-500">
          Home
        </Link>{" "}
        page after 3 seconds
      </p>
    </main>
  );
}
