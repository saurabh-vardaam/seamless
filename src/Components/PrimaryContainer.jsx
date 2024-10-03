import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  DocumentDuplicateIcon,
  ChartPieIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  CalendarDateRangeIcon,
  DocumentArrowDownIcon,
  ChartBarIcon,
  Cog8ToothIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SeamLessLogo from "../Icons/SeamLessLogo";
import UserProfile from "../Images/UserProfile.png";
import DotsIcon from "../Icons/DotsIcon";

const navigation = [
  { name: "DASHBOARD", path: "/dashboard", icon: HomeIcon },
  { name: "ORGANIZATION", path: "/organization", icon: UsersIcon },
  { name: "MEMBERSHIP", path: "/membership", icon: UserGroupIcon },
  { name: "MEMBER DETAILS", path: "/member-details", icon: UserGroupIcon },
  { name: "FINANCIALS", path: "/financials", icon: CalendarIcon },
  { name: "CHAPTERS", path: "/chapters", icon: DocumentDuplicateIcon },
  { name: "COMMITTEES", path: "/committees", icon: UserGroupIcon },
  { name: "EDUCATION", path: "/education", icon: AcademicCapIcon },
  { name: "EVENTS", path: "/events", icon: CalendarDateRangeIcon },
  {
    name: "EVENT DETAILS",
    path: "/event-details",
    icon: CalendarDateRangeIcon,
  },
  { name: "DOCUMENTS", path: "/document", icon: DocumentArrowDownIcon },
  { name: "REPORTS", path: "/reports", icon: ChartBarIcon },
  { name: "SETTINGS", path: "/settings", icon: Cog8ToothIcon },
];

const userNavigation = [
  { name: "Your profile", path: "#" },
  { name: "Sign out", path: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PrimaryContainer({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    setTimeout(() => {
      navigate("/");
    }, 100); // 1000 ms = 1 second
  };
  return (
    <div className="font-Montserrat">
      <Dialog
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop className="fixed inset-0 bg-gray-900/80" />
        <div className="fixed inset-0 flex">
          <DialogPanel className="relative flex flex-1 w-full max-w-xs mr-16 transition duration-300 ease-in-out transform">
            <div className="absolute top-0 flex justify-center w-16 pt-5 left-full">
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="-m-2.5 p-2.5"
              >
                <span className="sr-only">Close sidebar</span>
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#273175]  pb-4">
              <nav className="flex flex-col flex-1">
                <ul role="list" className="flex flex-col flex-1 gap-y-7">
                  <li>
                    <ul role="list" className="space-y-1 ">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            className={classNames(
                              location.pathname === item.path
                                ? "bg-[#171f52] text-seamlessGray-400"
                                : "text-seamlessGray-400 ",
                              "group flex gap-x-3 rounded-md p-4 text-sm font-semibold leading-6"
                            )}
                          >
                            <item.icon
                              aria-hidden="true"
                              className={classNames(
                                location.pathname === item.path
                                  ? "text-seamlessGray-400"
                                  : "text-seamlessGray-400",
                                "h-6 w-6 shrink-0"
                              )}
                            />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <div className="w-[100vw] flex flex-col h-[100vh]">
        <div className="sticky top-0 z-40 w-full px-4 bg-white border-b border-gray-200 shadow-sm shrink-0 gap-x-4 sm:gap-x-6 sm:px-6 lg:px-7">
          <div className="flex items-center justify-between my-1 w-fll min-h-20">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="w-6 h-6" />
            </button>
            <div>
              <SeamLessLogo className="mt-2 w-44" />
            </div>
            <div className="flex items-center px-5 space-x-2 lg:mr-10 sm:space-x-3 md:space-x-5">
              <div className="items-center hidden gap-2 sm:inline-flex sm:gap-3">
                <div className="flex flex-col items-start gap-2.5 rounded-full border border-[#DFDEDE] bg-[#ebecec]  px-3 sm:py-2 sm:px-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <input
                      className="bg-[#ebecec] text-sm text-gray-900 focus:outline-none focus:ring-0 max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px] w-full"
                      placeholder="Search..."
                    />
                    <MagnifyingGlassIcon className="text-[#B6B6B6] w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-6">
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt="Profile"
                      src={UserProfile}
                      className="w-8 h-8 rounded-full sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-50"
                    />
                    <span className="hidden md:flex md:items-center">
                      <span className="ml-2 sm:ml-3 lg:ml-4 text-sm sm:text-base lg:text-base font-semibold text-[#282728]">
                        Justin Watson
                      </span>
                    </span>
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 z-10 mt-2.5 w-28 sm:w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    {userNavigation.map((item, index) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <div
                            onClick={() => {
                              if (index === 1) {
                                handleLogout();
                              }
                            }}
                            href={item.path}
                            className={`${
                              active ? "bg-gray-50" : ""
                            } block px-2 py-1 text-sm cursor-pointer leading-6 text-gray-900`}
                          >
                            {item.name}
                          </div>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Menu>

                <div className="flex items-center gap-x-3 sm:gap-x-4 lg:gap-x-6">
                  <DotsIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky flex overflow-hidden grow">
          <div className="h-full overflow-auto scrollbar-hide lg:w-[14.75%] lg:z-50 lg:flex lg:flex-col sm:hidden max-sm:hidden">
            <div className="flex flex-col grow bg-seamlessBlue-800">
              <nav className="flex flex-col flex-1">
                <ul role="list" className="flex flex-col flex-1 ">
                  <li>
                    <ul role="list" className="space-y-1 ">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={classNames(
                            location.pathname === item.path
                              ? "bg-seamlessBlue-900 text-seamlessGray-400"
                              : "text-seamlessGray-400",
                            "group items-center  flex gap-x-3  px-10 py-4 text-sm font-medium"
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              location.pathname === item.path
                                ? "text-seamlessGray-400"
                                : "text-seamlessGray-400 group-hover:text-seamlessGray-400",
                              "h-6 w-6 shrink-0"
                            )}
                          />
                          {item.name}
                        </Link>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <main className="w-full h-full overflow-hidden lg:w-[85.75%] bg-seamlessGray-300">
            <div className="w-full h-full px-4 py-4 overflow-auto sm:py-12 sm:px-16 scrollbar-hide">
              {children}{" "}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
