import { Skeleton } from "@/components/ui/skeleton";

const SummaryCardLoader = () => {
  return (
    <>
      {" "}
      <Skeleton className="h-40 min-w-50 rounded-xl flex-1 bg-black/50" />
      <Skeleton className="h-40 min-w-50 rounded-xl flex-1 bg-black/50" />
      <Skeleton className="h-40 min-w-50 rounded-xl flex-1 bg-black/50" />
    </>
  );
};

export default SummaryCardLoader;
