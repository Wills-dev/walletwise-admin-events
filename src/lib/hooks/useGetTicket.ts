import { useState } from "react";

import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { getTicket } from "../api";
import { ApiErrorResponse } from "../types";
import { promiseErrorFunction } from "../helpers/promiseError";
import { useRouter } from "next/navigation";

export const useGetTicket = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [ticketType, setticketType] = useState("");
  const [quantity, setQuantity] = useState(1);

  const resetForm = () => {
    setUserInfo({
      fullName: "",
      email: "",
      phoneNumber: "",
    });
    setQuantity(1);
    setticketType("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const descrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: getTicket,
    onSuccess: (data) => {
      resetForm();
      toast.success(
        "Ticket reserved. Proceed to payment to confirm your booking.",
      );
      router.push(data?.authorization_url);
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
    } else if (quantity < 1) {
      return toast.error("Quantity must be 1 and above");
    } else if (!ticketType) {
      return toast.error("Please select ticket type");
    }
    mutate({ fullName, email, phoneNumber, quantity, ticketType });
  };

  return {
    handleChange,
    userInfo,
    handleSubmit,
    isPending,
    increase,
    descrease,
    quantity,
    ticketType,
    setticketType,
  };
};
