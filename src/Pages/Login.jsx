import React, { useState } from "react";
import TextInput from "../Components/TextInput";
import SeamLessLogo from "../Icons/SeamLessLogo";
import Image from "../Images/Login.png";
import { useNavigate } from "react-router-dom";
import Organization from "./Organization";
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate("/dashboard");
    }, 100);
  };
  const [data, setData] = useState({
    OrganizationName: "",
    user_name: "",
    password: "",
  });
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        backgroundPosition: ``,
        objectFit: `cover`,
      }}
      className="h-[100vh] w-[100vw] bg-blue-500 flex items-center justify-center"
    >
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <SeamLessLogo className={"text-white"} />
        <TextInput
          required={true}
          placeholder={"Organization"}
          className="border "
        />
        <TextInput required={true} placeholder={"User"} className="border " />
        <TextInput
          required={true}
          placeholder={"Password"}
          className="border "
        />
        <button
          type="submit"
          className="px-6 py-4 text-sm font-semibold text-seamlessBlue-200 bg-seamlessBlue-100 rounded-3xl"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Login;
