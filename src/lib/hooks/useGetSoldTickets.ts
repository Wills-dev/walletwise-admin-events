import React from "react";
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

  return {};
};
