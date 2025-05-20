 "use client"
import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const chartData = [
  { date: "2025-04-01", desktop: 222, mobile: 150 },
  { date: "2025-04-02", desktop: 97, mobile: 180 },
  { date: "2025-04-03", desktop: 167, mobile: 120 },
  { date: "2025-04-04", desktop: 242, mobile: 260 },
  { date: "2025-04-05", desktop: 373, mobile: 290 },
  { date: "2025-04-06", desktop: 301, mobile: 340 },
  { date: "2025-04-07", desktop: 245, mobile: 180 },
  { date: "2025-04-08", desktop: 409, mobile: 320 },
  { date: "2025-04-09", desktop: 59, mobile: 110 },
  { date: "2025-04-10", desktop: 261, mobile: 190 },
  { date: "2025-04-11", desktop: 327, mobile: 350 },
  { date: "2025-04-12", desktop: 292, mobile: 210 },
  { date: "2025-04-13", desktop: 342, mobile: 380 },
  { date: "2025-04-14", desktop: 137, mobile: 220 },
  { date: "2025-04-15", desktop: 120, mobile: 170 },
  { date: "2025-04-16", desktop: 138, mobile: 190 },
  { date: "2025-04-17", desktop: 446, mobile: 360 },
  { date: "2025-04-18", desktop: 364, mobile: 410 },
  { date: "2025-04-19", desktop: 243, mobile: 180 },
  { date: "2025-04-20", desktop: 89, mobile: 150 },
  { date: "2025-04-21", desktop: 137, mobile: 200 },
  { date: "2025-04-22", desktop: 224, mobile: 170 },
  { date: "2025-04-23", desktop: 138, mobile: 230 },
  { date: "2025-04-24", desktop: 387, mobile: 290 },
  { date: "2025-04-25", desktop: 215, mobile: 250 },
  { date: "2025-04-26", desktop: 75, mobile: 130 },
  { date: "2025-04-27", desktop: 383, mobile: 420 },
  { date: "2025-04-28", desktop: 122, mobile: 180 },
  { date: "2025-04-29", desktop: 315, mobile: 240 },
  { date: "2025-04-30", desktop: 454, mobile: 380 },
  { date: "2025-05-01", desktop: 165, mobile: 220 },
  { date: "2025-05-02", desktop: 293, mobile: 310 },
  { date: "2025-05-03", desktop: 247, mobile: 190 },
  { date: "2025-05-04", desktop: 385, mobile: 420 },
  { date: "2025-05-05", desktop: 481, mobile: 390 },
  { date: "2025-05-06", desktop: 498, mobile: 520 },
  { date: "2025-05-07", desktop: 388, mobile: 300 },
  { date: "2025-05-08", desktop: 149, mobile: 210 },
  { date: "2025-05-09", desktop: 227, mobile: 180 },
  { date: "2025-05-10", desktop: 293, mobile: 330 },
  { date: "2025-05-11", desktop: 335, mobile: 270 },
  { date: "2025-05-12", desktop: 197, mobile: 240 },
  { date: "2025-05-13", desktop: 197, mobile: 160 },
  { date: "2025-05-14", desktop: 448, mobile: 490 },
  { date: "2025-05-15", desktop: 473, mobile: 380 },
  { date: "2025-05-16", desktop: 338, mobile: 400 },
  { date: "2025-05-17", desktop: 499, mobile: 420 },
  { date: "2025-05-18", desktop: 315, mobile: 350 },
  { date: "2025-05-19", desktop: 235, mobile: 180 },
  { date: "2025-05-20", desktop: 177, mobile: 230 },
  { date: "2025-05-21", desktop: 82, mobile: 140 },
 
]

const chartConfig = {

  desktop: {
    label: "Deposit",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Withdraw",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

import {
  ArrowUpRight,
  ArrowDownLeft,
  HelpCircle,
  Clock3,
  MessageSquare,
  User,
  Home
} from "lucide-react";

export default function StatisticPage() {
      const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date().toISOString().slice(0, 10)
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <div className="min-h-screen w-full flex flex-col pb-20">
      {/* Header */}
      <div className="bg-gradient-to-tr from-cyan-500 to-sky-600 text-white px-4 pt-8 pb-6 rounded-b-3xl">
        <p className="text-sm mb-2">Account Finance</p>
        <h1 className="text-2xl font-bold">Rp. 25.550.000,-</h1>
        <p className="text-sm text-white/80">12 June 2022</p>
      </div>

      {/* Chart */}
          <Card className="mx-4 mt-6">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Statistics</CardTitle>
          <CardDescription>
            Showing total activity for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue className="text-gray-400" placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl text-gray-400">
            <SelectItem value="90d" className="rounded-lg text-gray-400">
              See All
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg text-gray-400">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg text-gray-400">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>

      {/* History */}
      <div className="px-4 mt-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-sm font-semibold text-gray-700">History</h2>
          <p className="text-xs text-gray-400">Category</p>
        </div>
        <div className="space-y-4">
          {/* Deposit */}
          <div className="rounded-xl shadow-sm border px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-[15px]">Deposit</p>
                  <p className="text-sm text-blue-600">Rp15.510.000,-</p>
                  <p className="text-xs text-gray-500 mt-1">Bank Mandiri ATM</p>
                </div>
              </div>
              <div className="text-right text-xs text-gray-500">
                <p>11 March 2022</p>
                <p>11.21 AM</p>
              </div>
            </div>
          </div>

          {/* Withdraw  */}
          <div className="rounded-xl shadow-sm border px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <ArrowDownLeft className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="font-semibold text-[15px]">Withdraw</p>
                  <p className="text-sm text-red-500">Rp15.510.000,-</p>
                  <p className="text-xs text-gray-500 mt-1">Bank Mandiri ATM</p>
                </div>
              </div>
              <div className="text-right text-xs text-gray-500">
                <p>11 March 2022</p>
                <p>11.22 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-2 flex justify-around items-center">
        <Home className="w-6 h-6 text-gray-400" />
        <Clock3 className="w-6 h-6 text-blue-600" />
        <MessageSquare className="w-6 h-6 text-gray-400" />
        <User className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  );
}
