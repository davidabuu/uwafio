import React, { FC, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Intro: FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-right"
      data-aos-duration='400'
      className="text-center flex justify-center flex-col h-screen"
    >
      <p className="text-3xl md:text-6xl sm:text-4xl text-my-color font-bold ">
        It&apos;s amazing how fast our
      </p>
      <p className="text-3xl  md:text-6xl sm:text-4xl text-my-color font-bold ">
        client grows
      </p>
      <p className="text-1xl md:text-2xl mt-5 text-my-color font-bold">
        Skyrocket your performance with stunning Advertising, Websites, and
        Social Med
      </p>
    </div>
  );
};

export default Intro;
