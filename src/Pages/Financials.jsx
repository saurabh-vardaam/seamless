import {
  ChevronDownIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  PencilIcon,
  PencilSquareIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import PrimaryContainer from "../Components/PrimaryContainer";
import User from "../Images/User.png";
import { Tab } from "@headlessui/react";

const Financials = () => {
  const classNames = (...classes) => classes.filter(Boolean).join(" ");

  return (
    <PrimaryContainer>
      <h2 className="text-2xl font-extrabold text-[#283275] mb-4">MemberShip</h2>

      <Tab.Group>
        <Tab.List className="flex flex-col border-b-2 border-gray-300 sm:flex-row sm:space-x-6">
          {[
            "Member Details",
            "Events",
            "Education",
            "Committees",
            "Transactions",
            "Documents",
            "History",
          ].map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  " text-base font-semibold leading-[60px] ",
                  selected
                    ? "border-b-2 border-blue-900 text-[#283275]"
                    : " text-[#282728]"
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <div className=" border border-[#6b6a6b] rounded-3xl mt-7">
              <div className="flex items-center justify-between mr-5 mt-4">
                <h2 className=""></h2>
                <button className="text-gray-400 hover:text-gray-600">
                  <PencilIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="flex items-center gap-28 border-b border-gray-400">
             
                <div className="relative mx-4 mb-3">
                  <img
                    className="rounded-full h-30 w-30"
                    src={User}
                    alt="Profile"
                  />
                  <span className="absolute w-full px-2 py-1 text-sm text-[#282728] bg-[#cdd5d4] rounded-full left-36 top-8 max-w-[71px] text-center ">
                    Invited
                  </span>
                </div>


                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-[#283275]">
                    Vanessa Lopez
                  </h2>
                  <p className="text-[#282728] text-lg font-medium">
                    Director of Communications
                  </p>
                  <p className="text-[#282728] text-lg font-medium">
                    Tuscon Arizona Chapter NACC
                  </p>
                </div>
                <div className="space-y-2 ">
                  <a
                    href="#"
                    className="flex items-center space-x-4 hover:underline"
                  >
                    <GlobeAltIcon className="w-5 h-5" />
                    <span className="text-[#283275] text-lg font-medium">
                      www.NACC/TusconArizona
                    </span>
                  </a>
                  <p className="flex items-center space-x-4">
                    <EnvelopeIcon className="w-5 h-5" />
                    <span className="text-[#283275] text-lg font-medium">
                      1.301.433.9928
                    </span>
                  </p>
                  <p className="flex items-center space-x-4">
                    <PhoneIcon className="w-5 h-5" />
                    <span className="text-[#283275] text-lg font-medium">
                      vlopez@NACC.com
                    </span>
                  </p>
                </div>

              </div>



              <div className="">
                <div className="flex items-center justify-between mx-4 my-2">
                  
                  <p className="text-[#282728] text-sm font-normal">
                    Status:
                    <span className="px-3 py-1 text-[#282728] bg-[#cdd5d4] rounded-xl text-sm ml-3">
                      Invited
                    </span>
                  </p>
                  <div className="space-x-4">
                    <button className="px-4 py-1 text-[#282728] bg-[#cdd5d4] rounded-2xl text-sm">
                      Resend Invite
                    </button>
                    <button className="px-4 py-1 text-[#ffffff] bg-[#283275] rounded-2xl text-sm">
                      Reset Password
                    </button>
                  </div>
                </div>
                <div className=" py-2 text-[#282728] border-b text-sm border-t border-gray-400">
                 <div className="flex justify-between mx-4 ">
                 <p>
                    Member ID: <span className="text-[#283275] text-sm font-semibold">1032882</span>
                  </p>
                  <ChevronDownIcon className="w-6 h-6" />
                 </div>
                </div>
                <div className=" py-2 text-[#282728] text-sm border-t">
                <div className="flex justify-between mx-4">
                <p>
                    Role: <span className="text-[#283275] text-sm font-semibold ml-0.5">Admin</span>
                  </p>
                  <ChevronDownIcon className="w-6 h-6" />
                </div>
                </div>
                <div className=" py-2 text-[#282728] text-sm border-t border-gray-400">
                  <div className="flex justify-between mx-4 ">
                  <p>
                    Chapter:
                    <span className="text-[#283275] text-sm font-semibold ml-0.5">
                      Tuscon Arizona Chapter NACC
                    </span>
                  </p>
                  <ChevronDownIcon className="w-6 h-6" />
                  </div>
                 
                </div>
                <div className=" py-2 text-[#282728] text-smborder-b border-t border-gray-400">
                 <div className="flex justify-between mx-4">
                 <p>
                    Committees:
                    <span className="text-[#283275] text-sm font-semibold ml-0.5">
                      South West, Events, Education
                    </span>
                  </p>
                  <ChevronDownIcon className="w-6 h-6" />
                 </div>
                </div>

                <div className=" py-2 text-[#282728] text-sm border-t border-gray-400">
                  <div className="flex justify-between mx-4">
                  <p>
                    Subscription:
                    <span className="text-[#283275] text-sm font-semibold ml-0.5">Chapter Gold</span>

                  </p>
                  <ChevronDownIcon className="w-6 h-6" />
                  </div>
                </div>
                <div className=" py-2 text-[#282728] text-sm border-t border-gray-400">
                  <div className="flex justify-between mx-4">
                  <p>
                    Subscription:{" "}
                    <span className="text-[#283275] text-sm font-semibold ml-0.5">Chapter Gold</span>{" "}
                    <span className="px-2 py-1 text-sm text-[#282728] bg-[#c2e0b3] rounded-xl ml-2">
                      Current
                    </span>
                  </p>
                  <ChevronDownIcon className="w-6 h-6" />
                  </div>
                </div>
                <div className=" py-2 text-[#282728] text-sm border-t border-gray-400">
                 <div className="flex justify-between mx-4">
                 <p>
                    Renewal: <span className="text-[#283275] text-sm font-semibold ml-0.5">01.15.2025</span>{" "}
                    <span className="px-2 py-1 text-sm text-[#282728] bg-[#c2e0b3] rounded-xl ml-2">
                      Auto
                    </span>
                  </p>
                  <ChevronDownIcon className="w-6 h-6" />
                 </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </PrimaryContainer>
  );
};

export default Financials;
