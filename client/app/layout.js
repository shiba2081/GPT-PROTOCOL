'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {

//   useEffect(() => {
//     let scroll;
//     if (typeof window !== "undefined") {
    
    
//     import("locomotive-scroll").then((locomotiveModule) => {
//       // scroll = new locomotiveModule.default();
//         scroll = new locomotiveModule.default({
//             el: document.querySelector("[data-scroll-container]"),
//             smooth: true,
//             smoothMobile: false,
//             resetNativeScroll: true
//         });
//     });
//   }

//     // cleanup phase
//     return () => {
//         if (scroll) scroll.destroy();
//     }
// });
  return (
    <html lang="en">
    <head>
    <title>GPT PROTOCOL</title>
    <meta name="description" content="hello" />
    <link rel="icon" href='/icon1.ico' sizes="16x16"/>
    </head>
      
      <body className={inter.className}>
      <div className="data-scroll-container">
      <Header/>
      {children}
      <Footer/>
      </div>
      </body>
    </html>
  );
}