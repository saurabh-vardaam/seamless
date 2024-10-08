import React from "react";
import PrimaryContainer from "../Components/PrimaryContainer";
import DotIcons from "../Icons/DotIcon";
import { ViewColumnsIcon } from "@heroicons/react/24/outline";
import PopUp from "../Components/Popover";
import { Tab } from "@headlessui/react";
import { classNames } from "../provider";
import Logo from "../Images/Organization.png"

const Organization = () => {
  const structure = {
    title: "NACC",
    children: [
      {
        title: "CHAPTERS",
      },
      {
        title: "COMMITTEES",
        children: [
          {
            title: "MEMBERS",
          },
          {
            title: "SUBSCRIBERS",
          },
          {
            title: "NON MEMBERS",
          },
        ],
      },
    ],
  };

  const getStructure = (structure, level) => {
    return (
      <>
        <div
          style={{
            marginLeft: `${level * 40}px`,
          }}
          className={classNames(
            "flex items-center justify-between grow px-5 py-3 bg-seamlessCyan-500"
          )}
        >
          <div className="flex items-center space-x-2">
            <DotIcons />
            <h3 className="text-sm font-semibold uppercase sm:text-base md:text-lg text-seamlessGray-950">
              {structure?.title}
            </h3>
          </div>
          <div className="flex space-x-2">
            <ViewColumnsIcon className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-seamlessGray-100" />
            <PopUp />
          </div>
        </div>
        {structure?.children?.map((child) => getStructure(child, level + 1))}
      </>
    );
  };
  return (
    <PrimaryContainer>
      <h2 className="font-extrabold sm:text-xl md:text-2xl text-seamlessBlue-700 mb-9">
        Organization
      </h2>
      <Tab.Group>
        <Tab.List className="flex flex-col border-b-2 border-seamlessBlue-400 sm:flex-row sm:space-x-9">
          {["Organization Info", "Structure"].map((tab, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  "focus:none leading-[60px]",
                  selected 
                  ? " font-semibold text-seamlessBlue-700 text-base " 
                  : "font-semibold  mb-1 opacity-55 text-seamlessGray-950 text-base "
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
          ))}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <div className="mt-10 space-y-4 border border-gray-600 rounded-3xl">
              <div className="flex items-center justify-center w-full h-60">
                <div className="flex flex-col items-center ">
                  <p className="text-lg font-semibold ">Not Created</p>
                  <p className="text-sm font-medium">
                    This Tab Panel is not created please first create the Tab
                  </p>
                </div>
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="flex flex-col my-10 gap-y-4">
              {getStructure(structure, 0)}
            </div>

            <div className="flex justify-center border-t border-seamlessBlue-400 sm:justify-end">
              <button className="px-6 py-2 text-sm font-semibold border rounded-full mt-9 sm:py-1 sm:px-10 sm:text-base text-seamlessBlue-700 border-seamlessGray-900">
                SAVE
              </button>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </PrimaryContainer>
  );
};

export default Organization;
