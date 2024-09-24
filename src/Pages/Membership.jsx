import React from "react";
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

const Membership = () => {
  const members = [
    {
      profile: (
        <img src={Member}  className="w-8 h-8 rounded-full cursor-none" />
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
        <img src={Member}  className="w-8 h-8 rounded-full cursor-none" />
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
        <img src={Member}  className="w-8 h-8 rounded-full cursor-none" />
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
        <img src={Member}  className="w-8 h-8 rounded-full cursor-none" />
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
        <img src={Member}  className="w-8 h-8 rounded-full cursor-none" />
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
        <img src={Member}  className="w-8 h-8 rounded-full cursor-none" />
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
        <img src={Member}  className="w-8 h-8 rounded-full cursor-none" />
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
        <img src={Member}  className="w-8 h-8 rounded-full cursor-none" />
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
        <img src={Member}  className="w-8 h-8 rounded-full cursor-none" />
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
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#283275] mb-9">
          MemberShip
        </h2>
        <div className="flex border-b-2 border-[#d4d5d5]">
          <span className=" text-[#283275] text-base relative pb-4 font-medium">
            Member
            <p className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#b222fb] via-[#8a54f4] to-[#2dc7e5]" />
          </span>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-4">
            <div className="flex flex-col items-start gap-2.5 rounded-full border border-[#DFDEDE] bg-[#cdd5d4] py-2 px-4">
              <div className="flex items-center gap-2">
                <input className="w-[10rem] bg-[#cdd5d4] text-sm leading-normal text-gray-500 focus:outline-none focus:ring-0" />
                <MagnifyingGlassIcon className="text-[#676b6a] w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <button className="flex pr-2 space-x-4 item text-latisSecondary-800">
              <span className="text-sm font-medium text-[#010101]">Filter</span>
              <AdjustmentsHorizontalIcon className="w-5 h-5 text-[#010101]" />
            </button>
            <button className="flex items-center gap-4 pr-2 text-latisSecondary-800">
              <span className="text-sm font-medium text-[#010101]">
                Export List
              </span>
              <ArrowUpTrayIcon className="w-5 h-5 text-[#010101]" />
            </button>
            <button className="px-8 py-1 text-white bg-[#283275] rounded-full">
              ADD MEMBER
            </button>
          </div>
        </div>
        <div className="p-1.5 mt-6 mb-6 border border-[#6b6a6b] rounded-2xl">
          <table className="min-w-full table-auto bg-[#edeeee]">
            <thead className="text-left">
              <tr className="border-b border-gray-300">
                <th className="px-4 py-3 text-sm font-medium">
                  <Checkbox />
                </th>
                <th className="px-4 text-[#283275] py-3">
                  Member Name
                  <BraIcon className="inline-block ml-3 text-[#283275]" />
                </th>
                <th className="px-4 text-[#283275] py-3">
                  Status
                  <BraIcon className="inline-block ml-3 text-latisSecondary-700" />
                </th>
                <th className="px-4 text-[#283275] py-3">
                  Role
                  <BraIcon className="inline-block ml-3 text-latisSecondary-700" />
                </th>
                <th className="px-4 text-[#283275] py-3">
                  Chapter
                  <BraIcon className="inline-block ml-3 text-latisSecondary-700" />
                </th>
                <th className="px-4 text-[#283275] py-3">
                  Committee
                  <BraIcon className="inline-block ml-3 text-latisSecondary-700" />
                </th>
                <th className="px-4 text-[#283275] py-3">
                  Subscription
                  <BraIcon className="inline-block ml-3 text-latisSecondary-700" />
                </th>
                <th className="px-4 text-[#283275] py-3">
                  Dues
                  <BraIcon className="inline-block ml-3 text-latisSecondary-700" />
                </th>
                <th className="px-4 text-[#283275] py-3"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {members.map((member, index) => (
                <tr key={index} className="border-t border-gray-300">
                  <td className="px-4 py-2 text-sm font-medium">
                    <Checkbox />
                  </td>
                  <td className="px-4 py-2 text-[#283275] text-sm  font-medium flex items-center gap-3">
                    {member.profile}
                    {member.name}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-4 py-1.5 rounded-3xl text-sm ${
                        member.status === "Active"
                          ? "bg-[#c2e0b3] text-[#586154]"
                          : member.status === "Invited"
                          ? "bg-[#cdd5d4] text-[#586154]"
                          : member.status === "Inactive"
                          ? "bg-[#e0b3c9] text-[#586154]"
                          : ""
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-[#414041] text-sm">
                    {member.role}
                  </td>
                  <td className="px-4 py-2 text-[#414041] text-sm">
                    {member.chapter}
                  </td>
                  <td className="px-4 py-2 text-[#414041] text-sm flex items-center">
                    {member.committee}
                    {member.extraCommittee && (
                      <span className="px-2 py-1 ml-2 text-xs bg-[#c2e0b3] text-[#586154] rounded-full">
                        +{member.extraCommittee}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2 text-[#414041] text-sm">
                    {member.subscription}
                  </td>
                  <td className="px-4 py-2 text-[#414041] text-sm">
                    {member.dues}
                  </td>
                  <td className="px-4 py-2 text-right">
                    <EllipsisHorizontalCircleIcon className="w-6 h-6 m-2 text-[#6c7171]" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PrimaryContainer>
  );
};

export default Membership;
