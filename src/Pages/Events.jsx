import React, { useState } from "react";
import PrimaryContainer from "../Components/PrimaryContainer";
import {
  AdjustmentsHorizontalIcon,
  ArrowUpTrayIcon,
  MagnifyingGlassIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import Checkbox from "../Components/CheckBox";
import BraIcon from "../Icons/BraIcon";
import { Popover } from "@headlessui/react";
import PopUp from "../Components/Popover";


const Events = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const eventsData = [
    {
      name: "Fall NACC Mini Conference",
      status: "Live",
      dates: "10.14.24 - 10.16.24",
      registration: "NACC Open Registration",
      type: "Virtual",
    },
    {
      name: "The 2024 North American Conservation",
      status: "Pause",
      dates: "10.14.24 - 10.16.24",
      registration: "NACC Open Registration",
      type: "On-Site",
    },
    {
      name: "Fall NACC Mini Conference",
      status: "Pause",
      dates: "10.14.24 - 10.16.24",
      registration: "NACC Open Registration",
      type: "On-Site",
    },
    {
      name: "The 2024 North American Conservation",
      status: "Inactive",
      dates: "10.14.24 - 10.16.24",
      registration: "NACC Open Registration",
      type: "On-Site",
    },
    {
      name: "Fall NACC Mini Conference",
      status: "Pause",
      dates: "10.14.24 - 10.16.24",
      registration: "NACC Open Registration",
      type: "On-Site",
    },
    {
      name: "The 2024 North American Conservation",
      status: "Inactive",
      dates: "10.14.24 - 10.16.24",
      registration: "NACC Open Registration",
      type: "On-Site",
    },
    {
      name: "Fall NACC Mini Conference",
      status: "Pause",
      dates: "10.14.24 - 10.16.24",
      registration: "NACC Open Registration",
      type: "On-Site",
    },
  ];

  return (
    <PrimaryContainer>
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-[#283275] mb-9">Events</h2>
        <div className="flex border-b-2 border-gray-300">
          <span className="text-[#283275] text-base relative pb-4 font-semibold">
            Events
            <p className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#b222fb] via-[#8a54f4] to-[#2dc7e5]" />
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between mb-6 md:flex-row">
        <div className="flex flex-col items-start gap-2.5 rounded-full border border-[#DFDEDE] bg-[#cdd5d4] py-2 px-4 w-full sm:w-3/4 md:w-auto">
          <div className="flex items-center gap-2 w-full">
            <input
              className="w-full bg-[#cdd5d4] text-sm leading-normal text-gray-900 focus:outline-none focus:ring-0 sm:w-60 md:w-40"
              placeholder="Search..."
            />
            <MagnifyingGlassIcon className="text-[#676b6a] w-4 h-4" />
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <button className="flex pr-2 space-x-2 items-center leading-[40px] sm:leading-[50px] lg:leading-[60px]">
            <span className="text-sm sm:text-base font-medium text-[#282728]">
              Filter
            </span>
            <AdjustmentsHorizontalIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#282728]" />
          </button>

          <button className="flex items-center gap-2 pr-2 leading-[40px] sm:leading-[50px] lg:leading-[60px]">
            <span className="text-sm sm:text-base font-medium text-[#282728]">
              Export List
            </span>
            <ArrowUpTrayIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#282728]" />
          </button>

          <button className="px-4 py-2 text-white bg-[#283275] rounded-3xl font-semibold text-xs sm:text-sm lg:px-6 ">
            ADD A NEW EVENT
          </button>
        </div>
      </div>

      <div className="mt-6 mb-6 border border-[#6b6a6b] rounded-2xl overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="text-left text-[#283275]">
            <tr className="border-b border-gray-300">
              <th className="px-2 py-3 text-sm font-medium">
                <Checkbox />
              </th>
              <th className="py-3 text-sm font-semibold">
                Event Name
                <BraIcon className="inline-block ml-3 " />
              </th>
              <th className="py-3 text-sm font-semibold">
                Status
                <BraIcon className="inline-block ml-3 " />
              </th>
              <th className="px-2 py-3 text-sm font-semibold">
                Dates
                <BraIcon className="inline-block ml-3" />
              </th>
              <th className="px-2 py-3 text-sm font-semibold">
                Registration
                <BraIcon className="inline-block ml-3 " />
              </th>
              <th className="px-2 py-3 text-sm font-semibold">
                Type
                <BraIcon className="inline-block ml-3 " />
              </th>
              <th className="px-2 py-3"></th>
            </tr>
          </thead>
          <tbody className="">
            {eventsData.map((event, index) => (
              <tr
                key={index}
                className={`border-t border-gray-300 ${selectedRow === index ? "bg-white" : ""
                  }`}
                onClick={() => setSelectedRow(index)}
              >
                <td className="px-2 py-2 text-sm font-medium">
                  <Checkbox />
                </td>
                <td className="py-2 text-[#283275] text-sm font-semibold">
                  {event.name}
                </td>
                <td className="py-3">
                  <span
                    className={`px-4 py-1.5 rounded-xl text-sm font-normal ${event.status === "Live"
                        ? "bg-[#c2e0b3] text-[#282728]"
                        : event.status === "Pause"
                          ? "bg-[#cdd5d4] text-[#282728]"
                          : event.status === "Inactive"
                            ? "bg-[#e0b3c9] text-[#282728]"
                            : ""
                      }`}
                  >
                    {event.status}
                  </span>
                </td>
                <td className="px-2 py-2 text-[#282728] text-sm font-normal">
                  {event.dates}
                </td>
                <td className="px-2 py-2 text-[#282728] text-sm font-normal">
                  {event.registration}
                </td>
                <td className="px-2 py-2 text-[#282728] text-sm font-normal">
                  {event.type}
                </td>
                <td className="px-2 py-2 text-left">
                  <PopUp />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PrimaryContainer>
  );
};

export default Events;
