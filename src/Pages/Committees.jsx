import React from 'react'
import PrimaryContainer from '../Components/PrimaryContainer';
import { Tab } from '@headlessui/react';
import { CheckCircleIcon, PencilIcon } from '@heroicons/react/24/outline';


const Committees = () => {
    const tabs = [
        'Event Details',
        'Registration',
        'Schedule',
        'Pricing',
        'CEU\'s',
        'Speakers',
        'Exhibitors',
        'Sponsors',
      ];
    return <PrimaryContainer>
         <div className="min-h-screen p-6 bg-gray-100">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Fall NACC Mini Conference</h1>
        <button className="px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
          Active
        </button>
      </div>

      {/* Tabs */}
      <Tab.Group>
        <Tab.List className="flex mb-6 space-x-4 border-b border-gray-300">
          {tabs.map((tab, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                selected
                  ? 'text-purple-600 border-b-2 border-purple-600 pb-2 font-semibold'
                  : 'text-gray-500 pb-2 hover:text-purple-600'
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>

        {/* Event Details */}
        <Tab.Panels>
          <Tab.Panel>
            <div className="p-6 space-y-4 bg-white border border-gray-200 rounded-lg shadow">
              {/* Display Title */}
              <div className="flex items-center justify-between pb-4 border-b">
                <p className="text-gray-700">Display Title: Fall NACC Mini Conference</p>
                <PencilIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
              </div>

              {/* Main Event Title */}
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-gray-800">
                  The 2024 North American Conservation Corps Annual Conference
                </h2>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <p className="text-sm text-gray-600">Show On Public Site</p>
                </div>
              </div>

              {/* Event Information */}
              <div className="pt-4 space-y-2 border-t">
                {/* Description */}
                <div className="flex justify-between">
                  <p className="font-semibold text-gray-600">Description:</p>
                  <p className="text-gray-700">
                    The Conference unites people from across sectors and throughout the country who are connected...
                  </p>
                </div>

                {/* Dates */}
                <div className="flex justify-between">
                  <p className="font-semibold text-gray-600">Dates:</p>
                  <p className="text-gray-700">10.24.24 - 10.16.24</p>
                </div>

                {/* Location */}
                <div className="flex justify-between">
                  <p className="font-semibold text-gray-600">Location:</p>
                  <p className="text-gray-700">
                    Hyatt Regency Denver at Colorado Convention Center
                  </p>
                </div>

                {/* Registration Opens */}
                <div className="flex justify-between">
                  <p className="font-semibold text-gray-600">Registration Opens:</p>
                  <p className="text-gray-700">10.02.2024</p>
                </div>

                {/* Membership Level Access */}
                <div className="flex justify-between">
                  <p className="font-semibold text-gray-600">Membership Level Access:</p>
                  <p className="text-gray-700">Chapter Gold, Chapter Silver</p>
                </div>

                {/* Event Type */}
                <div className="flex justify-between">
                  <p className="font-semibold text-gray-600">Event Type:</p>
                  <p className="text-gray-700">On-Site</p>
                </div>

                <div className="flex justify-between">
                  <p className="font-semibold text-gray-600">Event Category:</p>
                  <p className="text-gray-700">Outreach</p>
                </div>

                <div className="flex justify-between">
                  <p className="font-semibold text-gray-600">Status:</p>
                  <p className="text-gray-700">Active</p>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  </PrimaryContainer>;

}

export default Committees;