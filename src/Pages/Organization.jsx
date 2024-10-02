import React from "react";
import PrimaryContainer from "../Components/PrimaryContainer";
import DotIcons from "../Icons/DotIcon";
import {
  EllipsisHorizontalCircleIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";
import PopUp from "../Components/Popover";

const Organization = () => {
  return (
    <PrimaryContainer>
      <div className="w-full bg-[#edeeee]">
        <div className="mb-3 border-b-2 sm:mb-4 md:mb-10 border-seamlessBlue-400">
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#283275] mb-3 sm:mb-4 md:mb-9 ">
            Organization
          </h2>
          <div className="flex flex-col sm:flex-row md:space-x-10">
            <span className="text-[#282728] border-b-2 border-transparent cursor-pointer text-sm sm:text-base font-semibold">
              Organization Info
            </span>
            <span className="pb-2 cursor-pointer text-[#283275] text-sm sm:text-base relative font-semibold">
              Structure
              <p className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-seamlessGradient-start to-seamlessGradient-end" />
            </span>
          </div>
        </div>

        <div className="pb-3 sm:pb-4 md:pb-10 space-y-2 sm:space-y-3 border-b border-[#808080]">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center bg-[#d9e3e2] p-2 sm:p-3 md:p-4">
              <div className="flex items-center space-x-2">
                <DotIcons />
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#282728]">
                  NACC
                </h3>
              </div>
              <div className="flex space-x-2">
                <ViewColumnsIcon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-[#6c7171]" />
                <PopUp />
              </div>
            </div>

            <div className="ml-2 sm:ml-3 md:ml-20 flex justify-between items-center bg-[#d9e3e2] p-2 sm:p-3 md:p-4">
              <div className="flex items-center space-x-2">
                <DotIcons />
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#282728]">
                  CHAPTERS
                </h3>
              </div>
              <div className="flex space-x-2">
                <ViewColumnsIcon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-[#6c7171]" />
                <PopUp />            
              </div>
            </div>

            <div className="ml-4 sm:ml-6 md:ml-28 flex justify-between items-center bg-[#d9e3e2] p-2 sm:p-3 md:p-4">
              <div className="flex items-center space-x-2">
                <DotIcons />
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#282728]">
                  MEMBERS
                </h3>
              </div>
              <div className="flex space-x-2">
                <ViewColumnsIcon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-[#6c7171]" />
                <PopUp />
              </div>
            </div>

            <div className="ml-4 sm:ml-6 md:ml-28 flex justify-between items-center bg-[#d9e3e2] p-2 sm:p-3 md:p-4">
              <div className="flex items-center space-x-2">
                <DotIcons />
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#282728]">
                  SUBSCRIBERS
                </h3>
              </div>
              <div className="flex space-x-2">
                <ViewColumnsIcon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-[#6c7171]" />
                <PopUp />
              </div>
            </div>

            <div className="ml-4 sm:ml-6 md:ml-28 flex justify-between items-center bg-[#d9e3e2] p-2 sm:p-3 md:p-4">
              <div className="flex items-center space-x-2">
                <DotIcons />
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#282728]">
                  NON MEMBERS
                </h3>
              </div>
              <div className="flex space-x-2">
                <ViewColumnsIcon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-[#6c7171]" />
                <PopUp />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4 sm:justify-end">
          <button className="py-2 sm:py-1 px-6 sm:px-10 text-sm sm:text-base text-[#283275] border border-[#6b6a6b] rounded-full font-semibold">
            SAVE
          </button>
        </div>
      </div>
    </PrimaryContainer>
  );
};

export default Organization;
