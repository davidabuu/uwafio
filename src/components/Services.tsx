import {
  ClipboardCopy,
  DocumentOutline,
  Photograph,
  SearchCircleOutline,
  VideoCameraOutline,
} from "heroicons-react";
import React, { FC } from "react";

const Services: FC = () => {
  return (
    <div
      className="bg-service-color text-white h-full"
      data-aos="zoom-in"
      data-aos-duration="400"
      id="services"
    >
      <h1 className="text-center text-2xl pt-5 md:text-4xl">SERVICES</h1>
      <div className="flex-col flex justify-evenly mt-8 sm:flex-row">
        <div className="flex-col pt-8 pb-8 border-b-2 justify-center items-center sm:border-b-0">
          <div className="flex  justify-center items-center">
            <VideoCameraOutline className="flex w-20 h-20" />
          </div>
          <p className="text-center">Video Creation</p>
        </div>
        <div className="flex-col pt-8 pb-8  border-b-2 justify-center items-center sm:border-b-0 ">
          <div className="flex justify-center items-center">
            <Photograph className="flex w-20 h-20" />
          </div>
          <p className="text-center">Photography</p>
        </div>
        <div className="flex-col pt-8 pb-8 border-b-2 justify-center items-center sm:border-b-0 ">
          <div className="flex justify-center items-center">
            <ClipboardCopy className="flex w-20 h-20" />
          </div>
          <p className="text-center">Copywriting</p>
        </div>
        <div className="flex-col pt-8 pb-8 border-b-2 justify-center items-center sm:border-b-0 ">
          <div className="flex justify-center items-center">
            <SearchCircleOutline className="flex w-20 h-20" />
          </div>
          <p className="text-center">Metadata Optimization</p>
        </div>
      </div>
      <div className="flex-col pt-8 pb-8 border-b-2 justify-center items-center sm:border-b-0 ">
        <div className="flex justify-center items-center">
          <SearchCircleOutline className="flex w-20 h-20" />
        </div>
        <p className="text-center">Metadata Optimization</p>
      </div>
    </div>
  );
};

export default Services;
