import React, { useState, useEffect } from "react"
import OverviewCard from "../components/OverviewCard"
import OverviewMonthlyChart from "../components/OverviewMonthlyChart"
import CategoryPie from "../components/CategoryPie"
import AddTransactions from "../components/Transactions/AddTransaction"
import DashboardSkeleton from "../components/skeleton/DashboardSkeleton"
import OverallBugdet from "../components/OverallBugdet"
import RecentTransactions from "@/components/RecentTransactions"

const cardOverviewData = [
  { title: "Available Balance", amount: "$8330" },
  { title: "Total Income", amount: "$38,149" },
  { title: "Total Expenses", amount: "$29,030" },
]

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Netflix", category: "Entertainment", type: "EXPENSE", amount: -500, date: "2025-09-20" },
    { id: 2, title: "Salary", category: "Income", type: "INCOME", amount: 5000, date: "2025-09-19" },
  ])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleAddTransaction = (transaction) => {
    setTransactions((prev) => [
      { ...transaction, id: prev.length + 1, date: new Date().toISOString() },
      ...prev,
    ])
  }

  if (loading) return <DashboardSkeleton />

  return (
    <div className="relative min-h-screen flex justify-center bg-[#F9FBFA] py-28 px-4 sm:px-6 lg:px-0">
      <div className="absolute top-0 left-0 w-full h-[410px] shadow-sm bg-[#FEFEFF]" />

      <div className="w-full max-w-[1182px] relative z-10">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Welcome, Kshitij Srivastava
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Here's your spending overview for this month
            </p>
          </div>
          <AddTransactions onAddTransaction={handleAddTransaction} />
        </header>

        <hr className="border-gray-300 mb-8" />

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cardOverviewData.map((data, index) => (
            <OverviewCard key={index} title={data.title} amount={data.amount} />
          ))}
        </section>

        <section className="mt-12">
          <OverallBugdet />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="md:col-span-2">
            <OverviewMonthlyChart />
          </div>
          <div className="md:col-span-1">
            <CategoryPie />
          </div>
        </section>

        <section className="mt-12">
          <RecentTransactions transactions={transactions} />
        </section>
      </div>
    </div>
  )
}

export default Dashboard
