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
      <div className="w-full bg-[#edeeee] p-4 md:p-6 xl:p-10">
        <div className="mb-6 md:mb-10 border-b-2 border-[#d4d5d5]">
          <h2 className="text-2xl md:text-2xl font-extrabold text-[#283275] mb-4 md:mb-9 leading-[60px]">
            Organization
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <span className="text-[#282728] border-b-2 border-transparent cursor-pointer text-base md:text-base font-semibold">
              Organization Info
            </span>
            <span className="pb-3.5 cursor-pointer text-[#283275] text-base md:text-base relative font-semibold">
              Structure
              <p className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#b222fb] via-[#8a54f4] to-[#2dc7e5]" />
            </span>
          </div>
        </div>

        <div className="pb-6 md:pb-10 space-y-3 border-b border-[#808080]">
          {/* Organization Blocks */}
          <div className="flex flex-col space-y-3">
            {/* Block Example */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-[#d9e3e2] p-2 md:p-3">
              <div className="flex items-center space-x-4">
                <DotIcons />
                <h3 className="text-base md:text-base font-semibold text-[#282728]">
                  NACC
                </h3>
              </div>
              <div className="flex space-x-2">
                <ViewColumnsIcon className="w-7 md:w-7 h-7 md:h-7 text-[#6c7171]" />
                <EllipsisHorizontalCircleIcon className="w-7 md:w-7 h-7 md:h-7 text-[#6c7171]" />
              </div>
            </div>

            {/* More Blocks */}
            <div className="ml-5 md:ml-20 flex flex-col md:flex-row justify-between items-center bg-[#d9e3e2] p-2 md:p-3">
              <div className="flex items-center space-x-4">
                <DotIcons />
                <h3 className="text-base md:text-base font-semibold text-[#282728]">
                  CHAPTERS
                </h3>
              </div>
              <div className="flex space-x-2">
                <ViewColumnsIcon className="w-7 md:w-7 h-7 md:h-7 text-[#6c7171]" />
                <EllipsisHorizontalCircleIcon className="w-7 md:w-7 h-7 md:h-7 text-[#6c7171]" />
              </div>
            </div>

            {/* Additional nested blocks */}
            <div className="ml-8 md:ml-28 flex flex-col md:flex-row justify-between items-center bg-[#d9e3e2] p-2 md:p-3">
              <div className="flex items-center space-x-4">
                <DotIcons />
                <h3 className="text-base md:text-base font-semibold text-[#282728]">
                  MEMBERS
                </h3>
              </div>
              <div className="flex space-x-2">
                <ViewColumnsIcon className="w-7 md:w-7 h-7 md:h-7 text-[#6c7171]" />
                <EllipsisHorizontalCircleIcon className="w-7 md:w-7 h-7 md:h-7 text-[#6c7171]" />
              </div>
            </div>

            <div className="ml-8 md:ml-28 flex flex-col md:flex-row justify-between items-center bg-[#d9e3e2] p-2 md:p-3">
              <div className="flex items-center space-x-4">
                <DotIcons />
                <h3 className="text-base md:text-base font-semibold text-[#282728]">
                  SUBSCRIBERS
                </h3>
              </div>
              <div className="flex space-x-2">
                <ViewColumnsIcon className="w-7 md:w-7 h-7 md:h-7 text-[#6c7171]" />
                <EllipsisHorizontalCircleIcon className="w-7 md:w-7 h-7 md:h-7 text-[#6c7171]" />
              </div>
            </div>

            <div className="ml-8 md:ml-28 flex flex-col md:flex-row justify-between items-center bg-[#d9e3e2] p-2 md:p-3">
              <div className="flex items-center space-x-4">
                <DotIcons />
                <h3 className="text-base md:text-base font-semibold text-[#282728]">
                  NON MEMBERS
                </h3>
              </div>
              <div className="flex space-x-2">
                <ViewColumnsIcon className="w-7 md:w-7 h-7 md:h-7 text-[#6c7171]" />
                <EllipsisHorizontalCircleIcon className="w-7 md:w-7 h-7 md:h-7 text-[#6c7171]" />
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-4 md:justify-end">
          <button className="py-2 md:py-1 px-8 md:px-11 text-base md:text-base text-[#283275] border border-[#6b6a6b] rounded-full font-semibold">
            SAVE
          </button>
        </div>
      </div>
    </PrimaryContainer>
  );
};

export default Organization;
