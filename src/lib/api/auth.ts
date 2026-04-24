import axios from "axios";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { data } = await axios.post(``, { email, password });
    return data;
  } catch (error) {
    throw error;
  }
};
