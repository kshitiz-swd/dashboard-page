"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts"

// Dummy monthly data
const data = [
  { month: "Apr", spent: 200 },
  { month: "May", spent: 400 },
  { month: "Jun", spent: 350 },
  { month: "Jul", spent: 420 },
  { month: "Aug", spent: 650 },
  { month: "Sep", spent: 700 },
  { month: "Oct", spent: 1200 },
  { month: "Nov", spent: 1000 },
  { month: "Dec", spent: 1100 },
  { month: "Jan", spent: 1050 },
  { month: "Feb", spent: 1080 },
]

const OverviewMonthlyChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Spending</CardTitle>
      </CardHeader>
      <CardContent className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {/* Gradient definition */}
            <defs>
              <linearGradient id="colorSpent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* X and Y Axis */}
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              className="text-sm"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              className="text-sm"
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
              }}
            />

            {/* Filled Area under Line */}
            <Area
              type="monotone"
              dataKey="spent"
              stroke={false}
              fill="url(#colorSpent)"
            />

            {/* Line */}
            <Line
              type="monotone"
              dataKey="spent"
              stroke="#2563eb" // blue-600
              strokeWidth={4}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default OverviewMonthlyChart
