"use client";

import Container from "@/components/atoms/Container/Container";

import { useGetSoldTickets } from "@/lib/hooks/useGetSoldTickets";
import TableWrapper from "../TableWrapper/TableWrapper";
import { ColumnDef } from "@tanstack/react-table";
import { Column } from "./Column";
import { useGetTicketSummary } from "@/lib/hooks/useGetTicketSummary";
import SummaryWrapper from "@/components/molecules/SummaryWrapper/SummaryWrapper";

const OverviewWrapper = () => {
  const { data: summary, isFetching } = useGetTicketSummary();
  const {
    data,
    isLoading,
    refetch,
    currentPage,
    limit,
    setLimit,
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
  } = useGetSoldTickets();

  const typedColumns = Column as ColumnDef<unknown>[];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[linear-gradient(180deg,#615853_0%,#6B615A_21.74%,#857772_37.98%,#7E706B_75%,#1E1C18_100%)]">
      <Container>
        <div className="py-16 space-y-8">
          <div className=""></div>
          <div className="">
            <SummaryWrapper
              loading={isFetching}
              totalRevenue={data?.total_tickets_sold}
            />
          </div>
          <TableWrapper
            columns={typedColumns}
            data={data || []}
            totalPages={data?.totalPages}
            currentPage={currentPage}
            prevPage={prevPage}
            nextPage={nextPage}
            goToFirstPage={goToFirstPage}
            goToLastPage={goToLastPage}
            isFirstPage={isFirstPage}
            isLastPage={isLastPage}
            limit={limit}
            setLimit={setLimit}
            refetch={refetch}
            search={search}
            handleChange={handleSearchChange}
            handleClear={handleClear}
            onSubmit={handleSearch}
            setCurrentPage={setCurrentPage}
            isLoading={isLoading}
          />
        </div>
      </Container>
    </div>
  );
};

export default OverviewWrapper;
