"use client";
import About from "@/src/components/About";
import Intro from "@/src/components/Intro";
import Navbar from "@/src/components/Navbar";
import Services from "@/src/components/Services";
export default function Home() {
  return (
    <div>
      <div className="font-sans img-bg bg-cover bg-center  h-screen">
        <Navbar />
        <Intro />
      </div>
      <About />
      <Services />
    </div>
  );
}
