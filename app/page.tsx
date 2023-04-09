"use client";
import Intro from "@/src/components/Intro";
import Navbar from "@/src/components/Navbar";
export default function Home() {
  return (
    <div className="font-sans img-bg bg-cover bg-center  h-screen">
      <Navbar />
      <Intro />
    </div>
  );
}
