import React, { useState } from "react";
import PrimaryContainer from "../Components/PrimaryContainer";
import {
  AdjustmentsHorizontalIcon,
  ArrowUpTrayIcon,
  EllipsisHorizontalCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Checkbox from "../Components/CheckBox";
import BraIcon from "../Icons/BraIcon";
import Member from "../Images/Member.png";
import { Tab } from "@headlessui/react";
import Modal from "../Components/Modal";
import AddMemberForm from "./AddMemberForm";
import { Popover } from "@headlessui/react";
import PopUp from "../Components/Popover";

const Membership = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleRowClick = (index) => {
    setSelectedRow(index);
  };
  const classNames = (...classes) => classes.filter(Boolean).join(" ");
  const members = [
    {
      profile: (
        <img src={Member} className="w-8 h-8 mt-1 rounded-full cursor-none" />
      ),
      name: "Vanessa Lopez",
      status: "Invited",
      role: "Admin",
      chapter: "NA",
      committee: "NA",
      subscription: "Chapter Gold",
      dues: "NA",
    },
    {
      name: "Vanessa Lopez",
      profile: (
        <img src={Member} className="w-8 h-8 mt-1 rounded-full cursor-none" />
      ),
      status: "Active",
      role: "Admin",
      chapter: "Tucson Arizona",
      committee: "South West",
      subscription: "Chapter Gold",
      dues: "Current",
      extraCommittee: 3,
    },
  ];

  return (
    <PrimaryContainer>
      <h2 className="sm:text-xl md:text-2xl font-extrabold text-[#283275] mb-9">
        Membership
      </h2>

      <Tab.Group>
        <Tab.List className="flex flex-col border-b-2 border-gray-300 sm:flex-row sm:space-x-9">
          {["Member", "Member Roles", "Subscriptions", "Registration"].map(
            (tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    "text-base font-semibold leading-[60px]",
                    selected
                      ? "border-b-2 border-blue-900 font-semibold text-[#283275]"
                      : "font-semibold text-[#282728]"
                  )
                }
              >
                {tab}
              </Tab>
            )
          )}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <div>
              <div className="flex flex-col items-center justify-between mt-6 mb-6 space-y-4 md:flex-row md:space-y-0">
                <div className="flex items-center w-full md:w-auto space-x-4 rounded-full border border-[#DFDEDE] bg-[#cdd5d4] py-2 px-4">
                  <input
                    className="w-full bg-[#cdd5d4] text-sm text-gray-900 focus:outline-none"
                    placeholder="Search..."
                  />
                  <MagnifyingGlassIcon className="text-[#676b6a] w-4 h-4" />
                </div>

                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-base font-medium text-[#282728]">
                    <span>Filter</span>
                    <AdjustmentsHorizontalIcon className="w-6 h-6" />
                  </button>
                  <button className="flex items-center space-x-2 text-base font-medium text-[#282728]">
                    <span>Export List</span>
                    <ArrowUpTrayIcon className="w-6 h-6" />
                  </button>
                  <button
                    className="px-6 py-2 text-white bg-[#283275] rounded-3xl font-semibold text-sm"
                    onClick={() => setIsModalOpen(true)} 
                  >
                    ADD MEMBER
                  </button>
                </div>
              </div>

              <div className="border border-[#6b6a6b] rounded-2xl overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead className="text-left text-[#283275] text-sm font-semibold">
                    <tr className="border-b border-gray-300">
                      <th className="px-4 py-3">
                        <Checkbox />
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold">
                        Member Name
                        <BraIcon className="inline-block ml-3" />
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold">
                        Status
                        <BraIcon className="inline-block ml-3" />
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold">
                        Role
                        <BraIcon className="inline-block ml-3" />
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold">
                        Chapter
                        <BraIcon className="inline-block ml-3" />
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold">
                        Committee
                        <BraIcon className="inline-block ml-3" />
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold">
                        Subscription
                        <BraIcon className="inline-block ml-3" />
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold">
                        Dues
                        <BraIcon className="inline-block ml-3" />
                      </th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member, index) => (
                      <tr
                        key={index}
                        className={`border-t border-gray-300 cursor-pointer ${
                          selectedRow === index ? "bg-[#ffffff]" : ""
                        }`}
                        onClick={() => handleRowClick(index)}
                      >
                        <td className="px-4 py-2">
                          <Checkbox />
                        </td>
                        <td className="flex items-center gap-3 px-4 py-2">
                          {member.profile}
                          {member.name}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-4 py-1.5 rounded-xl text-sm font-normal ${
                              member.status === "Active"
                                ? "bg-[#c2e0b3] text-[#282728]"
                                : member.status === "Invited"
                                ? "bg-[#cdd5d4] text-[#282728]"
                                : member.status === "Inactive"
                                ? "bg-[#e0b3c9] text-[#282728]"
                                : ""
                            }`}
                          >
                            {member.status}
                          </span>
                        </td>
                        <td className="px-4 py-2">{member.role}</td>
                        <td className="px-4 py-2">{member.chapter}</td>
                        <td className="flex items-center px-4 py-2">
                          {member.committee}
                          {member.extraCommittee && (
                            <span className="px-2 py-1 ml-2 text-sm bg-[#c2e0b3] text-[#282728] rounded-full">
                              +{member.extraCommittee}
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-2">{member.subscription}</td>
                        <td className="px-4 py-2">{member.dues}</td>
                        <td className="px-4 py-2 text-right">
                         <PopUp />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <AddMemberForm /> 
        </Modal>
      )}
    </PrimaryContainer>
  );
};

export default Membership;
