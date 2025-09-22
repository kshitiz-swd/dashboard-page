// components/skeletons/DashboardSkeleton.tsx
import {
  PageHeaderSkeleton,
  CardSkeleton,
  ChartSkeleton,
  TableSkeleton,
} from "./Skeletons"

const DashboardSkeleton = () => {
  return (
    <div className="relative min-h-screen flex justify-center bg-[#F9FBFA] pt-20 sm:pt-28 px-4 sm:px-6 lg:px-0">
      <div className="absolute top-0 left-0 w-full h-[20%] sm:h-[30%] bg-gray-100" />
      <div className="w-full max-w-[1182px] mt-6 sm:mt-10 relative z-10">
        <PageHeaderSkeleton />
        <hr className="text-gray-300 mb-6 sm:mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-16">
          <div className="md:col-span-2">
            <ChartSkeleton />
          </div>
          <div className="md:col-span-1">
            <ChartSkeleton />
          </div>
        </div>

        <div className="mt-10 sm:mt-16">
          <TableSkeleton />
        </div>
      </div>
    </div>
  )
}

export default DashboardSkeleton
