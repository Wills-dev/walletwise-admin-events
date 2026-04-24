import { useState } from "react";

import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { getBredTicket } from "../api";
import { ApiErrorResponse } from "../types";
import { promiseErrorFunction } from "../helpers/promiseError";

export const useGetBredTickets = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const resetForm = () => {
    setUserInfo({
      fullName: "",
      email: "",
      phoneNumber: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const { mutate, isPending } = useMutation({
    mutationFn: getBredTicket,
    onSuccess: () => {
      resetForm();
      toast.success(
        "Ticket created successfully. Check your email for the details.",
      );
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error applying for ticket", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    e.preventDefault();
    const { fullName, email, phoneNumber } = userInfo;
    if (!fullName) {
      return toast.error("Full name is required");
    } else if (!email) {
      return toast.error("Email is required");
    } else if (!phoneNumber) {
      return toast.error("Phone number is required");
    }
    mutate(userInfo);
  };

  return { handleChange, userInfo, handleSubmit, isPending };
};
