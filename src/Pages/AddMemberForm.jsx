import React, { useEffect, useState } from "react";
import Select from "react-select";
import NaccLogo from "../Images/NaccLogo.png";
import TextInput from "../Components/TextInput";
import PopUpModel from "../Components/PopUpModel";
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const roles = [
  { value: "Admin", label: "Admin" },
  { value: "User", label: "User" },
];

const statusOptions = [
  { value: "Invited", label: "Invited" },
  { value: "Active", label: "Active" },
  { value: "Inactive",label: "Inactive"},
];

const chapters = [
  { value: "Chapter1", label: "Chapter 1" },
  { value: "Chapter2", label: "Chapter 2" },
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
  setNewMember,
  handleCloseModal,
  memberList,
  setMemberList,
  isModalOpen,
  selectedMember,
  IsEdit,
  setIsEdit,
}) => {
  const memberObject = {
    firstName: "",
    lastName: "",
    role: "",
    chapter: "",
    committee: "",
    status: "",
    email: "",
  };
  const [formData, setFormData] = useState(memberObject);
  const [emailError, setEmailError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result;
        const updatedFormData = { ...formData, image: imageDataUrl };
        handleMemberSave(updatedFormData);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      handleMemberSave(formData);
    }
  };

  const handleMemberSave = (updatedFormData) => {
    const storedMembers = JSON.parse(localStorage.getItem("members")) || [];
    const loggedInMember = storedMembers.find(
      (member) => member.email === updatedFormData?.email
    );

    if (loggedInMember) {
      setEmailError("This email already Exist please select different Email");
      return;
    }
    if (IsEdit) {
      const newMembers = memberList.map((member) =>
        member.id === updatedFormData.id ? updatedFormData : member
      );
      localStorage.setItem("members", JSON.stringify(newMembers));
      setMemberList(newMembers);
    } else {
      const newMember = { ...updatedFormData, id: Math.random() };
      const newMembers = [...memberList, newMember];
      localStorage.setItem("members", JSON.stringify(newMembers));
      setMemberList(newMembers);
    }
    handleCloseModal();
    setFormData(memberObject);
    setEmailError("");
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (
        (file.type === "image/jpeg" || file.type === "image/png") &&
        file.size <= MAX_FILE_SIZE
      ) {
        setSelectedFile(file);
        setFileError("");
      } else {
        setFileError(
          `Please upload a JPG or PNG file smaller than ${
            MAX_FILE_SIZE / (1024 * 1024)
          }MB`
        );
        e.target.value = "";
      }
    }
  };

  useEffect(() => {
    if (IsEdit) {
      setFormData(selectedMember);
    }
  }, [IsEdit, selectedMember]);
  return (
    <PopUpModel
      setOpen={() => {
        handleCloseModal();
        setFormData(memberObject);
        setIsEdit(false);
        setNewMember({});
        setFileError("");
        setEmailError("");
      }}
      open={isModalOpen}
    >
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
            className={"w-full bg-seamlessGray-300 placeholder:text-sm placeholder:text-seamlessGray-950 "}
          />
          <TextInput
            required={true}
            type="text"
            className={"w-full bg-seamlessGray-300 placeholder:text-sm placeholder:text-seamlessGray-950 "}
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
          <TextInput
            required={true}
            type="email"
            className={"w-full bg-seamlessGray-300 placeholder:text-sm placeholder:text-seamlessGray-950"}
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />

          <p className="text-sm font-medium text-red-500">{emailError}</p>
          <div className="mb-4">
            <Select
              required={true}
              options={roles}
              placeholder="Role"
              value={
                formData.role && { label: formData.role, value: formData.role }
              }
              onChange={(e) => handleInputChange("role", e.value)}
              styles={customSelectStyles}
            />
          </div>
          <div className="mb-4">
            <Select
              required={true}
              options={statusOptions}
              placeholder="Status"
              value={
                formData.status && {
                  label: formData.status,
                  value: formData.status,
                }
              }
              onChange={(e) => handleInputChange("status", e.value)}
              styles={customSelectStyles}
            />
          </div>

          <div className="mb-4">
            <Select
              required={true}
              options={chapters}
              placeholder="Chapter"
              value={
                formData.chapter && {
                  label: formData.chapter,
                  value: formData.chapter,
                }
              }
              onChange={(e) => handleInputChange("chapter", e.value)}
              styles={customSelectStyles}
            />
          </div>

          <div className="mb-4">
            <Select
              required={true}
              options={committees}
              placeholder="Committee"
              value={
                formData.committee && {
                  label: formData.committee,
                  value: formData.committee,
                }
              }
              onChange={(e) => handleInputChange("committee", e.value)}
              styles={customSelectStyles}
              className=""
            />
          </div>
          <div className="mt-4">
            <input
              required
              type="file"
              accept="image/jpeg, image/png"
              id="fileInput"
              onChange={handleFileChange}
              className="block w-full mt-1 text-sm border border-gray-300 rounded-full file:text-sm text-seamlessGray-950 file:mr-4 file:border-0 file:py-3 file:px-4 file:font-normal file:bg-seamlessGray-500 hover:file:bg-seamlessBlue-800 focus:text-white focus:outline-none focus:ring-2 focus:ring-seamlessBlue-800 focus:border-seamlessBlue-800 file:rounded-full hover:file:text-white"
            />
            <p className="mt-2 text-sm font-medium text-red-500">{fileError}</p>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-4 mt-2 text-white transition-colors duration-300 bg-seamlessBlue-700 rounded-[21px] text-sm font-semibold"
          >
            SEND INVITE
          </button>
        </form>
      </div>
    </PopUpModel>
  );
};

export default AddMemberForm;
