import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

import { ApiErrorResponse } from "../types";
import { clearAuthCookie } from "../helpers/cookie";
import { promiseErrorFunction } from "../helpers/promiseError";
import { logout } from "../api/auth";

export const useLogout = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      clearAuthCookie("partnerToken");
      toast.success("Logout successful");
      router.push("/login");
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error trying to Logout", error);
      promiseErrorFunction(error);
    },
  });

  const handleLogout = () => {
    mutate();
  };

  return {
    handleLogout,
    isPending,
  };
};
