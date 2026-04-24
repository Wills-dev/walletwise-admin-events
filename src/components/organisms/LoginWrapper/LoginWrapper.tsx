"use client";

import Input from "@/components/atoms/Input/Input";
import { useLogin } from "@/lib/hooks/useLogin";
import { Loader } from "lucide-react";

const LoginWrapper = () => {
  const {
    loginInfo,
    handleChange,
    handleSubmit,
    inputType,
    handleInputTypeChange,
    isPending,
  } = useLogin();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Input
          type="email"
          value={loginInfo?.email}
          onChange={handleChange}
          name="email"
          placeholder="Enter email address"
        />
      </div>
      <div className="space-y-2">
        <Input
          type="text"
          value={loginInfo?.password}
          onChange={handleChange}
          name="password"
          placeholder="Enter password"
        />
      </div>
      <button
        type="submit"
        className="w-full h-12 bg-linear-to-br from-[#C8001E] to-[#8B0012] flex justify-center items-center font-bold text-xs md:text-[14px] leading-none tracking-[1px] md:tracking-[2.7px] text-center uppercase text-white font-cinzel cursor-pointer"
      >
        {isPending ? <Loader className="animate-spin w-8 h-8" /> : "Login"}
      </button>
    </form>
  );
};

export default LoginWrapper;
