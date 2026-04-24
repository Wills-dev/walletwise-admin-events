import axios from "axios";

export const getTicket = async ({
  fullName,
  email,
  phoneNumber,
  quantity,
  ticketType,
}: {
  fullName: string;
  email: string;
  phoneNumber: string;
  quantity: number;
  ticketType: string;
}) => {
  try {
    // const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
    const payload = { fullName, email, phoneNumber, quantity, ticketType };
    const url = `https://walletwise.ng/api/v1/events/book`;
    const { data } = await axios.post(url, payload);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getBredTicket = async ({
  fullName,
  email,
  phoneNumber,
}: {
  fullName: string;
  email: string;
  phoneNumber: string;
}) => {
  try {
    const payload = { fullName, email, phoneNumber };
    const url = `https://walletwise.ng/api/bred/register`;
    const { data } = await axios.post(url, payload);
    return data;
  } catch (error) {
    throw error;
  }
};
