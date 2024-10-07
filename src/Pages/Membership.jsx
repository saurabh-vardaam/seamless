import React, { useEffect, useState } from "react";
import PrimaryContainer from "../Components/PrimaryContainer";
import {
  AdjustmentsHorizontalIcon,
  ArrowUpTrayIcon,
  EllipsisHorizontalCircleIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  PencilIcon,
  PhoneIcon,
  ArrowLeftIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import Checkbox from "../Components/CheckBox";
import BraIcon from "../Icons/BraIcon";
import Member from "../Images/Member.png";
import { Tab } from "@headlessui/react";
import Modal from "../Components/Modal";
import AddMemberForm from "./AddMemberForm";
import { Popover } from "@headlessui/react";
import PopUp from "../Components/Popover";
import User from "../Images/User.png";
const Membership = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [IsEdit, setIsEdit] = useState(false);
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
      profile: "",
      firstName: "Vanessa Lopez",
      email: "vanessa@gmail.com",
      status: "Invited",
      role: "Admin",
      chapter: "NA",
      committee: "NA",
      subscription: "Chapter Gold",
      dues: "NA",
    },
    {
      id: "vanessa",
      name: "jack",
      profile: "",
      email: "jack@gmail.com",
      firstName: "Active",
      role: "Admin",
      chapter: "Tucson Arizona",
      committee: "South West",
      subscription: "Chapter Gold",
      dues: "Current",
      extraCommittee: 3,
      status: "Invited",
    },
  ];
  const [newMember, setNewMember] = useState({});
  const [memberList, setMemberList] = useState([]);
  const [showMemberDetail, setMemberDetails] = useState(false);
  useEffect(() => {
    const newMembers = JSON.parse(localStorage.getItem("members"));
    if (newMembers?.length > 0) {
      setMemberList(newMembers);
    } else {
      setMemberList(members);
    }
  }, []);

  useEffect(() => {
    if (memberList.length > 0) {
      localStorage.setItem("members", JSON.stringify(memberList));
    }
  }, [memberList]);
  return (
    <>
      {showMemberDetail ? (
        <PrimaryContainer>
          <h2 className="flex justify-between w-full mb-5 text-2xl font-extrabold text-seamlessBlue-700">
            Membership
            <div
              onClick={() => setMemberDetails(false)}
              className="flex items-center cursor-pointer"
            >
              <ArrowLeftIcon className="w-6 h-6 mr-2 text-seamlessBlue-900" />{" "}
              Go Back
            </div>
          </h2>

          <Tab.Group>
            <Tab.List className="flex flex-col border-b-2 border-seamlessBlue-400 sm:flex-row sm:space-x-9">
              {[
                "Member Details",
                "Events",
                "Education",
                "Committees",
                "Transactions",
                "Documents",
                "History",
              ].map((tab, index) => (
                <Tab
                  as="button"
                  key={index}
                  className={({ selected }) =>
                    classNames(
                      "text-base text-seamlessBlue-700 font-semibold leading-[60px]",
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
              ))}
            </Tab.List>

            <Tab.Panels>
              <Tab.Panel>
                <div className="mt-10 border border-seamlessGray-900 rounded-3xl">
                  <div className="grid flex-col items-center gap-8 p-6 border-b border-gray-400 md:grid-cols-6 ">
                    <div className="relative mb-3">
                      <img
                        className="rounded-full w-44 h-44 md:h-30 md:w-30"
                        src={User}
                        alt="Profile"
                      />
                      <span className="absolute w-full px-2 py-1 text-sm text-seamlessGray-950 bg-seamlessCyan-600 rounded-full -right-5 top-8 max-w-[71px] text-center">
                        Invited
                      </span>
                    </div>

                    <div className="flex flex-col items-center col-span-2 space-y-2 text-center md:text-left">
                      <h2 className="text-2xl font-semibold text-seamlessBlue-700 ">
                        {newMember?.firstName}
                      </h2>
                      <p className="text-lg font-medium text-seamlessGray-950">
                        Director of Communications
                      </p>
                      <p className="text-lg font-medium text-seamlessGray-950">
                        Tuscon Arizona Chapter NACC
                      </p>
                    </div>
                    <div className="col-span-2 space-y-2">
                      <a
                        href="#"
                        className="flex items-center space-x-4 hover:underline"
                      >
                        <GlobeAltIcon className="w-5 h-5" />
                        <span className="text-lg font-medium text-seamlessBlue-700">
                          www.NACC/TusconArizona
                        </span>
                      </a>
                      <p className="flex items-center space-x-4">
                        <EnvelopeIcon className="w-5 h-5" />
                        <span className="text-lg font-medium text-seamlessBlue-700">
                          1.301.433.9928
                        </span>
                      </p>
                      <p className="flex items-center space-x-4">
                        <PhoneIcon className="w-5 h-5" />
                        <span className="text-lg font-medium text-seamlessBlue-700">
                          vlopez@NACC.com
                        </span>
                      </p>
                    </div>
                    <div className="h-full col-span-1 text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        <PencilIcon className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  <div className="divide-y divide-seamlessCyan-700">
                    <div className="flex items-center justify-between px-6 py-4 leading-6">
                      <div className="text-seamlessGray-950 flex items-center gap-x-2.5 text-sm font-normal">
                        <span>Status:</span>
                        <span className="px-3 py-1.5 text-sm text-seamlessGray-950 bg-seamlessCyan-600 rounded-3xl">
                          {newMember?.status}
                        </span>
                      </div>
                      <div className="space-x-2.5">
                        <button className="px-4 py-1.5 text-sm text-seamlessGray-950 bg-seamlessCyan-600 rounded-3xl">
                          Resend Invite
                        </button>
                        <button className="px-4 py-1.5 text-sm text-white bg-seamlessBlue-700 rounded-3xl">
                          Reset Password
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-6 py-5">
                      <div className="text-seamlessGray-950 flex items-center gap-x-2.5 text-sm font-normal">
                        <span> Member ID: </span>
                        <span className="text-sm font-semibold text-seamlessBlue-700">
                          1032882
                        </span>
                      </div>
                      <ChevronDownIcon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center justify-between px-6 py-5">
                      <div className="text-seamlessGray-950 flex items-center gap-x-2.5 text-sm font-normal">
                        <span> Role: </span>
                        <span className="text-sm font-semibold text-seamlessBlue-700">
                          {newMember?.role}
                        </span>
                      </div>
                      <ChevronDownIcon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center justify-between px-6 py-5">
                      <div className="text-seamlessGray-950 flex items-center gap-x-2.5 text-sm font-normal">
                        <span> Chapter: </span>
                        <span className="text-sm font-semibold text-seamlessBlue-700">
                          {newMember?.chapter}
                        </span>
                      </div>
                      <ChevronDownIcon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center justify-between px-6 py-5">
                      <div className="text-seamlessGray-950 flex items-center gap-x-2.5 text-sm font-normal">
                        <span> Committees: </span>
                        <span className="text-sm font-semibold text-seamlessBlue-700">
                          {newMember?.committee}
                        </span>
                      </div>
                      <ChevronDownIcon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center justify-between px-6 py-5">
                      <div className="text-seamlessGray-950 flex items-center gap-x-2.5 text-sm font-normal">
                        <span> Subscription: </span>
                        <span className="text-sm font-semibold text-seamlessBlue-700">
                          Chapter Gold
                        </span>
                      </div>
                      <ChevronDownIcon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center justify-between px-6 py-5">
                      <div className="text-seamlessGray-950 flex items-center gap-x-2.5 text-sm font-normal">
                        <span> Subscription: </span>
                        <span className="text-sm font-semibold text-seamlessBlue-700">
                          <span className="text-seamlessBlue-700   text-sm font-semibold ml-0.5">
                            Chapter Gold
                          </span>{" "}
                          <span className="px-2 py-1 ml-2 text-sm font-medium text-seamlessGray-950 bg-seamlessGreen-500 rounded-xl">
                            Current
                          </span>
                        </span>
                      </div>
                      <ChevronDownIcon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center justify-between px-6 py-5">
                      <div className="text-seamlessGray-950 flex items-center gap-x-2.5 text-sm font-normal">
                        <span> Renewal: </span>
                        <span className="text-sm font-semibold text-seamlessBlue-700">
                          <span className="text-seamlessBlue-700   text-sm font-semibold ml-0.5">
                            01.15.2025
                          </span>{" "}
                          <span className="px-2 py-1 ml-2 text-sm font-medium text-seamlessGray-950 bg-seamlessGreen-500 rounded-xl">
                            Auto
                          </span>
                        </span>
                      </div>
                      <ChevronDownIcon className="w-6 h-6" />
                    </div>
                  </div>
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
          <h2 className="font-extrabold sm:text-xl md:text-2xl text-seamlessBlue-700 mb-9">
            Membership
          </h2>

          <Tab.Group>
            <Tab.List className="flex flex-col border-b-2 border-seamlessBlue-400 sm:flex-row sm:space-x-9">
              {["Member", "Member Roles", "Subscriptions", "Registration"].map(
                (tab, index) => (
                  <Tab
                    key={index}
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
                  <div className="flex flex-col items-center justify-between mt-10 mb-10 space-y-4 md:flex-row md:space-y-0">
                    <div className="flex items-center w-full px-4 py-2 space-x-4 border rounded-full md:w-auto border-seamlessGray-50 bg-seamlessCyan-600">
                      <input
                        className="w-full text-sm text-gray-900 bg-seamlessCyan-600 focus:outline-none"
                        placeholder="Search..."
                      />
                      <MagnifyingGlassIcon className="w-4 h-4 text-seamlessGray-200" />
                    </div>

                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-base font-medium text-seamlessGray-950 ">
                        <span>Filter</span>
                        <AdjustmentsHorizontalIcon className="w-6 h-6" />
                      </button>
                      <button className="flex items-center space-x-2 text-base font-medium text-seamlessGray-950 ">
                        <span>Export List</span>
                        <ArrowUpTrayIcon className="w-6 h-6" />
                      </button>
                      <button
                        className="px-6 py-2 text-sm font-semibold text-white bg-seamlessBlue-700 rounded-3xl"
                        onClick={() => {
                          setNewMember({});
                          setIsModalOpen(true);
                        }}
                      >
                        ADD MEMBER
                      </button>
                    </div>
                  </div>
                  {memberList?.length > 0 ? (
                    <div className="border h-[40vh] border-seamlessGray-900 overflow-hidden rounded-2xl">
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
                              key={member?.id}
                              className={`border-t w-fit  border-gray-300 cursor-pointer ${
                                member?.id === newMember?.id
                                  ? "bg-white text-seamlessBlue-900 "
                                  : ""
                              }`}
                              onClick={() => {
                                setNewMember(member);
                              }}
                            >
                              <td className="px-6 ">
                                <Checkbox />
                              </td>
                              <td className="flex items-center gap-3 px-4 py-2">
                                <UserCircleIcon
                                  className={`w-8 h-8 font-normal ${
                                    member?.id === newMember?.id
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
                              <td className="px-4 py-2">{member.role}</td>
                              <td className="px-4 py-2">{member.chapter}</td>
                              <td className="px-4 py-2">
                                {member.committee}
                                {member.extraCommittee && (
                                  <span className="px-2 py-1 ml-2 text-sm rounded-full bg-seamlessGreen-500 text-seamlessGray-950">
                                    +{member.extraCommittee}
                                  </span>
                                )}
                              </td>
                              <td className="px-4 py-2">
                                {member.subscription || "Chapter Gold"}
                              </td>
                              <td className="px-4 py-2">
                                {member.dues || "NA"}
                              </td>
                              <td className="px-6 py-2 text-right">
                                <PopUp
                                  onChange={() => {
                                    setIsModalOpen(true);
                                    setIsEdit(true);
                                  }}
                                  onEdit={() => setMemberDetails(true)}
                                  editName={"get Details"}
                                  onDelete={(e, close) => {
                                    e.preventDefault();
                                    setMemberList((pre) =>
                                      pre?.filter(
                                        (userMember) =>
                                          userMember?.id !== member?.id
                                      )
                                    );
                                    close();
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
              {[1, 2, 3]?.map((tab) => (
                <Tab.Panel>
                  <div className="mt-10 space-y-4 border border-gray-600 rounded-3xl">
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
          {/* {isModalOpen && (
            <Modal onClose={handleCloseModal}>
              <AddMemberForm
                isModalOpen={isModalOpen}
                handleCloseModal={handleCloseModal}
                setMemberList={setMemberList}
                memberList={memberList}
                setNewMember={setNewMember}
                newMember={newMember}
              />
            </Modal>
          )} */}
        </PrimaryContainer>
      )}
      <AddMemberForm
        selectedMember={newMember}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        setMemberList={setMemberList}
        memberList={memberList}
        setNewMember={setNewMember}
        newMember={newMember}
        IsEdit={IsEdit}
        setIsEdit={setIsEdit}
      />
    </>
  );
};

export default Membership;
