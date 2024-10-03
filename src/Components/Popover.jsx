import React from "react";
import { Popover } from "@headlessui/react";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";

const PopUp = ({onDelete,editName}) => {
  return (
    <Popover className="relative focus:none">
      <Popover.Button>
        <EllipsisHorizontalCircleIcon className="sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-[#6c7171]" />
      </Popover.Button>
      <Popover.Panel className="absolute right-0 z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-36">
        <div className="flex flex-col p-2">
          <button onClick={onDelete} className="px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100">
            Delete
          </button>
          <button className="px-4 py-2 text-sm text-left text-blue-600 hover:bg-gray-100">
         { editName?editName:   Edit}
          </button>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default PopUp;
