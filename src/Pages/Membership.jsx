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

const Membership = () => {
  const [selectedRow, setSelectedRow] = useState(null);

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
    {
      name: "Vanessa Lopez",
      profile: (
        <img src={Member} className="w-8 h-8 mt-1 rounded-full cursor-none" />
      ),
      status: "Inactive",
      role: "Admin",
      chapter: "Tucson Arizona",
      committee: "South West",
      subscription: "Chapter Gold",
      dues: "Current",
    },
    {
      name: "Vanessa Lopez",
      profile: (
        <img src={Member} className="w-8 h-8 mt-1 rounded-full cursor-none" />
      ),
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
      extraCommittee: 1,
    },
    {
      name: "Vanessa Lopez",
      profile: (
        <img src={Member} className="w-8 h-8 mt-1 rounded-full cursor-none" />
      ),
      status: "Inactive",
      role: "Admin",
      chapter: "Tucson Arizona",
      committee: "South West",
      subscription: "Chapter Gold",
      dues: "Current",
    },
    {
      name: "Vanessa Lopez",
      profile: (
        <img src={Member} className="w-8 h-8 mt-1 rounded-full cursor-none" />
      ),
      status: "Invited",
      role: "Admin",
      chapter: "NA",
      committee: "NA",
      subscription: "Chapter Gold",
      dues: "NA",
      extraCommittee: 2,
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
    {
      name: "Vanessa Lopez",
      profile: (
        <img src={Member} className="w-8 h-8 mt-1 rounded-full cursor-none" />
      ),
      status: "Inactive",
      role: "Admin",
      chapter: "Tucson Arizona",
      committee: "South West",
      subscription: "Chapter Gold",
      dues: "Current",
    },
  ];

  return (
    <PrimaryContainer>
      <h2 className="text-2xl font-semibold text-[#283275] mb-9">MemberShip</h2>

      <Tab.Group>
        <Tab.List className="flex flex-col border-b-2 border-gray-300 sm:flex-row sm:space-x-6">
          {["Member", "Member Roles", "Subscriptions", "Registration"].map(
            (tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    " text-base font-semibold leading-[60px] ",
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
            <div className="mb-6"></div>
            <div>
              <div className="flex flex-col items-center justify-between mb-6 md:flex-row">
                <div className="flex flex-col items-start gap-2.5 rounded-full border border-[#DFDEDE] bg-[#cdd5d4] py-2 px-4 w-full md:w-auto">
                  <div className="flex items-center gap-2">
                    <input
                      className="w-full max-w-56 bg-[#cdd5d4] text-sm leading-normal text-gray-900 focus:outline-none focus:ring-0 md:w-40"
                      placeholder="Search..."
                    />
                    <MagnifyingGlassIcon className="text-[#676b6a] w-4 h-4" />
                  </div>
                </div>

                <div className="flex items-center gap-10 mt-4 md:mt-0">
                  <button className="flex pr-2 space-x-4 item leading-[60px]">
                    <span className="text-base font-medium text-[#282728]">
                      Filter
                    </span>
                    <AdjustmentsHorizontalIcon className="w-6 h-6 text-[#282728]" />
                  </button>
                  <button className="flex items-center gap-4 pr-2 leading-[60px]">
                    <span className="text-base font-medium text-[#282728]">
                      Export List
                    </span>
                    <ArrowUpTrayIcon className="w-6 h-6 text-[#282728]" />
                  </button>
                  <button className="px-10 py-2 text-[#edefef] bg-[#283275] rounded-3xl font-semibold text-sm ">
                    ADD MEMBER
                  </button>
                </div>
              </div>
              <div className="border border-[#6b6a6b] rounded-2xl">
                <table className="min-w-full table-auto">
                  <thead className="text-left text-[#283275] text-sm font-semibold ">
                    <tr className="border-b border-gray-300">
                      <th className="px-4 py-3 ">
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
                      <th className="px-4 py-3 text-sm font-semibold"></th>
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
                        <td className="px-4 py-2 text-sm font-semibold">
                          <Checkbox />
                        </td>
                        <td className="px-4 py-2 text-[#283275] text-sm font-semibold flex items-center gap-3 ">
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
                                ?"bg-[#e0b3c9] text-[#282728]"
                                :""
                            }`}
                          >
                            {member.status}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-[#282728] text-sm">
                          {member.role}
                        </td>
                        <td className="px-4 py-2 text-[#282728] text-sm">
                          {member.chapter}
                        </td>
                        <td className="px-4 py-2 text-[#282728] text-sm flex items-center">
                          {member.committee}
                          {member.extraCommittee && (
                            <span className="px-2 py-1 ml-2 text-sm bg-[#c2e0b3] text-[#282728] rounded-full">
                              +{member.extraCommittee}
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-2 text-[#282728] text-sm font-normal">
                          {member.subscription}
                        </td>
                        <td className="px-4 py-2 text-[#282728] text-sm font-normal">
                          {member.dues}
                        </td>
                        <td className="px-4 py-2 text-right text-[#6c7171] font-normal text-sm">
                          <EllipsisHorizontalCircleIcon className="m-2 w-7 h-7 " />
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
    </PrimaryContainer>
  );
};

export default Membership;
