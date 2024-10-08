import React from "react";
import PrimaryContainer from "../Components/PrimaryContainer";
import Chart from "react-google-charts";
import NaccLogo from "../Images/NaccLogo.png";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";
import PopUp from "../Components/Popover";

const Dashboard = () => {
  const data = [
    ["Day", "Background Engagement", "Foreground Engagement"],
    ["Mon", 10, 10],
    ["Tue", 12, 10],
    ["Wed", 14, 5],
    ["Thu", 10, 8],
    ["Fri", 9, 7],
    ["Sat", 11, 4],
    ["Sun", 12, 6],
  ];

  const options = {
    chartArea: { width: "95%", height: "90%" },
    colors: ["#2E3E77", "#A9C7EE"],
    bar: { groupWidth: "20%" },
    isStacked: true,
    hAxis: {
      baselineColor: "transparent",
      gridlines: { color: "transparent" },
      textPosition: "none",
    },
    vAxis: {
      gridlines: { color: "#E5E7EB" },
      baselineColor: "#E5E7EB",
      textPosition: "none",
    },
    legend: { position: "none" },
    backgroundColor: "transparent",
  };

  const cardData = [
    {
      id:"0",
      title: "ORGANIZATION",
      content: (
        <div className="py-10 mx-auto">
          <img
            src={NaccLogo}
            alt="Organization Logo"
            className="items-center h-16 "
          />
        </div>
      ),
      className: "col-span-1 md:col-span-1  ",
    },
    {
      id:"1",
      title: "ENGAGEMENT",
      content: (
        <div className="relative w-full">
          <Chart
            chartType="ColumnChart"
            data={data}
            options={options}
            width="100%"
            height="100px"
          />
        </div>
      ),
      className: "col-span-1 md:col-span-2",
    },
    {
      id:"2",
      title: "CHAPTERS",
      content: (
        <div className="grid items-baseline w-full grid-cols-2 gap-4 mx-1 md:gap-10">
          <p className="text-2xl font-extrabold md:text-4xl text-seamlessBlue-700">
            78{" "}
            <span className="text-base font-semibold text-seamlessBlue-700">
              Active
            </span>
          </p>
          <p className="text-2xl font-extrabold md:text-4xl text-seamlessGray-900">
            2{" "}
            <span className="text-base font-semibold text-seamlessGray-900">
              Inactive
            </span>
          </p>
        </div>
      ),
      className: "col-span-1",
    },
    {
      id:"3",
      title: "COMMITTEES",
      content: (
        <div className="grid items-baseline w-full grid-cols-2 gap-4 md:gap-5">
          <p className="text-2xl font-extrabold md:text-4xl text-seamlessBlue-700">
            102{" "}
            <span className="text-base font-semibold text-seamlessBlue-700">
              Active
            </span>
          </p>
          <p className="text-2xl font-extrabold md:text-4xl text-seamlessGray-900">
            23{" "}
            <span className="text-base font-semibold text-seamlessGray-900">
              Inactive
            </span>
          </p>
        </div>
      ),
      className: "col-span-1",
    },
    {
      id:"4",
      title: "SUBSCRIBERS",
      content: (
        <div className="grid items-baseline w-full grid-cols-2 gap-4 mx-1 md:gap-5">
          <p className="text-2xl font-extrabold md:text-4xl text-seamlessBlue-700">
            325{" "}
            <span className="text-base font-semibold text-seamlessBlue-700">
              Active
            </span>
          </p>
          <p className="text-2xl font-extrabold md:text-4xl text-seamlessGray-900">
            11{" "}
            <span className="text-base font-semibold text-seamlessGray-900">
              Inactive
            </span>
          </p>
        </div>
      ),
      className: "col-span-1",
    },
    {
      id:"5",
      title: "MEMBERS",
      content: (
        <div className="w-full ">
          <div className="grid w-full grid-cols-2 gap-4 mt-4 xl:grid-cols-3">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold md:text-4xl text-seamlessBlue-700">
                1,240
              </span>
              <span className="text-sm font-semibold md:text-base text-seamlessBlue-700">
                Total Active
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold md:text-4xl text-seamlessGray-900">
                2
              </span>
              <span className="text-sm font-semibold md:text-base text-seamlessGray-900">
                Total Inactive
              </span>
            </div>
          </div>

          <div className="grid w-full grid-cols-3 gap-10 mt-8 xl:grid-cols-6 ">
            <div className="space-y-4 text-left">
              <h3 className="text-sm font-extrabold md:text-lg text-seamlessBlue-700 ">
                BOD
              </h3>
              <p className="text-xl font-extrabold md:text-4xl text-seamlessBlue-700 ">
                6
              </p>
            </div>
            <div className="space-y-4 text-left">
              <h3 className="text-sm font-extrabold md:text-lg text-seamlessBlue-700 ">
                STAFF
              </h3>
              <p className="text-xl font-extrabold md:text-4xl text-seamlessBlue-700 ">
                16
              </p>
            </div>
            <div className="col-span-2 space-y-4 text-left">
              <h3 className="text-sm font-extrabold md:text-lg text-seamlessBlue-700 ">
                CHAPTER MEMBERS
              </h3>
              <p className="text-xl font-extrabold md:text-4xl text-seamlessBlue-700 ">
                1,123
              </p>
            </div>
            <div className="col-span-2 space-y-4 text-left">
              <h3 className="text-sm font-extrabold md:text-lg text-seamlessBlue-700 ">
                COMMITTEE MEMBERS
              </h3>
              <p className="text-xl font-extrabold md:text-4xl text-seamlessBlue-700 ">
                234
              </p>
            </div>
          </div>
        </div>
      ),
      className: "col-span-1 md:col-span-2",
    },
    {
      id:"6",
      title: "NONMEMBERS",
      content: (
        <div className="grid items-baseline w-full grid-cols-2 gap-4 md:gap-8">
          <p className="text-2xl font-extrabold md:text-4xl text-seamlessBlue-700 ">
            115{" "}
            <span className="text-base font-semibold text-seamlessBlue-700 ">
              Active
            </span>
          </p>
          <p className="mt-4 text-2xl font-extrabold md:text-4xl md:mt-24 text-seamlessGray-900">
            12 <span className="text-sm text-seamlessGray-900">Inactive</span>
          </p>
        </div>
      ),
      className: "col-span-1",
    },
  ];

  return (
    <PrimaryContainer>
      <div>
        <h1 className="mb-12 text-2xl font-extrabold text-seamlessBlue-700">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
          {cardData.map((card, index) => {
            return (
              <div
                key={index}
                className={`bg-seamlessCyan-500  flex flex-col  ${card.className}  `}
              >
                <div className="px-8 py-6 grow">
                  <div className="flex items-center justify-between ">
                    <h2 className="text-lg font-extrabold text-seamlessBlue-700">
                      {card.title}
                    </h2>
                    <PopUp />
                  </div>
                  <div className="flex items-center py-2">{card.content}</div>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-seamlessGradient-start to-seamlessGradient-end" />
              </div>
            );
          })}
        </div>
      </div>
    </PrimaryContainer>
  );
};

export default Dashboard;
