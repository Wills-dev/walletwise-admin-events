import { useQuery } from "@tanstack/react-query";
import { getTickets } from "../api";
import { useTableState } from "./useTableState";

export const useGetSoldTickets = () => {
  const {
    currentPage,
    limit,
    setLimit: handleLimitChange,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    search,
    handleSearchChange,
    handleClear,
    submittedQuery,
    handleSearch,
    setCurrentPage,
    ticketType,
    setTicketType,
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["ticket", submittedQuery, limit, currentPage, ticketType],
    queryFn: () =>
      getTickets({
        currentPage,
        limit,
        search: submittedQuery,
        ticketType,
      }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    data,
    isPending,
    isLoading,
    isError,
    error,
    refetch,
    currentPage,
    limit,
    setLimit: handleLimitChange,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    search,
    handleSearchChange,
    handleClear,
    handleSearch,
    ticketType,
    setTicketType,
    setCurrentPage,
  };
};
