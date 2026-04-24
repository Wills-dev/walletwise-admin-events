import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

import { login } from "../api/auth";
import { ApiErrorResponse } from "../types";
import { promiseErrorFunction } from "../helpers/promiseError";
import { createAuthCookie } from "../helpers/cookie";

export const useLogin = () => {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [inputType, setInputType] = useState<"password" | "text">("password");

  const handleInputTypeChange = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setLoginInfo({ email: "", password: "" });
    setInputType("password");
  };

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      createAuthCookie("partnerToken", data?.data?.token);
      resetForm();
      toast.success("Login successful");
      router.push("/overview");
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error trying to Login", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email) {
      return toast.error("Email is required");
    } else if (!password) {
      return toast.error("Password is required");
    }
    mutate(loginInfo);
  };

  return {
    loginInfo,
    handleChange,
    handleSubmit,
    inputType,
    handleInputTypeChange,
    isPending,
  };
};
