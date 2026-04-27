import { Table } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ColumnSortingProps<TData = unknown> {
  table: Table<TData>;
}

const ColumnSorting = <TData,>({ table }: ColumnSortingProps<TData>) => {
  return (
    <div className="max-sm:hidden flex items-center gap-6">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <span className="text-white/80 text-sm">Columns</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-black/50 backdrop-blur-sm border-gray-700 text-white/80"
        >
          {table
            ?.getAllColumns()
            ?.filter((column) => column?.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column?.id}
                  className="capitalize"
                  checked={column?.getIsVisible()}
                  onCheckedChange={(value) => column?.toggleVisibility(!!value)}
                >
                  {column?.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ColumnSorting;
