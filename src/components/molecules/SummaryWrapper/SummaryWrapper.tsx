import SummaryCardLoader from "@/components/atoms/skeleton/SummaryCardLoader";
import StatisticCard from "@/components/atoms/StatisticCard/StatisticCard";

import { Wallet, Ticket, Crown, User, Users } from "lucide-react";

const SummaryWrapper = ({
  loading,
  totalRevenue,
  totalTickets,
  vipSold,
  regularSold,
  table6,
  table8,
  table10,
  onClick,
  seatTable,
}: {
  loading: boolean;
  totalRevenue: number;
  totalTickets: number;
  vipSold: number;
  regularSold: number;
  table6: number;
  table8: number;
  table10: number;
  seatTable: number;
  onClick: (type: string) => void;
}) => {
  const summaryData: {
    title: string;
    value: number;
    color: "green" | "yellow" | "red" | "blue" | "orange" | "purple";
    currency?: string;
    icon: React.ReactElement;
    type: string;
    onClick?: () => void;
  }[] = [
    {
      title: "Total Revenue",
      value: totalRevenue,
      color: "orange",
      currency: "₦",
      icon: <Wallet className="w-6 h-6" />,
      type: "revenue",
    },
    {
      title: "Total Tickets",
      value: totalTickets,
      color: "blue",
      icon: <Ticket className="w-6 h-6" />,
      type: "tickets",
      onClick: () => onClick(""),
    },
    {
      title: "VIP Sold",
      value: vipSold,
      color: "purple",
      icon: <Crown className="w-6 h-6" />,
      type: "vip",
      onClick: () => onClick("VIP"),
    },
    {
      title: "Regular Sold",
      value: regularSold,
      color: "green",
      icon: <User className="w-6 h-6" />,
      type: "regular",
      onClick: () => onClick("REGULAR"),
    },
    {
      title: "Seat Table",
      value: seatTable,
      color: "green",
      icon: <Users className="w-6 h-6" />,
      type: "table6",
      onClick: () => onClick("SEAT_TABLE"),
    },
    {
      title: "Table (6)",
      value: table6,
      color: "yellow",
      icon: <Users className="w-6 h-6" />,
      type: "table6",
      onClick: () => onClick("TABLE_6"),
    },
    {
      title: "Table (8)",
      value: table8,
      color: "orange",
      icon: <Users className="w-6 h-6" />,
      type: "table8",
      onClick: () => onClick("TABLE_8"),
    },
    {
      title: "Table (10)",
      value: table10,
      color: "red",
      icon: <Users className="w-6 h-6" />,
      type: "table10",
      onClick: () => onClick("TABLE_10"),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading ? (
        <SummaryCardLoader />
      ) : (
        summaryData.map((item, index) => (
          <StatisticCard
            key={index}
            title={item.title}
            value={item.value}
            color={item.color}
            currency={item.currency}
            icon={item.icon}
            onClick={() => onClick(item.type)}
          />
        ))
      )}
    </div>
  );
};

export default SummaryWrapper;
