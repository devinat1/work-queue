import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider as JotaiProvider } from "jotai";
import { SWRConfig } from "swr";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <JotaiProvider>
      <SWRConfig
        value={{
          revalidateOnFocus: true,
          revalidateOnReconnect: true,
        }}
      >
        <div className={`${geistSans.variable} ${geistMono.variable}`}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </div>
      </SWRConfig>
    </JotaiProvider>
  );
}
