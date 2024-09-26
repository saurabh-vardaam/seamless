import React, { useState } from "react";
import PrimaryContainer from "../Components/PrimaryContainer";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Select from "react-select";
import NaccLogo from "../Images/NaccLogo.png";

const RoleOptions = [
  { value: "role", label: "Role" },
  { value: "chapter1", label: "Chapter 1" },
  { value: "chapter2", label: "Chapter 2" },
  { value: "chapter3", label: "Chapter 3" },
];

const ChapterOptions = [
  { value: "chapter", label: "Chapter" },
  { value: "chapter1", label: "Chapter 1" },
  { value: "chapter2", label: "Chapter 2" },
  { value: "chapter3", label: "Chapter 3" },
];

const CommitteeOptions = [
  { value: "committee", label: "Committee" },
  { value: "committee1", label: "Committee 1" },
  { value: "committee2", label: "Committee 2" },
  { value: "committee3", label: "Committee 3" },
];

const customStyles = {
  control: (base) => ({
    ...base,
    borderRadius: "21px",
    padding: "2px",
    backgroundColor: "#edefef",
    borderColor: "transparent",
    boxShadow: "none",
    "&:hover": { borderColor: "gray" },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#282728",
    fontSize: "14px",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#282728",
    fontSize: "14px",
  }),
};

const Education = () => {
 
  const [selectedRoleOption, setSelectedRoleOption] = useState(null);

  const handleChange = (option) => {
    setSelectedRoleOption(option);
  };

  return (
    <PrimaryContainer>
      <div className="p-10 bg-[#ffffff] rounded-[50px] max-w-[350px] drop-shadow-[0px 5px 31px rgba(0,0,0,0.35)] ">
        <div className="flex justify-center mb-6">
          <img src={NaccLogo} alt="nacc" className="items-center h-12" />
        </div>
        <form className="pt-5">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 mb-4 text-[#282728] placeholder:text-sm bg-[#edefef] rounded-[21px] focus:outline-none text-sm font-normal placeholder:text-[#282728]"
          />
          <input
            type="text"
            placeholder="Last Name"
            roleOption
            className="w-full px-4 py-2 mb-4 text-[#282728] placeholder:text-sm bg-[#edefef] rounded-[21px] focus:outline-none text-sm font-normal placeholder:text-[#282728]"
          />

          <div className="mb-4">
            <Select
              options={RoleOptions}
              defaultValue={RoleOptions[0]}
              styles={customStyles}
              components={{
                DropdownIndicator: () => (
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                ),
              }}
            />
          </div>

          <div className="mb-4 ">
            <Select
              options={ChapterOptions}
              defaultValue={ChapterOptions[0]}
              styles={customStyles}
              components={{
                DropdownIndicator: () => (
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                ),
              }}
            />
          </div>

          <div className="mb-6 ">
            <Select
              options={CommitteeOptions}
              defaultValue={CommitteeOptions[0]}
              styles={customStyles}
              components={{
                DropdownIndicator: () => (
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                ),
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-[#ffffff] transition-colors duration-300 bg-[#283275] rounded-[21px] text-sm font-semibold"
          >
            SEND INVITE
          </button>
        </form>
      </div>
    </PrimaryContainer>
  );
};

export default Education;
