import React, { useState } from "react";
import TextInput from "../Components/TextInput";
import Image from "../Images/Login.png";
import { useNavigate } from "react-router-dom";
import WhiteSeamlessLogo from "../Icons/WhiteSeamlessLogo";
const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    OrganizationName: "",
    user_name: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data?.user_name);
    localStorage.setItem("user_name", data.user_name);
    setTimeout(() => {
      navigate("/dashboard");
    }, 100);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        backgroundPosition: `bottom`,
        objectFit: `cover`,
      }}
      className="h-[100vh] w-[100vw] bg-blue-500 flex items-center justify-center"
    >
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <WhiteSeamlessLogo className={"text-white"} />
        <TextInput
          required={true}
          placeholder={"Organization"}
          className="border "
        />
        <TextInput
          value={data?.user_name}
          onChange={(e) =>
            setData((pre) => ({ ...pre, user_name: e.target.value }))
          }
          required={true}
          placeholder={"User"}
          className="border "
        />
        <TextInput
          value={data?.password}
          onChange={(e) =>
            setData((pre) => ({ ...pre, password: e.target.value }))
          }
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
