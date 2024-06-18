"use client"
import App from "@/app";
import Image from "next/image";
import { FileContextProvider } from "./context/FileContext";

export default function Home() {
  return (
   <>
   <FileContextProvider>
   <App/>
   </FileContextProvider>
   </>
  );
}
