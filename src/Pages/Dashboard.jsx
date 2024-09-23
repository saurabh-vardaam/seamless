import React from "react";
import PrimaryContainer from "../Components/PrimaryContainer";
import Nacclogo from "../Icons/NaccLogo";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";

const Dashboard = () => {
  const cardData = [
    {
      title: "ORGANIZATION",
      content: <Nacclogo />,
    },
    {
      title: "ENGAGEMENT",
      content: (
        <div className="h-16 flex items-center justify-center">
          {/* Add a chart or graph here */}
          <p>Graph goes here</p>
        </div>
      ),
    },
    {
      title: "CHAPTERS",
      content: (
        <div>
          <p className="text-3xl font-bold">
            78 <span className="text-sm">Active</span>
          </p>
          <p className="text-sm">2 Inactive</p>
        </div>
      ),
    },
    {
      title: "COMMITTEES",
      content: (
        <div>
          <p className="text-3xl font-bold">
            102 <span className="text-sm">Active</span>
          </p>
          <p className="text-sm">23 Inactive</p>
        </div>
      ),
    },
    {
      title: "SUBSCRIBERS",
      content: (
        <div>
          <p className="text-3xl font-bold">
            325 <span className="text-sm">Active</span>
          </p>
          <p className="text-sm">11 Inactive</p>
        </div>
      ),
    },
    {
      title: "MEMBERS",
      content: (
        <div>
          <p className="text-3xl font-bold">
            1,240 <span className="text-sm">Total Active</span>
          </p>
          <p className="text-sm">2 Total Inactive</p>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div>BOD: 6</div>
            <div>Staff: 16</div>
            <div>Chapter Members: 1,123</div>
            <div>Committee Members: 234</div>
          </div>
        </div>
      ),
    },
    {
      title: "NONMEMBERS",
      content: (
        <div>
          <p className="text-3xl font-bold">
            115 <span className="text-sm">Active</span>
          </p>
          <p className="text-sm">12 Inactive</p>
        </div>
      ),
    },
  ];
  return (
    <PrimaryContainer>
      <div>
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-[#d9e3e2] shadow-lg rounded-lg p-6 relative"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold mb-4">{card.title}</h2>
                <EllipsisHorizontalCircleIcon className="w-6 h-6" />
              </div>
              {card.content}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500" />
            </div>
          ))}
        </div>
      </div>
    </PrimaryContainer>
  );
};

export default Dashboard;
