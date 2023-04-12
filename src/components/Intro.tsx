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
      data-aos-duration="400"
      className="text-center flex justify-center flex-col h-screen"
    >
      <p className="text-3xl md:text-5xl sm:text-4xl text-my-color font-bold ">
        Empower your business with captivating content.
      </p>
      <p className="text-1xl md:text-2xl mt-5 text-my-color font-bold">
        Invest that content currency today and watch it grow.
      </p>
    </div>
  );
};

export default Intro;
