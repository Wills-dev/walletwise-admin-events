import { useQuery } from "@tanstack/react-query";
import { getTicketSummary } from "../api";

export const useGetTicketSummary = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["ticket-summary"],
    queryFn: getTicketSummary,
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    data,
    isFetching: isLoading,
  };
};
