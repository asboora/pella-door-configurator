import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./page.scss";
const inter = Inter({ subsets: ["latin"] });
// import { Provider } from 'react-redux';
// import { store } from "@/store/store";

export const metadata: Metadata = {
  title: "Pella Door Configurator Demo",
  description: "A Configurator demo developed for the position of Digital Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Provider store={store}> */}
      <body className={inter.className}>{children}</body>
      {/* </Provider> */}
    </html>
  );
}
