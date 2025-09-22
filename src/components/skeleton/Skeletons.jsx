// components/skeletons/PageSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export const CardSkeleton = () => (
  <Skeleton className="h-32 w-full rounded-xl bg-gray-300" />
);

export const ChartSkeleton = () => (
  <Skeleton className="h-72 w-full rounded-xl bg-gray-300" />
);

export const TableSkeleton = () => (
  <div className="flex flex-col gap-4">
    {[1, 2, 3, 4, 5].map((i) => (
      <Skeleton key={i} className="h-12 w-full rounded-lg bg-gray-300" />
    ))}
  </div>
);

export const PageHeaderSkeleton = () => (
  <div className="flex justify-between items-center mb-10">
    <div className="flex flex-col gap-2">
      <Skeleton className="h-8 w-64 bg-gray-300" />
      <Skeleton className="h-4 w-80 bg-gray-300" />
    </div>
    <Skeleton className="h-10 w-36 rounded-md bg-gray-300" />
  </div>
);
