import React, { useState } from "react";
import PrimaryContainer from "../Components/PrimaryContainer";
import { Tab } from "@headlessui/react";
import {
  CheckCircleIcon,
  ChevronDownIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

const EventDetails = () => {
  const classNames = (...classes) => classes.filter(Boolean).join(" ");
  const [isVisible, setIsVisible] = useState(true);

  const tabs = [
    "Event Details",
    "Registration",
    "Schedule",
    "Pricing",
    "CEU's",
    "Speakers",
    "Exhibitors",
    "Sponsors",
  ];

  return (
    <PrimaryContainer>
      <h2 className="sm:text-xl md:text-2xl font-extrabold text-[#283275] mb-9">
        Fall NACC Mini Conference{" "}
        <button className="px-3 py-1 text-xs sm:text-sm font-normal text-[#282728] bg-[#c2e0b3] rounded-full">
          Active
        </button>
      </h2>

      <Tab.Group>
      <Tab.List className="flex flex-col border-b-2 border-gray-300 sm:flex-row sm:space-x-9">
          {tabs.map(
            (tab, index) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    "text-base font-semibold focus:none leading-[60px]",
                    selected
                      ? "  font-semibold text-[#283275]"
                      : "font-semibold text-[#282728] mb-1"
                  )
                }
              >
                {({ hover, selected }) => (
                  <>
                    {tab}
                    {selected && (
                      <p className="w-full h-1 bg-gradient-to-r from-seamlessGradient-start to-seamlessGradient-end" />
                    )}
                  </>
                )}
              </Tab>
            )
          )}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <div className="mt-6 space-y-4 bg-gray-100 border border-gray-600 rounded-3xl">
              <div className="bg-[#ffffff] rounded-t-3xl">
                <div className="flex flex-col items-start justify-between border-b border-gray-400 sm:flex-row sm:items-center">
                  <p className="text-[#282728] text-sm font-normal m-3.5">
                    Display Title:
                    <span className="text-base text-[#283275] font-semibold">
                      Fall NACC Mini Conference
                    </span>
                  </p>
                  <ChevronDownIcon className="w-5 h-5 text-gray-500 cursor-pointer m-3.5" />
                </div>

                <div className="space-y-2 border-b border-gray-400">
                  <div className="m-5">
                    <span className="flex justify-between">
                      <p className="text-[#282728] text-sm font-normal">
                        Display Title:
                      </p>
                      <PencilIcon className="w-5 h-5" />
                    </span>
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#283275]">
                      The 2024 North American Conservation Corps Annual
                      Conference
                    </h2>
                    <span className="flex items-center mt-2 space-x-2">
                      <div className="relative">
                        <button
                          onClick={() => setIsVisible(!isVisible)}
                          className={`inline-flex h-3 w-6 items-center rounded-full p-0.5 transition-colors duration-300 border border-black ${
                            isVisible ? "bg-gray-200" : "bg-gray-300"
                          }`}
                        >
                          <span
                            className={`h-2 w-2 bg-white rounded-full transition-transform duration-300 transform border border-black ${
                              isVisible ? "translate-x-3" : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                      <p className="text-sm text-[#283275]">
                        Show On Public Site
                      </p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex flex-col items-start gap-1 mx-4 sm:flex-row">
                  <p className="text-sm text-[#282728]">Description:</p>
                  <p className="text-[#283275] text-base font-semibold">
                    The Conference unites people from across sectors and
                    throughout the country who are connected...
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-400">
                  <span className="flex flex-col items-start gap-1 mx-4 sm:flex-row sm:items-center">
                    <p className="text-sm text-[#282728]">Dates:</p>
                    <p className="text-[#283275] text-base font-semibold">
                      10.24.24 - 10.16.24
                    </p>
                  </span>
                </div>

                <div className="pt-3 border-t border-gray-400">
                  <span className="flex flex-col items-start gap-1 mx-4 sm:flex-row sm:items-center">
                    <p className="text-sm text-[#282728]">Location:</p>
                    <p className="text-[#283275] text-base font-semibold">
                      Hyatt Regency Denver at Colorado Convention Center
                    </p>
                  </span>
                </div>

                <div className="pt-3 border-t border-gray-400">
                  <span className="flex flex-col items-start gap-1 mx-4 sm:flex-row sm:items-center">
                    <p className="text-sm text-[#282728]">
                      Registration Opens:
                    </p>
                    <p className="text-[#283275] text-base font-semibold">
                      10.02.2024
                    </p>
                  </span>
                </div>

                <div className="pt-3 border-t border-gray-400">
                  <span className="flex flex-col items-start gap-1 mx-4 sm:flex-row sm:items-center">
                    <p className="text-sm text-[#282728]">
                      Membership Level Access:
                    </p>
                    <p className="text-[#283275] text-base font-semibold">
                      Chapter Gold, Chapter Silver
                    </p>
                  </span>
                </div>

                <div className="pt-3 border-t border-gray-400">
                  <span className="flex flex-col items-start gap-1 mx-4 sm:flex-row sm:items-center">
                    <p className="text-sm text-[#282728]">Event Type:</p>
                    <p className="text-[#283275] text-base font-semibold">
                      On-Site
                    </p>
                  </span>
                </div>

                <div className="pt-3 border-t border-gray-400">
                  <span className="flex flex-col items-start gap-1 mx-4 sm:flex-row sm:items-center">
                    <p className="text-sm text-[#282728]">Event Category:</p>
                    <p className="text-[#283275] text-base font-semibold">
                      Outreach
                    </p>
                  </span>
                </div>

                <div className="py-3 border-t border-gray-400">
                  <span className="flex flex-col items-start gap-1 mx-4 sm:flex-row sm:items-center">
                    <p className="text-sm text-[#282728]">Status:</p>
                    <p className="text-[#283275] text-base font-semibold">
                      Active
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </PrimaryContainer>
  );
};

export default EventDetails;
