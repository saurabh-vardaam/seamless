import React, { useEffect, useState } from "react";
import PrimaryContainer from "../../Components/PrimaryContainer";
import {
  AdjustmentsHorizontalIcon,
  ArrowUpTrayIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  PencilIcon,
  ArrowLeftIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Checkbox from "../../Components/CheckBox";
import BraIcon from "../../Icons/BraIcon";
import PopUp from "../../Components/Popover";
import { Tab } from "@headlessui/react";
import AddEventForm from "./Partials/AddEventForm";
import { classNames } from "../../provider"

const Events = () => {
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
  const eventsData = [
    {
      id: 1,
      name: "Fall NACC Mini Conference",
      status: "Live",
      dates: "10.14.24 - 10.16.24",
      registration_title: "NACC Open Registration",
      type: "Virtual",
      display_title:
        "The 2024 North American Conservation Corps Annual Conference",
      description:
        "The Conference unites people from across sectors and throughout the country who are connected",
      location: "Hyatt Regency Denver at Colorado Convention Center",
      registration_date: "10.02.2024",
    },
    {
      id: 2,
      name: "The 2024 North American Conservation",
      status: "Pause",
      dates: "10.14.24 - 10.16.24",
      registration_title: "NACC Open Registration",
      type: "On-Site",
      display_title:
        "The 2024 North American Conservation Corps Annual Conference",
      description:
        "The Conference unites people from across sectors and throughout the country who are connected",
      location: "Hyatt Regency Denver at Colorado Convention Center",
      registration_date: "10.02.2024",
    },
    {
      id: 3,
      name: "Fall NACC Mini Conference",
      status: "Pause",
      dates: "10.14.24 - 10.16.24",
      registration_title: "NACC Open Registration",
      type: "On-Site",
      display_title:
        "The 2024 North American Conservation Corps Annual Conference",
      description:
        "The Conference unites people from across sectors and throughout the country who are connected",
      location: "Hyatt Regency Denver at Colorado Convention Center",
      registration_date: "10.02.2024",
    },
    {
      id: 4,
      name: "The 2024 North American Conservation",
      status: "InActive",
      dates: "10.14.24 - 10.16.24",
      registration_title: "NACC Open Registration",
      type: "On-Site",
      display_title:
        "The 2024 North American Conservation Corps Annual Conference",
      description:
        "The Conference unites people from across sectors and throughout the country who are connected",
      location: "Hyatt Regency Denver at Colorado Convention Center",
      registration_date: "10.02.2024",
    },
    {
      id: 5,
      name: "Fall NACC Mini Conference",
      status: "Pause",
      dates: "10.14.24 - 10.16.24",
      registration_title: "NACC Open Registration",
      type: "On-Site",
      display_title:
        "The 2024 North American Conservation Corps Annual Conference",
      location: "Hyatt Regency Denver at Colorado Convention Center",
      registration_date: "10.02.2024",
    },
    {
      id: 6,
      name: "The 2024 North American Conservation",
      status: "InActive",
      dates: "10.14.24 - 10.16.24",
      registration_title: "NACC Open Registration",
      type: "On-Site",
      display_title:
        "The 2024 North American Conservation Corps Annual Conference",
      description:
        "The Conference unites people from across sectors and throughout the country who are connected",
      location: "Hyatt Regency Denver at Colorado Convention Center",
      registration_date: "10.02.2024",
    },
    {
      id: 7,
      name: "Fall NACC Mini Conference",
      status: "Pause",
      dates: "10.14.24 - 10.16.24",
      registration_title: "NACC Open Registration",
      type: "On-Site",
      display_title:
        "The 2024 North American Conservation Corps Annual Conference",
      description:
        "The Conference unites people from across sectors and throughout the country who are connected",
      registration_date: "10.02.2024",
    },
  ];
  const [events, setEvents] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState({});
  const [showEventDetails, setEventDetail] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events"));
    const members = JSON.parse(localStorage.getItem("members"));
    if (members?.length > 0) {
      setMembers(members);
    }
    if (events?.length > 0) {
      setEvents(events);
    } else {
      setEvents(eventsData);
    }
  }, []);
  useEffect(() => {
    if (events.length > 0) {
      localStorage.setItem("events", JSON.stringify(events));
    }
  }, [events]);
  return (
    <>
      <AddEventForm
        setIsEdit={setIsEdit}
        isEdit={isEdit}
        setEvents={setEvents}
        events={events}
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
        setIsModelOpen={setIsModelOpen}
        isModelOpen={isModelOpen}
      />
      {showEventDetails ? (
        <PrimaryContainer>
          <h2 className="flex items-center justify-between w-full font-extrabold sm:text-xl md:text-2xl text-seamlessBlue-700 mb-9">
            <div>
              Fall NACC Mini Conference{" "}
              <button className="px-3 py-1 text-xs font-normal rounded-full sm:text-sm text-seamlessGray-950 bg-seamlessGreen-500">
                Active
              </button>
            </div>
            <div
              onClick={() => setEventDetail(false)}
              className="flex items-center cursor-pointer"
            >
              <ArrowLeftIcon className="w-6 h-6 mr-2 text-seamlessBlue-900" />{" "}
              Go Back
            </div>
          </h2>

          <Tab.Group>
            <Tab.List className="flex flex-col border-b-2 border-gray-300 sm:flex-row sm:space-x-9">
              {tabs.map((tab, index) => (
                <Tab
                  key={tab}
                  className={({ selected }) =>
                    classNames(
                      " focus:none leading-[60px]",
                      selected ? "text-base font-semibold text-seamlessBlue-700" : "font-semibold  mb-1 text-base text-seamlessGray-950"
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
                <div className="mt-10 bg-gray-100 border border-seamlessGray-900 rounded-3xl">
                  <div className="bg-white rounded-t-3xl">
                    <div className="flex flex-col items-start justify-between border-b border-seamlessGray-150 sm:flex-row sm:items-center">
                      <p className="px-6 py-4 text-sm font-normal text-seamlessGray-950">
                        Display Title:
                        <span className="ml-2 text-base font-semibold text-seamlessBlue-700">
                          {selectedEvent?.name}
                        </span>
                      </p>
                      <ChevronDownIcon className="w-5 h-5 text-gray-500 cursor-pointer m-3.5" />
                    </div>

                    <div className="space-y-2 border-b border-seamlessGray-150">
                      <div className="py-10 px-9">
                        <span className="flex justify-between">
                          <p className="text-sm font-normal text-seamlessGray-950">
                            Display Title:
                          </p>
                          <PencilIcon className="w-5 h-5" />
                        </span>
                        <h2 className="text-xl font-semibold sm:text-3xl text-seamlessBlue-700">
                          {selectedEvent?.display_title}
                        </h2>
                        <span className="flex items-center mt-2 space-x-2">
                          <div className="relative">
                            <button
                              onClick={() => setIsVisible(!isVisible)}
                              className={`inline-flex h-5 w-9 items-center rounded-full  transition-colors duration-300 border border-black ${
                                isVisible ? "bg-gray-200" : "bg-gray-300"
                              }`}
                            >
                              <span
                                className={`h-3 w-3 bg-white rounded-full transition-transform duration-300 transform border border-black ${
                                  isVisible ? "translate-x-5" : "translate-x-0"
                                }`}
                              />
                            </button>
                          </div>
                          <p className="text-sm font-normal text-seamlessBlue-700">
                            Show On Public Site
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="divide-y divide-seamlessGray-150">
                    <div className="flex items-center px-6 py-4">
                      <p className="text-sm text-seamlessGray-950 ">
                        Description:
                      </p>
                      <p className="ml-2 text-base font-semibold text-seamlessBlue-700">
                        {selectedEvent?.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 px-6 py-4 sm:flex-row sm:items-center">
                      <p className="text-sm text-seamlessGray-950 ">Dates:</p>
                      <p className="text-base font-semibold text-seamlessBlue-700">
                        10.24.24 - 10.16.24
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 px-6 py-4 sm:flex-row sm:items-center">
                      <p className="text-sm text-seamlessGray-950 ">
                        Location:
                      </p>
                      <p className="text-base font-semibold text-seamlessBlue-700">
                        {selectedEvent?.location}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 px-6 py-4 sm:flex-row sm:items-center">
                      <p className="text-sm text-seamlessGray-950 ">
                        Registration Opens:
                      </p>
                      <p className="text-base font-semibold text-seamlessBlue-700">
                        {selectedEvent?.registration_date}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 px-6 py-4 sm:flex-row sm:items-center">
                      <p className="text-sm text-seamlessGray-950 ">
                        Membership Level Access:
                      </p>
                      <p className="text-base font-semibold text-seamlessBlue-700">
                        Chapter Gold, Chapter Silver
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-1 px-6 py-4 sm:flex-row sm:items-center">
                      <p className="text-sm text-seamlessGray-950 ">
                        Event Type:
                      </p>
                      <p className="text-base font-semibold text-seamlessBlue-700">
                        {selectedEvent?.type}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 px-6 py-4 sm:flex-row sm:items-center">
                      <p className="text-sm text-seamlessGray-950 ">
                        Event Category:
                      </p>
                      <p className="text-base font-semibold text-seamlessBlue-700">
                        Outreach
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 px-6 py-4 sm:flex-row sm:items-center">
                      <p className="text-sm text-seamlessGray-950 ">Status:</p>
                      <p className="text-base font-semibold text-seamlessBlue-700">
                        {selectedEvent?.status}
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div>
                  {members?.length > 0 ? (
                    <div className="border max-h-[60vh] mt-10  border-seamlessGray-900 overflow-auto scrollbar-hide rounded-2xl">
                      <table className="min-w-full table-auto ">
                        <thead className="text-sm font-semibold text-left text-seamlessBlue-700">
                          <tr className="border-b border-gray-300">
                            <th className="px-6 text-sm font-semibold">
                              Member Name
                              <BraIcon className="inline-block ml-3 text-left" />
                            </th>
                            <th className="px-4 py-5 text-sm font-semibold">
                              Status
                              <BraIcon className="inline-block ml-3" />
                            </th>
                            <th className="px-4 py-5 text-sm font-semibold text-left">
                              Role
                              <BraIcon className="inline-block ml-3" />
                            </th>
                            <th className="px-4 py-5 text-sm font-semibold text-left">
                              Chapter
                              <BraIcon className="inline-block ml-3" />
                            </th>
                            <th className="px-4 py-5 text-sm font-semibold text-left">
                              Committee
                              <BraIcon className="inline-block ml-3" />
                            </th>
                            <th className="px-4 py-5 text-sm font-semibold text-left">
                              Subscription
                              <BraIcon className="inline-block ml-3" />
                            </th>
                            <th className="px-4 py-5 text-sm font-semibold text-left">
                              Dues
                              <BraIcon className="inline-block ml-3" />
                            </th>
                          </tr>
                        </thead>
                        <tbody className="">
                          {members.map((member, index) => (
                            <tr
                              key={index}
                              className={`border-t w-fit border-b border-gray-300 cursor-pointer ${
                                false ? "bg-white text-seamlessBlue-900 " : ""
                              }`}
                            >
                              <td className="flex items-center gap-3 px-6 py-4 text-sm font-semibold text-seamlessBlue-700">
                                <UserCircleIcon
                                  className={`w-8 h-8 font-normal ${
                                    false
                                      ? "text-seamlessBlue-900"
                                      : "text-seamlessGray-900 "
                                  } `}
                                />
                                {member.firstName}
                              </td>
                              <td className="px-4 ">
                                <span
                                  className={`px-4 py-1.5 rounded-xl text-sm font-normal ${
                                    member.status === "Active"
                                      ? "bg-seamlessGreen-500 text-seamlessGray-950 "
                                      : member.status === "Invited"
                                      ? "bg-seamlessCyan-600 text-seamlessGray-950 "
                                      : member.status === "Inactive"
                                      ? "bg-seamlessPink-500 text-seamlessGray-950 "
                                      : ""
                                  }`}
                                >
                                  {member.status}
                                </span>
                              </td>
                              <td className="px-4 py-2 text-sm font-normal text-seamlessGray-950">
                                {member.role}
                              </td>
                              <td className="px-4 py-2 text-sm font-normal text-seamlessGray-950">
                                {member.chapter}
                              </td>
                              <td className="px-4 py-2 text-sm font-normal text-seamlessGray-950">
                                {member.committee}
                                {member.extraCommittee && (
                                  <span className="px-2 py-1 ml-2 text-sm font-normal rounded-full bg-seamlessGreen-500 text-seamlessGray-950">
                                    +{member.extraCommittee}
                                  </span>
                                )}
                              </td>
                              <td className="px-4 py-2 text-sm font-normal text-seamlessGray-950">
                                {member.subscription || "Chapter Gold"}
                              </td>
                              <td className="px-4 py-2 text-sm font-normal text-seamlessGray-950">
                                {member.dues || "NA"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="mt-6 space-y-4 border border-gray-600 rounded-3xl">
                      <div className="flex items-center justify-center w-full h-60">
                        <div className="flex flex-col items-center ">
                          <p className="text-lg font-semibold ">
                            No Member Added
                          </p>
                          <p className="text-sm font-medium">
                            Please Add New Member to get the memberList
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Tab.Panel>

              {[1, 2, 3, 4, 5, 6]?.map((tab) => (
                <Tab.Panel>
                  <div className="mt-6 space-y-4 border border-gray-600 rounded-3xl">
                    <div className="flex items-center justify-center w-full h-60">
                      <div className="flex flex-col items-center ">
                        <p className="text-lg font-semibold ">Not Created</p>
                        <p className="text-sm font-medium">
                          This Tab Panel is not created please first create the
                          Tab
                        </p>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </PrimaryContainer>
      ) : (
        <PrimaryContainer>
          <div className="max-h-full mb-10 h-fit">
            <h2 className="mb-10 text-xl font-extrabold md:text-2xl text-seamlessBlue-700 md:mb-9">
              Events
            </h2>
            <div className="flex border-b-2 border-gray-300">
              <span className="relative pb-3 text-sm font-semibold text-seamlessBlue-700 md:text-base md:pb-4">
                Events
                <p className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-seamlessGradient-start to-seamlessGradient-end" />
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between mb-6 md:flex-row">
            <div className="flex items-center w-full px-4 py-2 space-x-4 border rounded-full md:w-auto border-seamlessGray-50 bg-seamlessCyan-600">
              <input
                className="w-full text-sm text-gray-900 bg-seamlessCyan-600 focus:outline-none"
                placeholder="Search..."
              />
              <MagnifyingGlassIcon className="w-4 h-4 text-seamlessGray-200" />
            </div>

            <div className="flex flex-wrap items-center justify-center space-x-6 md:justify-end">
              <button className="flex pr-2 space-x-2 items-center leading-[40px] sm:leading-[50px] lg:leading-[60px]">
                <span className="text-base font-semibold text-seamlessGray-950 ">
                  Filter
                </span>
                <AdjustmentsHorizontalIcon className="h-6 w-7 text-seamlessGray-950 " />
              </button>

              <button className="flex items-center gap-2 pr-2 leading-[40px] sm:leading-[50px] lg:leading-[60px]">
                <span className="text-base font-semibold text-seamlessGray-950 ">
                  Export 
                </span>
                <ArrowUpTrayIcon className="h-6 w-7 text-seamlessGray-950 " />
              </button>

              <button
                onClick={() => {
                  setSelectedEvent({});
                  setIsModelOpen(true);
                }}
                className="py-2.5 mt-2 text-xs font-semibold text-white bg-seamlessBlue-700 rounded-3xl sm:text-sm lg:px-9 md:mt-0 px-9"
              >
                ADD A NEW EVENT
              </button>
            </div>
          </div>
          <div className="mt-10 mb-6 overflow-auto border border-seamlessGray-900 rounded-3xl scrollbar-hide"> 
            <table className="min-w-full table-auto ">
              <thead className="text-sm font-semibold text-left text-seamlessBlue-700">
                <tr className="border-b border-gray-300">
                  <th className="px-6 py-4 text-sm font-normal">
                    <Checkbox />
                  </th>
                  <th className="py-4 text-sm font-semibold">
                    Event Name
                    <BraIcon className="inline-block ml-3 " />
                  </th>
                  <th className="py-4 text-sm font-semibold">
                    Status
                    <BraIcon className="inline-block ml-3 " />
                  </th>
                  <th className="px-2 py-4 text-sm font-semibold">
                    Dates
                    <BraIcon className="inline-block ml-3" />
                  </th>
                  <th className="px-2 py-4 text-sm font-semibold">
                    Registration
                    <BraIcon className="inline-block ml-3 " />
                  </th>
                  <th className="px-2 py-4 text-sm font-semibold">
                    Type
                    <BraIcon className="inline-block ml-3 " />
                  </th>
                  <th className="px-2 py-4"></th>
                </tr>
              </thead>
              <tbody className="">
                {events.map((event, index) => (
                  <tr
                    key={index}
                    className={`border-t border-gray-300 ${
                      selectedEvent?.id === event?.id ? "bg-white" : ""
                    }`}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <td className="px-6 py-4 text-sm font-medium">
                      <Checkbox />
                    </td>
                    <td className="py-4 text-sm font-semibold text-seamlessBlue-700">
                      {event.name}
                    </td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1.5 rounded-xl text-sm font-normal ${
                          event.status === "Live"
                            ? "bg-seamlessGreen-500 text-seamlessGray-950 "
                            : event.status === "Pause"
                            ? "bg-seamlessCyan-600 text-seamlessGray-950 "
                            : event.status === "InActive"
                            ? "bg-seamlessPink-500 text-seamlessGray-950 "
                            : event.status === "Active"
                            ? "bg-seamlessBlue-900 text-white"
                            : ""
                        }`}
                      >
                        {event.status}
                      </span>
                    </td>

                    <td className="px-2 py-4 text-sm font-normal text-seamlessGray-950">
                      {event.dates || "10.14.24 - 10.16.24"}
                    </td>
                    <td className="px-2 py-4 text-sm font-normal text-seamlessGray-950">
                      {event?.registration_title}
                    </td>
                    <td className="px-2 py-4 text-sm font-normal text-seamlessGray-950">
                      {event.type}
                    </td>
                    <td className="px-2 py-4 text-left">
                      <PopUp
                        onDelete={(e, close) => {
                          e.preventDefault();
                          setEvents((pre) =>
                            pre?.filter((curEvnt) => curEvnt?.id !== event?.id)
                          );
                          close();
                        }}
                        onChange={() => {
                          setIsEdit(true);
                          setIsModelOpen(true);
                        }}
                        onEdit={() => setEventDetail(true)}
                        editName="getDetails"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PrimaryContainer>
      )}
    </>
  );
};

export default Events;
