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
    {
      name: "The 2024 North American Conservation",
      status: "Live",
      dates: "10.14.24 - 10.16.24",
      registration: "NACC Open Registration",
      type: "On-Site",
    },
    {
      name: "Fall NACC Mini Conference",
      status: "Inactive",
      dates: "10.14.24 - 10.16.24",
      registration: "NACC Open Registration",
      type: "On-Site",
    },
    
  ];


  return (
    <PrimaryContainer>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#283275] mb-9">Events</h2>
        <div className="flex border-b-2 border-[#d4d5d5]">
          <span className="text-[#283275] text-base relative pb-4 font-medium">
            Events
            <p className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#b222fb] via-[#8a54f4] to-[#2dc7e5]" />
          </span>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-4">
            <div className="flex flex-col items-start gap-2.5 rounded-full border border-[#DFDEDE] bg-[#cdd5d4] py-2 px-4">
              <div className="flex items-center gap-2">
                <input className="w-[10rem] bg-[#cdd5d4] text-sm leading-normal text-gray-500 focus:outline-none focus:ring-0" />
                <MagnifyingGlassIcon className="text-[#a8adad] w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <button className="flex pr-2 space-x-4 item text-latisSecondary-800">
              <span className="text-sm font-medium text-[#010101]">Filter</span>
              <AdjustmentsHorizontalIcon className="w-5 h-5 text-[#010101]" />
            </button>
            <button className="flex items-center gap-4 pr-2 text-latisSecondary-800">
              <span className="text-sm font-medium text-[#010101]">
                Export List
              </span>
              <ArrowUpTrayIcon className="w-5 h-5 text-[#010101]" />
            </button>
            <button className="px-7 py-1.5 text-white bg-[#283275] rounded-full">
              ADD A NEW EVENT
            </button>
          </div>
        </div>
        <div className="p-1 mt-6 mb-6 border border-[#6b6a6b] rounded-2xl">
          <table className="min-w-full table-auto">
            <thead className="text-left">
              <tr className="border-b border-gray-300">
                <th className="px-4 py-3 text-sm font-medium">
                  <Checkbox />
                </th>
                <th className="px-4 text-[#283275] py-3">
                  Event Name{" "}
                  <BraIcon className="inline-block ml-3 text-[#283275]" />
                </th>
                <th className="px-4 text-[#283275] py-3">
                  Status{" "}
                  <BraIcon className="inline-block ml-3 text-latisSecondary-700" />
                </th>
                <th className="px-4 text-[#283275] py-3">
                  Dates{" "}
                  <BraIcon className="inline-block ml-3 text-latisSecondary-700" />
                </th>
                <th className="px-4 text-[#283275] py-3">
                  Registration{" "}
                  <BraIcon className="inline-block ml-3 text-latisSecondary-700" />
                </th>
                <th className="px-4 text-[#283275] py-3">
                  Type{" "}
                  <BraIcon className="inline-block ml-3 text-latisSecondary-700" />
                </th>
                <th className="px-4 text-[#283275] py-3"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {eventsData.map((event, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-300 ${
                    selectedRow === index ? "bg-white" : ""
                  }`}
                  onClick={() => setSelectedRow(index)}
                >
                  <td className="px-4 py-2 text-sm font-medium">
                    <Checkbox />
                  </td>
                  <td className="px-4 py-2 text-[#283275] text-sm font-medium">
                    {event.name}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-4 py-1.5 rounded-3xl text-sm ${
                        event.status === "Live"
                          ? "bg-[#c2e0b3] text-[#586154]"
                          : event.status === "Pause"
                          ? "bg-[#cdd5d4] text-[#586154]"
                          : event.status === "Inactive"
                          ? "bg-[#e0b3c9] text-[#3f393c]"
                          : ""
                      }`}
                    >
                      {event.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-[#414041] text-sm">
                    {event.dates}
                  </td>
                  <td className="px-4 py-2 text-[#414041] text-sm">
                    {event.registration}
                  </td>
                  <td className="px-4 py-2 text-[#414041] text-sm">
                    {event.type}
                  </td>
                  <td className="px-4 py-2 text-right">
                    <EllipsisHorizontalCircleIcon className="w-6 h-6 m-2 text-[#6c7171]" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PrimaryContainer>
  );
};

export default Events;
