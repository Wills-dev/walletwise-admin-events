import { axiosInstance } from "../axiosInstance";

export const getTickets = async ({
  currentPage,
  limit,
  search,
  ticketType,
}: {
  currentPage: number;
  limit: number;
  status?: string;
  search: string | null;
  ticketType?: string;
}) => {
  try {
    // const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
    if (ticketType) params.set("ticketType", ticketType);

    const url = `/analytics/top-users?${params.toString()}`;
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getTicketSummary = async () => {
  try {
    const url = `/partner/registrations/summary`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
