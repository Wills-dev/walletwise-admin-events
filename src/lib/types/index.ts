import { ColumnDef } from "@tanstack/react-table";
import { SyntheticEvent } from "react";

interface ApiErrorData {
  message?: string;
  errors?: { message?: string }[];
}

export interface ApiErrorResponse {
  response?: {
    data?: ApiErrorData;
  };
}

export interface TableWrapperProps<TData = unknown> {
  columns: ColumnDef<TData>[];
  data: TData[];
  totalPages: number;
  currentPage: number;
  prevPage: () => void;
  nextPage: (totalPages: number) => void;
  goToLastPage: (totalPages: number) => void;
  goToFirstPage: () => void;
  isFirstPage: () => boolean;
  isLastPage: (totalPages: number) => boolean;
  limit: number;
  setLimit: (limit: number) => void;
  refetch: () => void;
  search: string;
  handleChange: (search: string) => void;
  handleClear: () => void;
  onSubmit: (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => void;
  setCurrentPage?: (page: number) => void;
  isLoading?: boolean;
}

export interface Transaction {
  id: number;
  full_name: string;
  email: string;
  phone_number: string;
  ticket_id: string;
  ticket_type: "REGULAR" | string;
  quantity: number;
  amount_paid: string;
  payment_reference: string;
  payment_status: "success" | "pending" | "failed" | string;
  created_at: string;
}

export interface DateOptions {
  year?: "numeric" | "2-digit" | undefined;
  month?: "numeric" | "2-digit" | "short" | "long" | "narrow" | undefined;
  day?: "numeric" | "2-digit" | undefined;
  hour?: "numeric" | "2-digit" | undefined;
  minute?: "numeric" | "2-digit" | undefined;
  hour12?: boolean;
}
