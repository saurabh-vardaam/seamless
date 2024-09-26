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
        <div className="flex items-center justify-center h-16">
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
     <div className="p-8  bg-gray-50">
      <h1 className="mb-6 text-xl font-bold text-indigo-900">Dashboard</h1>
      
      {/* First Row */}
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
        {/* Organization Card */}
        <div className="relative p-4 bg-white rounded-lg shadow">
          <div className="absolute top-4 right-4">
            <EllipsisHorizontalCircleIcon className="w-5 h-5 text-gray-400" />
          </div>
          <h2 className="mb-2 text-sm font-semibold text-indigo-900">ORGANIZATION</h2>
          <div className="flex items-center mt-2">
            {/* Organization logo */}
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
              {/* Replace with actual logo */}
              <span className="text-2xl font-bold text-gray-600">nacc</span>
            </div>
          </div>
          <div className="mt-4 border-t-4 border-gradient-to-r from-purple-400 to-teal-400"></div>
        </div>

        {/* Engagement Card */}
        <div className="relative p-4 bg-white rounded-lg shadow">
          <div className="absolute top-4 right-4">
            <EllipsisHorizontalCircleIcon className="w-5 h-5 text-gray-400" />
          </div>
          <h2 className="mb-2 text-sm font-semibold text-indigo-900">ENGAGEMENT</h2>
          <div className="h-24 mt-4 bg-gray-200 rounded-md">
            {/* Replace this div with the graph */}
          </div>
          <div className="mt-4 border-t-4 border-gradient-to-r from-purple-400 to-teal-400"></div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Chapters Card */}
        <div className="relative p-4 bg-white rounded-lg shadow">
          <div className="absolute top-4 right-4">
            <EllipsisHorizontalCircleIcon className="w-5 h-5 text-gray-400" />
          </div>
          <h2 className="mb-2 text-sm font-semibold text-indigo-900">CHAPTERS</h2>
          <div className="flex mt-2">
            <span className="text-2xl font-bold text-gray-800">78</span>
            <div className="ml-4">
              <span className="text-gray-600">Active</span>
              <span className="block text-gray-500">2 Inactive</span>
            </div>
          </div>
          <div className="mt-4 border-t-4 border-gradient-to-r from-purple-400 to-teal-400"></div>
        </div>

        {/* Committees Card */}
        <div className="relative p-4 bg-white rounded-lg shadow">
          <div className="absolute top-4 right-4">
            <EllipsisHorizontalCircleIcon className="w-5 h-5 text-gray-400" />
          </div>
          <h2 className="mb-2 text-sm font-semibold text-indigo-900">COMMITTEES</h2>
          <div className="flex mt-2">
            <span className="text-2xl font-bold text-gray-800">102</span>
            <div className="ml-4">
              <span className="text-gray-600">Active</span>
              <span className="block text-gray-500">23 Inactive</span>
            </div>
          </div>
          <div className="mt-4 border-t-4 border-gradient-to-r from-purple-400 to-teal-400"></div>
        </div>

        {/* Subscribers Card */}
        <div className="relative p-4 bg-white rounded-lg shadow">
          <div className="absolute top-4 right-4">
            <EllipsisHorizontalCircleIcon className="w-5 h-5 text-gray-400" />
          </div>
          <h2 className="mb-2 text-sm font-semibold text-indigo-900">SUBSCRIBERS</h2>
          <div className="flex mt-2">
            <span className="text-2xl font-bold text-gray-800">325</span>
            <div className="ml-4">
              <span className="text-gray-600">Active</span>
              <span className="block text-gray-500">11 Inactive</span>
            </div>
          </div>
          <div className="mt-4 border-t-4 border-gradient-to-r from-purple-400 to-teal-400"></div>
        </div>

        {/* Nonmembers Card */}
        <div className="relative p-4 bg-white rounded-lg shadow">
          <div className="absolute top-4 right-4">
            <EllipsisHorizontalCircleIcon className="w-5 h-5 text-gray-400" />
          </div>
          <h2 className="mb-2 text-sm font-semibold text-indigo-900">NONMEMBERS</h2>
          <div className="flex mt-2">
            <span className="text-2xl font-bold text-gray-800">115</span>
            <div className="ml-4">
              <span className="text-gray-600">Active</span>
              <span className="block text-gray-500">12 Inactive</span>
            </div>
          </div>
          <div className="mt-4 border-t-4 border-gradient-to-r from-purple-400 to-teal-400"></div>
        </div>
      </div>

      {/* Members Section */}
      <div className="p-6 mt-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-sm font-semibold text-indigo-900">MEMBERS</h2>
        <div className="flex mb-4">
          <span className="text-3xl font-bold text-gray-800">1,240</span>
          <div className="ml-4">
            <span className="text-gray-600">Total Active</span>
            <span className="block text-gray-500">2 Total Inactive</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div>
            <span className="text-2xl font-bold text-gray-800">6</span>
            <p className="text-sm text-gray-600">BOD</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-gray-800">16</span>
            <p className="text-sm text-gray-600">Staff</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-gray-800">1,123</span>
            <p className="text-sm text-gray-600">Chapter Members</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-gray-800">234</span>
            <p className="text-sm text-gray-600">Committee Members</p>
          </div>
        </div>
      </div>
    </div>
    </PrimaryContainer>
  );
};

export default Dashboard;
