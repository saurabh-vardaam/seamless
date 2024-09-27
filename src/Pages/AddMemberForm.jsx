import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Select from "react-select";
import NaccLogo from "../Images/NaccLogo.png";

const roles = [
  { value: 'admin', label: 'Admin' },
  { value: 'user', label: 'User' },
];

const chapters = [
  { value: 'chapter1', label: 'Chapter 1' },
  { value: 'chapter2', label: 'Chapter 2' },
];

const committees = [
  { value: 'committee1', label: 'Committee 1' },
  { value: 'committee2', label: 'Committee 2' },
];

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '9999px',
    backgroundColor: '#edefef',
    boxShadow: 'none',
    outline: 'none',
    borderColor: state.isFocused ? '#edefef' : '#edefef',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#282728',
    fontSize: "12px",
    fontWeight: '400',
  }),
  menu: (provided) => ({
    ...provided,
  }),
};

const AddMemberForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    role: null,
    chapter: null,
    committee: null,
  });

  const handleChange = (selectedOption, field) => {
    setFormData({ ...formData, [field]: selectedOption });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-5 md:p-10 bg-white rounded-[50px] max-w-[400px] drop-shadow-[0px 5px 31px rgba(0,0,0,0.35)] w-full mx-auto">
      <div className="flex justify-center mb-6">
        <img src={NaccLogo} alt="nacc" className="h-12" />
      </div>
      <form className="pt-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 text-[#282728] placeholder:text-sm bg-[#edefef] rounded-[21px] focus:outline-none text-sm font-normal placeholder:text-[#282728]"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 text-[#282728] placeholder:text-sm bg-[#edefef] rounded-[21px] focus:outline-none text-sm font-normal placeholder:text-[#282728]"
        />

        <div className="mb-4">
          <Select
            options={roles}
            placeholder="Role"
            value={formData.role}
            onChange={(selectedOption) => handleChange(selectedOption, 'role')}
            styles={customSelectStyles}
          />
        </div>

        <div className="mb-4">
          <Select
            options={chapters}
            placeholder="Chapter"
            value={formData.chapter}
            onChange={(selectedOption) => handleChange(selectedOption, 'chapter')}
            styles={customSelectStyles}
          />
        </div>

        <div className="mb-4">
          <Select
            options={committees}
            placeholder="Committee"
            value={formData.committee}
            onChange={(selectedOption) => handleChange(selectedOption, 'committee')}
            styles={customSelectStyles}
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white transition-colors duration-300 bg-[#283275] rounded-[21px] text-sm font-semibold"
        >
          SEND INVITE
        </button>
      </form>
    </div>
  );
}

export default AddMemberForm;
