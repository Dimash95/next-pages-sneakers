import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

//  createContext is not supported in Server Components
import ThemeProvider from "../theme-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-center justify-between h-screen p-4 dark:bg-green">
      <ThemeProvider>
        <Header />
        <Component {...pageProps} />;
        <Footer />
      </ThemeProvider>
    </div>
  );
}
