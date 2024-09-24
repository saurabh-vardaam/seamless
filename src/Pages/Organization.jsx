import React from "react";
import PrimaryContainer from "../Components/PrimaryContainer";
import DotIcons from "../Icons/DotIcon";
import {
  EllipsisHorizontalCircleIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";

const Organization = () => {
  return (
    <PrimaryContainer>
      <div className="w-full  bg-[#edeeee]  ">
        <div className="mb-10 border-b-2 border-[#d4d5d5]">
          <h2 className="text-xl font-semibold text-[#283275] mb-9">
            Organization
          </h2>
          <div className="flex space-x-10 ">
            <span className="text-[#909091] border-b-2 border-transparent cursor-pointer text-base">
              Organization Info
            </span>
            <span className="pb-3.5 cursor-pointer text-[#283275]  text-base relative">
              Structure
              <p className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#b222fb] via-[#8a54f4] to-[#2dc7e5]" />

            </span>
           
          </div>
        </div>

        <div className="pb-10 space-y-3 border-b border-[#808080]">
          <div className="flex justify-between items-center bg-[#d9e3e2] p-1.5 ">
            <div className="flex items-center space-x-4">
              <DotIcons />
              <h3 className="text-lg font-medium text-[#353636]">NACC</h3>
            </div>
            <div className="flex space-x-2">
              <ViewColumnsIcon className="w-6 h-6 m-2 text-[#6c7171]" />
              <EllipsisHorizontalCircleIcon className="w-6 h-6 m-2 text-[#6c7171]" />
            </div>
          </div>

          <div className="flex items-center justify-between p-1.5  ml-20 bg-[#d9e3e2] ">
            <div className="flex items-center space-x-4">
              <DotIcons />
              <h3 className="text-lg font-medium text-[#353636]">CHAPTERS</h3>
            </div>
            <div className="flex space-x-2">
              <ViewColumnsIcon className="w-6 h-6 m-2 text-[#6c7171]" />
              <EllipsisHorizontalCircleIcon className="w-6 h-6 m-2 text-[#6c7171]" />
            </div>
          </div>

          <div className="flex justify-between items-center p-1.5 bg-[#d9e3e2] ml-20">
            <div className="flex items-center space-x-4">
              <DotIcons />
              <h3 className="text-lg font-medium text-[#353636]">COMMITTEES</h3>
            </div>
            <div className="flex space-x-2">
              <ViewColumnsIcon className="w-6 h-6 m-2 text-[#6c7171]" />
              <EllipsisHorizontalCircleIcon className="w-6 h-6 m-2 text-[#6c7171]" />
            </div>
          </div>

          <div className="flex justify-between items-center ml-28 p-1.5 bg-[#d9e3e2]">
            <div className="flex items-center space-x-4">
              <DotIcons />
              <h3 className="text-lg font-medium text-[#353636]">MEMBERS</h3>
            </div>
            <div className="flex space-x-2">
              <ViewColumnsIcon className="w-6 h-6 m-2 text-[#6c7171]" />
              <EllipsisHorizontalCircleIcon className="w-6 h-6 m-2 text-[#6c7171]" />
            </div>
          </div>

          <div className="flex justify-between items-center ml-28 p-1.5 bg-[#d9e3e2]">
            <div className="flex items-center space-x-4">
              <DotIcons />
              <h3 className="text-lg font-medium text-[#353636]">
                SUBSCRIBERS
              </h3>
            </div>
            <div className="flex space-x-2">
              <ViewColumnsIcon className="w-6 h-6 m-2 text-[#6c7171]" />
              <EllipsisHorizontalCircleIcon className="w-6 h-6 m-2 text-[#6c7171]" />
            </div>
          </div>

          <div className="flex justify-between items-center ml-28 p-1.5 bg-[#d9e3e2]">
            <div className="flex items-center space-x-4">
              <DotIcons />{" "}
              <h3 className="text-lg font-medium text-[#353636]">NON MEMBERS</h3>
            </div>
            <div className="flex space-x-2">
              <ViewColumnsIcon className="w-6 h-6 m-2 text-[#6c7171]" />
              <EllipsisHorizontalCircleIcon className="w-6 h-6 m-2 text-[#6c7171]" />
            </div>
          </div>
        </div>
        
        

        <div className="flex justify-end mt-4">
          <button className=" py-1 text-[#283275] border border-[#808080] rounded-full px-11">
            SAVE
          </button>
        </div>
      </div>
    </PrimaryContainer>
  );
};

export default Organization;
