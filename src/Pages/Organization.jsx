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
      <div className="w-full bg-[#edeeee] p-3 md:p-6 xl:p-10">
        <div className="mb-4 md:mb-10 border-b-2 border-[#d4d5d5]">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#283275] mb-4 md:mb-9 leading-[30px] md:leading-[60px]">
            Organization
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <span className="text-[#282728] border-b-2 border-transparent cursor-pointer text-sm md:text-base font-semibold">
              Organization Info
            </span>
            <span className="pb-2 cursor-pointer text-[#283275] text-sm md:text-base relative font-semibold">
              Structure
              <p className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#b222fb] via-[#8a54f4] to-[#2dc7e5]" />
            </span>
          </div>
        </div>

        <div className="pb-4 md:pb-10 space-y-2 md:space-y-3 border-b border-[#808080]">
          {/* Organization Blocks */}
          <div className="flex flex-col space-y-2">
            {/* Block Example */}
            <div className="flex justify-between items-center bg-[#d9e3e2] p-2 md:p-3">
              <div className="flex items-center space-x-2">
                <DotIcons />
                <h3 className="text-sm md:text-base font-semibold text-[#282728]">
                  NACC
                </h3>
              </div>
              <div className="flex space-x-2">
                <ViewColumnsIcon className="w-6 md:w-7 h-6 md:h-7 text-[#6c7171]" />
                <EllipsisHorizontalCircleIcon className="w-6 md:w-7 h-6 md:h-7 text-[#6c7171]" />
              </div>
            </div>

            {/* More Blocks */}
            <div className="ml-3 md:ml-20 flex justify-between items-center bg-[#d9e3e2] p-2 md:p-3">
              <div className="flex items-center space-x-2">
                <DotIcons />
                <h3 className="text-sm md:text-base font-semibold text-[#282728]">
                  CHAPTERS
                </h3>
              </div>
              <div className="flex space-x-2">
                <ViewColumnsIcon className="w-6 md:w-7 h-6 md:h-7 text-[#6c7171]" />
                <EllipsisHorizontalCircleIcon className="w-6 md:w-7 h-6 md:h-7 text-[#6c7171]" />
              </div>
            </div>

            {/* Nested blocks */}
            <div className="ml-6 md:ml-28 flex justify-between items-center bg-[#d9e3e2] p-2 md:p-3">
              <div className="flex items-center space-x-2">
                <DotIcons />
                <h3 className="text-sm md:text-base font-semibold text-[#282728]">
                  MEMBERS
                </h3>
              </div>
              <div className="flex space-x-2">
                <ViewColumnsIcon className="w-6 md:w-7 h-6 md:h-7 text-[#6c7171]" />
                <EllipsisHorizontalCircleIcon className="w-6 md:w-7 h-6 md:h-7 text-[#6c7171]" />
              </div>
            </div>

            <div className="ml-6 md:ml-28 flex justify-between items-center bg-[#d9e3e2] p-2 md:p-3">
              <div className="flex items-center space-x-2">
                <DotIcons />
                <h3 className="text-sm md:text-base font-semibold text-[#282728]">
                  SUBSCRIBERS
                </h3>
              </div>
              <div className="flex space-x-2">
                <ViewColumnsIcon className="w-6 md:w-7 h-6 md:h-7 text-[#6c7171]" />
                <EllipsisHorizontalCircleIcon className="w-6 md:w-7 h-6 md:h-7 text-[#6c7171]" />
              </div>
            </div>

            <div className="ml-6 md:ml-28 flex justify-between items-center bg-[#d9e3e2] p-2 md:p-3">
              <div className="flex items-center space-x-2">
                <DotIcons />
                <h3 className="text-sm md:text-base font-semibold text-[#282728]">
                  NON MEMBERS
                </h3>
              </div>
              <div className="flex space-x-2">
                <ViewColumnsIcon className="w-6 md:w-7 h-6 md:h-7 text-[#6c7171]" />
                <EllipsisHorizontalCircleIcon className="w-6 md:w-7 h-6 md:h-7 text-[#6c7171]" />
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-4 md:justify-end">
          <button className="py-2 md:py-1 px-6 md:px-10 text-sm md:text-base text-[#283275] border border-[#6b6a6b] rounded-full font-semibold">
            SAVE
          </button>
        </div>
      </div>

    </PrimaryContainer>
  );
};

export default Organization;
