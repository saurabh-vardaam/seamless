import { Children, useState } from "react";
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
  Cog6ToothIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import SeamLessLogo from "../Icons/SeamLessLogo";
import UserProfile from "../Images/UserProfile.png";
import DotsIcon from "../Icons/DotsIcon";

const navigation = [
  { name: "Dashboard", path: "/Dashboard", icon: HomeIcon },
  { name: "Organization", path: "/team", icon: UsersIcon },
  { name: "Membership", path: "/projects", icon: FolderIcon },
  { name: "Financials", path: "/calendar", icon: CalendarIcon },
  { name: "Chapters", path: "/documents", icon: DocumentDuplicateIcon },
  { name: "Committees", path: "/reports", icon: ChartPieIcon },
  { name: "Education", path: "/reports", icon: ChartPieIcon },
  { name: "Events", path: "/reports", icon: ChartPieIcon },
  { name: "Reports", path: "/reports", icon: ChartPieIcon },
  { name: "Settigns", path: "/reports", icon: ChartPieIcon },
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
console.log(children)
  return (
    <div>
      <Dialog
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop className="fixed inset-0 bg-gray-900/80" />
        <div className="fixed inset-0 flex">
          <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out">
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="-m-2.5 p-2.5"
              >
                <span className="sr-only">Close sidebar</span>
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#273175] px-6 pb-4">
              <div className="flex h-16 shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/img/logos/mark.svg?color=white"
                  className="h-8 w-auto"
                />
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            className={classNames(
                              location.pathname === item.path
                                ? "bg-indigo-700 text-white"
                                : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                            )}
                          >
                            <item.icon
                              aria-hidden="true"
                              className={classNames(
                                location.pathname === item.path
                                  ? "text-white"
                                  : "text-indigo-200 group-hover:text-white",
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
      <div className="w-[100vw]">
        <div className="w-full sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" />
          </button>

          <div className="flex justify-between items-center w-full">
            <SeamLessLogo />

            <div className="ml-auto flex items-center space-x-5">
              <div className="inline-flex items-center gap-4">
                <div className="flex flex-col items-start gap-2.5 rounded-full border border-[#DFDEDE] bg-[#F9F9F9] py-2 px-4">
                  <div className="flex items-center gap-2">
                    <input className="w-[13.25rem] bg-[#F9F9F9] text-sm leading-normal text-[#B6B6B6] focus:outline-none focus:ring-0" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt="Profile"
                      src={UserProfile}
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        aria-hidden="true"
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                      >
                        Justin Watson
                      </span>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="ml-2 h-5 w-5 text-gray-400"
                      />
                    </span>
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                  <DotsIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:fixed top-16 bottom-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#273175] px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center"></div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.path}
                          className={classNames(
                            location.pathname === item.path
                              ? "bg-indigo-700 text-white"
                              : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              location.pathname === item.path
                                ? "text-white"
                                : "text-indigo-200 group-hover:text-white",
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
        </div>
        <main className="py-10 w-4/5 h-[93vh] bg-blue-500 relative left-80 ">
          <div className="p-4">{children} </div>
        </main>
      </div>
    </div>
  );
}
