import { axiosInstance } from "../axiosInstance";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { data } = await axiosInstance.post(`/partner/login`, {
      email,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
