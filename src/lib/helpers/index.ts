import { DateOptions } from "../types";

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: DateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function numberWithCommas(x: number) {
  const num = parseFloat(x.toString());
  return Number.isInteger(num)
    ? num.toLocaleString()
    : num.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
}
