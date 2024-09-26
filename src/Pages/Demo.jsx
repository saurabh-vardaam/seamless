import React, { useState } from "react";

const ConferencePage = () => {
  // Manage collapsible sections state
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="min-h-screen p-5 bg-gray-100">
      <div className="max-w-6xl p-6 mx-auto bg-white rounded-lg shadow-lg">
        {/* Title and Status */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-semibold">Fall NACC Mini Conference</h1>
          <span className="px-3 py-1 text-sm font-medium text-green-600 bg-green-100 rounded-full">
            Active
          </span>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex space-x-8">
            <a href="#" className="py-2 text-blue-600 border-b-2 border-blue-600">
              Event Details
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              Registration
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              Schedule
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              Pricing
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              CEU's
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              Speakers
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              Exhibitors
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              Sponsors
            </a>
          </nav>
        </div>

        {/* Display Title */}
        <div className="p-4 mb-6 rounded-lg shadow-inner bg-gray-50">
          <h2 className="text-lg font-semibold">Display Title:</h2>
          <p className="text-xl font-bold">The 2024 North American Conservation Corps Annual Conference</p>
          <div className="flex items-center mt-2">
            <input type="checkbox" id="show" className="mr-2" />
            <label htmlFor="show" className="text-sm">Show On Public Site</label>
          </div>
        </div>

        {/* Collapsible Sections */}
        {[
          { title: "Description", content: "The Conference unites people from across sectors..." },
          { title: "Dates", content: "10.14.24 - 16.16.24" },
          { title: "Location", content: "Hyatt Regency Denver at Colorado Convention Center" },
          { title: "Registration Opens", content: "10.02.2024" },
          { title: "Membership Level Access", content: "Chapter Gold, Chapter Silver" },
          { title: "Event Type", content: "On-Site" },
          { title: "Event Category", content: "Outreach" },
          { title: "Status", content: "Active" }
        ].map((section, idx) => (
          <div key={idx} className="mb-4">
            <button
              onClick={() => toggleSection(idx)}
              className="flex items-center justify-between w-full p-3 text-left rounded-lg shadow-inner bg-gray-50"
            >
              <span>{section.title}</span>
              <span>{activeSection === idx ? "▲" : "▼"}</span>
            </button>
            {activeSection === idx && (
              <div className="p-3 bg-white border-b border-l border-r border-gray-200">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConferencePage;
