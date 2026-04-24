import { SyntheticEvent } from "react";

import { Table } from "@tanstack/react-table";

import ColumnSorting from "@/components/atoms/ColumnSorting/ColumnSorting";
import SearchInput from "../SearchInput/SearchInput";

interface TableResourceToolbarProps<TData = unknown> {
  search: string;
  handleChange: (search: string) => void;
  handleClear: () => void;
  onSubmit: (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => void;
  table: Table<TData>;
}

const TableResourceToolbar = ({
  search,
  handleChange,
  handleClear,
  onSubmit,
  table,
}: TableResourceToolbarProps) => {
  return (
    <div className="flex justify-between items-center w-full gap-6">
      <SearchInput
        value={search}
        handleChange={handleChange}
        handleClear={handleClear}
        onSubmit={onSubmit}
      />
      <ColumnSorting table={table} />
    </div>
  );
};

export default TableResourceToolbar;
