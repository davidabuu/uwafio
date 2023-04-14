import Image from "next/image";
import React, { FC } from "react";

const About: FC = () => {
  return (
    <div
      className="bg-about-color pb-10"
      data-aos="fade-right"
      data-aos-duration="400"
      id="about"
    >
      <h1 className="text-center text-2xl pt-5 md:text-4xl">ABOUT US</h1>
      <div className="justify-evenly items-center flex flex-col sm:flex-row">
        <Image
          src={"/pic1.jpg"}
          alt="Hello"
          width={400}
          height={300}
          className="px-8 sm:px-0"
        />
        <div className="w-[100%] sm:w-[40%] px-8">
          <p className=" text-black font-bold">
            Kally Media Group kft. is a creative agency specializing in video
            creation, photography, copywriting, metadata optimisation, and media
            publication for brands, businesses, and companies.
          </p>
          <br></br>
          <button className="border-0 w-[40%] bg-orange-500 hover:text-white text-black px-3 py-2">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
