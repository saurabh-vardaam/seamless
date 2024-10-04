import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Select from "react-select";
import NaccLogo from "../Images/NaccLogo.png";
import TextInput from "../Components/TextInput";
import PopUpModel from "../Components/PopUpModel";

const roles = [
  { value: "admin", label: "Admin" },
  { value: "user", label: "User" },
];

const statusOptions = [
  { value: "Invited", label: "Invited" },
  { value: "Active", label: "Active" },
];

const chapters = [
  { value: "chapter1", label: "Chapter 1" },
  { value: "chapter2", label: "Chapter 2" },
];

const committees = [
  { value: "East Organization", label: "East Organization" },
  { value: "West Organization", label: "West Organization" },
];

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "9999px",
    backgroundColor: "#edefef",
    boxShadow: "none",
    outline: "none",
    borderColor: state.isFocused ? "#edefef" : "#edefef",
    padding: "4px 10px",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#282728",
    fontSize: "14px",
    fontWeight: "400",
  }),
  option: (provided, { data, isDisabled, isFocused, isSelected }) => ({
    ...provided,
    fontSize: "14px",
    backgroundColor: isDisabled
      ? data?.color
      : isSelected
      ? " #273175"
      : isFocused
      ? " #273175"
      : undefined,
    color: isDisabled
      ? undefined
      : isSelected
      ? " #edefef"
      : isFocused
      ? " #edefef"
      : undefined,
    cursor: isDisabled ? "not-allowed" : "default",
    ":active": {
      ...provided[":active"],
      backgroundColor: !isDisabled
        ? isSelected
          ? " #f0f0"
          : " #edefef"
        : undefined,
    },
  }),
  menu: (provided) => ({
    ...provided,
  }),
};

const AddMemberForm = ({
  newMember,
  setNewMember,
  handleCloseModal,
  memberList,
  setMemberList,
  isModalOpen,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "admin",
    chapter: "chapter1",
    committee: "East Organization",
    status: "Invited",
  });

  const handleChange = (selectedOption, field) => {
    setFormData({ ...formData, [field]: selectedOption });
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMember = { ...formData, id: Math.random() };
    setNewMember(newMember);
    const newMembers = [...memberList, newMember];
    setMemberList(newMembers);
    console.log(newMembers,JSON.stringify(newMembers))
    // localStorage.setItem("members", JSON.stringify(newMembers));
    handleCloseModal();
  };

  return (
    <PopUpModel setOpen={handleCloseModal} open={isModalOpen}>
      <div className="p-5 md:p-10 bg-white rounded-[50px]  drop-shadow-[0px 5px 31px rgba(0,0,0,0.35)] w-full mx-auto">
        <div className="flex justify-center mb-6">
          <img src={NaccLogo} alt="nacc" className="h-12" />
        </div>
        <form className="w-full pt-5 space-y-4" onSubmit={handleSubmit}>
          <TextInput
            required={true}
            name="firstName"
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            value={formData.firstName}
            type="text"
            placeholder="First Name"
            className={"w-full bg-seamlessGray-300"}
          />
          <TextInput
            required={true}
            type="text"
            className={"w-full bg-seamlessGray-300"}
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
          <div className="mb-4">
            <Select
              options={roles}
              placeholder="Role"
              value={formData.role}
              onChange={(e) => handleInputChange("role", e.value)}
              styles={customSelectStyles}
            />
          </div>
          <div className="mb-4">
            <Select
              options={statusOptions}
              placeholder="Status"
              value={formData.status}
              onChange={(e) => handleInputChange("status", e.value)}
              styles={customSelectStyles}
            />
          </div>

          <div className="mb-4">
            <Select
              options={chapters}
              placeholder="Chapter"
              value={formData.chapter}
              onChange={(e) => handleInputChange("chapter", e.value)}
              styles={customSelectStyles}
            />
          </div>

          <div className="mb-4">
            <Select
              options={committees}
              placeholder="Committee"
              value={formData.committee}
              onChange={(e) => handleInputChange("committee", e.value)}
              styles={customSelectStyles}
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-4 mt-2 text-white transition-colors duration-300 bg-[#283275] rounded-[21px] text-sm font-semibold"
          >
            SEND INVITE
          </button>
        </form>
      </div>
    </PopUpModel>
  );
};

export default AddMemberForm;
