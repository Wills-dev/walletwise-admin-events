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
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
    if (ticketType) params.set("ticket_type", ticketType);

    const url = `/partner/registrations?${params.toString()}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
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
