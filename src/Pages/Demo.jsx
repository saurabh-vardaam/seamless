import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { GlobeAltIcon, PhoneIcon, MailIcon } from "@heroicons/react/solid"; // Import heroicons

const MembershipUI = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* Tabs Navigation */}
      <Tabs>
        <TabList className="flex pb-3 space-x-8 border-b border-gray-300">
          <Tab
            className="text-gray-600 cursor-pointer focus:outline-none"
            selectedClassName="text-blue-600 border-b-2 border-blue-600 font-semibold"
          >
            Member Details
          </Tab>
          <Tab className="text-gray-600 cursor-pointer">Events</Tab>
          <Tab className="text-gray-600 cursor-pointer">Education</Tab>
          <Tab className="text-gray-600 cursor-pointer">Committees</Tab>
          <Tab className="text-gray-600 cursor-pointer">Transactions</Tab>
          <Tab className="text-gray-600 cursor-pointer">Documents</Tab>
          <Tab className="text-gray-600 cursor-pointer">History</Tab>
        </TabList>

        {/* Tab Panel for Member Details */}
        <TabPanel>
          <div className="p-6 mt-6 bg-white shadow rounded-xl">
            {/* Profile Header */}
            <div className="flex space-x-6">
              {/* Profile Image */}
              <div className="relative">
                <img
                  className="w-24 h-24 rounded-full"
                  src="https://via.placeholder.com/100"
                  alt="Profile"
                />
                <span className="absolute top-0 right-0 px-2 py-1 text-xs text-purple-700 bg-purple-100 rounded-full">
                  Invited
                </span>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold">Vanessa Lopez</h2>
                <p className="text-gray-500">Director of Communications</p>
                <p className="text-gray-500">Tuscon Arizona Chapter NACC</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-right">
                <a
                  href="#"
                  className="flex items-center space-x-1 text-blue-500 hover:underline"
                >
                  <GlobeAltIcon className="w-5 h-5" />
                  <span>www.NACC/TusconArizona</span>
                </a>
                <p className="flex items-center space-x-1 text-gray-500">
                  <PhoneIcon className="w-5 h-5" />
                  <span>1.301.433.9928</span>
                </p>
                <p className="flex items-center space-x-1 text-gray-500">
                  <MailIcon className="w-5 h-5" />
                  <span>vlopez@NACC.com</span>
                </p>
              </div>
            </div>

            {/* Status and Actions */}
            <div className="flex items-center justify-between mt-6">
              <div>
                <p className="text-gray-600">
                  Status:{" "}
                  <span className="px-3 py-1 text-gray-800 bg-gray-200 rounded-full">
                    Invited
                  </span>
                </p>
              </div>
              <div className="space-x-4">
                <button className="px-4 py-2 text-gray-800 bg-gray-200 rounded-full">
                  Resend Invite
                </button>
                <button className="px-4 py-2 text-white bg-blue-600 rounded-full">
                  Reset Password
                </button>
              </div>
            </div>

            {/* Member Details */}
            <div className="mt-6">
              <div className="py-4 text-gray-600 border-b">
                <p>
                  Member ID:{" "}
                  <span className="text-blue-600">1032882</span>
                </p>
              </div>
              <div className="py-4 text-gray-600 border-b">
                <p>
                  Role: <span className="font-semibold">Admin</span>
                </p>
              </div>
              <div className="py-4 text-gray-600 border-b">
                <p>
                  Chapter:{" "}
                  <span className="text-blue-600">
                    Tuscon Arizona Chapter NACC
                  </span>
                </p>
              </div>
              <div className="py-4 text-gray-600 border-b">
                <p>
                  Committees:{" "}
                  <span className="text-blue-600">
                    South West, Events, Education
                  </span>
                </p>
              </div>
              <div className="py-4 text-gray-600 border-b">
                <p>
                  Subscription:{" "}
                  <span className="text-blue-600">Chapter Gold</span>{" "}
                  <span className="px-2 py-1 text-sm text-green-600 bg-green-100 rounded-full">
                    Current
                  </span>
                </p>
              </div>
              <div className="py-4 text-gray-600">
                <p>
                  Renewal:{" "}
                  <span className="text-blue-600">01.15.2025</span>{" "}
                  <span className="px-2 py-1 text-sm text-green-600 bg-green-100 rounded-full">
                    Auto
                  </span>
                </p>
              </div>
            </div>
          </div>
        </TabPanel>
        {/* Additional Tabs Panels */}
        <TabPanel>
          <p>Events Content</p>
        </TabPanel>
        <TabPanel>
          <p>Education Content</p>
        </TabPanel>
        <TabPanel>
          <p>Committees Content</p>
        </TabPanel>
        <TabPanel>
          <p>Transactions Content</p>
        </TabPanel>
        <TabPanel>
          <p>Documents Content</p>
        </TabPanel>
        <TabPanel>
          <p>History Content</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MembershipUI;
