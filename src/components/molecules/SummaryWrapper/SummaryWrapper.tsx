import SummaryCardLoader from "@/components/atoms/skeleton/SummaryCardLoader";
import StatisticCard from "@/components/atoms/StatisticCard/StatisticCard";

import {
  Wallet,
  Percent,
  Users,
  ArrowLeftRight,
  CheckCircle,
} from "lucide-react";

const SummaryWrapper = ({
  loading,
  totalRevenue,
  totalCommission,
  totalUserCommission,
  totalTransactions,
  success,
  onClick,
}: {
  loading: boolean;
  totalRevenue: number;
  totalCommission: number;
  totalUserCommission: number;
  totalTransactions: number;
  success: number;
  onClick: (type: string) => void;
}) => {
  const summaryData: {
    title: string;
    value: number;
    color: "green" | "yellow" | "red" | "blue" | "orange" | "purple";
    currency?: string;
    icon: React.ReactElement;
    type: string;
  }[] = [
    {
      title: "Total Revenue",
      value: totalRevenue,
      color: "orange",
      currency: "₦",
      icon: <Wallet className="w-6 h-6" />,
      type: "",
    },
    {
      title: "Total Commission",
      value: totalCommission,
      color: "blue",
      currency: "₦",
      icon: <Percent className="w-6 h-6" />,
      type: "",
    },
    {
      title: "Total User Commission",
      value: totalUserCommission,
      color: "purple",
      currency: "₦",
      icon: <Users className="w-6 h-6" />,
      type: "",
    },
    {
      title: "Total Transaction",
      value: totalTransactions,
      color: "green",
      icon: <ArrowLeftRight className="w-6 h-6" />,
      type: "",
    },
    {
      title: "Success",
      value: success,
      color: "green",
      icon: <CheckCircle className="w-6 h-6" />,
      type: "success",
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
