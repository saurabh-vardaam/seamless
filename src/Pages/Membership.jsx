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
      id: "lopez",
      profile: (
        <img src={Member} className="w-8 h-8 mt-1 rounded-full cursor-none" />
      ),
      firstName: "Vanessa Lopez",
      status: "Invited",
      role: "Admin",
      chapter: "NA",
      committee: "NA",
      subscription: "Chapter Gold",
      dues: "NA",
    },
    {
      id: "vanessa",
      name: "Vanessa Lopez",
      profile: (
        <img src={Member} className="w-8 h-8 mt-1 rounded-full cursor-none" />
      ),
      firstName: "Active",
      role: "Admin",
      chapter: "Tucson Arizona",
      committee: "South West",
      subscription: "Chapter Gold",
      dues: "Current",
      extraCommittee: 3,
    },
  ];
  const [newMember, setNewMember] = useState({});
  const [memberList, setMemberList] = useState(members);
  return (
    <PrimaryContainer>
      <h2 className="sm:text-xl md:text-2xl font-extrabold text-[#283275] mb-9">
        Membership
      </h2>

      <Tab.Group>
        <Tab.List className="flex flex-col border-b-2 border-seamlessBlue-400 sm:flex-row sm:space-x-9">
          {["Member", "Member Roles", "Subscriptions", "Registration"].map(
            (tab, index) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    "text-base font-semibold text-seamlessBlue-700 focus:none leading-[60px]",
                    selected ? "  font-semibold " : "font-semibold  mb-1"
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
              {memberList?.length > 0 ? (
                <div className="border h-[40vh] border-[#6b6a6b] overflow-hidden rounded-2xl">
                  <table className="min-w-full table-auto ">
                    <thead className="text-sm font-semibold text-left text-seamlessBlue-700">
                      <tr className="border-b border-gray-300">
                        <th className="p-6">
                          <Checkbox />
                        </th>
                        <th className="text-sm font-semibold">
                          Member Name
                          <BraIcon className="inline-block ml-3" />
                        </th>
                        <th className="p-6 text-sm font-semibold">
                          Status
                          <BraIcon className="inline-block ml-3" />
                        </th>
                        <th className="p-6 text-sm font-semibold">
                          Role
                          <BraIcon className="inline-block ml-3" />
                        </th>
                        <th className="p-6 text-sm font-semibold">
                          Chapter
                          <BraIcon className="inline-block ml-3" />
                        </th>
                        <th className="p-6 text-sm font-semibold">
                          Committee
                          <BraIcon className="inline-block ml-3" />
                        </th>
                        <th className="p-6 text-sm font-semibold">
                          Subscription
                          <BraIcon className="inline-block ml-3" />
                        </th>
                        <th className="p-6 text-sm font-semibold">
                          Dues
                          <BraIcon className="inline-block ml-3" />
                        </th>
                        <th className="p-6"></th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {memberList.map((member, index) => (
                        <tr
                          key={index}
                          className={`border-t  border-gray-300 cursor-pointer ${
                            selectedRow === index ? "bg-[#ffffff]" : ""
                          }`}
                          onClick={() => handleRowClick(index)}
                        >
                          <td className="px-6 ">
                            <Checkbox />
                          </td>
                          <td className="flex items-center gap-3 px-4 py-2">
                            <img
                              src={Member}
                              className="w-8 h-8 mt-1 rounded-full cursor-none"
                            />
                            {member.firstName}
                          </td>
                          <td className="px-4 ">
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
                          <td className="px-4 py-2">
                            {member.committee}
                            {member.extraCommittee && (
                              <span className="px-2 py-1 ml-2 text-sm bg-[#c2e0b3] text-[#282728] rounded-full">
                                +{member.extraCommittee}
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-2">
                            {member.subscription || "Chapter Gold"}
                          </td>
                          <td className="px-4 py-2">{member.dues || "NA"}</td>
                          <td className="px-6 py-2 text-right">
                            <PopUp
                              editName={"get Details"}
                              onDelete={(e) => {
                                e.preventDefault();
                                setMemberList((pre) =>
                                  pre?.filter(
                                    (userMember) =>
                                      userMember?.id !== member?.id
                                  )
                                );
                              }}
                            />
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
                      <p className="text-lg font-semibold ">No Member Added</p>
                      <p className="text-sm font-medium">
                        Please Add New Member to get the memberList
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Tab.Panel>
          {[1, 2, 3]?.map((tab) => (
            <Tab.Panel>
              <div className="mt-6 space-y-4 border border-gray-600 rounded-3xl">
                <div className="flex items-center justify-center w-full h-60">
                  <div className="flex flex-col items-center ">
                    <p className="text-lg font-semibold ">Not Created</p>
                    <p className="text-sm font-medium">
                      This Tab Panel is not created please first create the Tab
                    </p>
                  </div>
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <AddMemberForm
            setMemberList={setMemberList}
            memberList={memberList}
            handleCloseModal={handleCloseModal}
            setNewMember={setNewMember}
            newMember={newMember}
          />
        </Modal>
      )}
    </PrimaryContainer>
  );
};

export default Membership;
