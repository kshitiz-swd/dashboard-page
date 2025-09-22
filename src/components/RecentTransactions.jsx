"use client"

import { useState, useMemo } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

const initialTransactions = [
  { id: 1, date: "2025-05-24", title: "Internet Bill", category: "Utilities", type: "EXPENSE", amount: -320, method: "Auto Debit", frequency: "One-time" },
  { id: 2, date: "2025-05-15", title: "Client Payment", category: "Freelance", type: "INCOME", amount: 2300, method: "Bank Transfer", frequency: "Monthly" },
  { id: 3, date: "2025-04-01", title: "Office Rent", category: "Rent", type: "EXPENSE", amount: -2000, method: "Bank Transfer", frequency: "One-time" },
  { id: 4, date: "2025-04-28", title: "Lunch", category: "Meals", type: "EXPENSE", amount: -480, method: "Card", frequency: "One-time" },
  { id: 5, date: "2025-04-22", title: "Design Project", category: "Freelance", type: "INCOME", amount: 3500, method: "Bank Transfer", frequency: "One-time" },
]

export default function RecentTransactions() {
  const [transactions, setTransactions] = useState(initialTransactions)
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("ALL")
  const [freqFilter, setFreqFilter] = useState("ALL")

  // ✅ Delete handler
  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id))
  }

  const filtered = useMemo(() => {
    return transactions
      .filter((t) =>
        Object.values(t).some((val) =>
          String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
      .filter((t) => (typeFilter === "ALL" ? true : t.type === typeFilter))
      .filter((t) => (freqFilter === "ALL" ? true : t.frequency === freqFilter))
  }, [searchTerm, typeFilter, freqFilter, transactions])

  return (
    <Card className="mt-12">
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <CardTitle>Recent Transactions</CardTitle>
          <p className="text-sm text-muted-foreground">
            Showing all recent transactions
          </p>
        </div>
      </CardHeader>

      <CardContent>
        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <Input
            type="text"
            placeholder="Search transactions..."
            className="w-full md:w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <Select onValueChange={setTypeFilter} defaultValue="ALL">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Types</SelectItem>
              <SelectItem value="INCOME">Income</SelectItem>
              <SelectItem value="EXPENSE">Expense</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={setFreqFilter} defaultValue="ALL">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All</SelectItem>
              <SelectItem value="Monthly">Monthly</SelectItem>
              <SelectItem value="One-time">One-time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date Created</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Frequency</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.slice(0, 10).map((t) => (
                <TableRow key={t.id}>
                  <TableCell>
                    {new Date(t.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell>{t.title}</TableCell>
                  <TableCell>{t.category}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-md text-xs font-medium ${
                        t.type === "INCOME"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {t.type}
                    </span>
                  </TableCell>
                  <TableCell
                    className={`text-right font-medium ${
                      t.amount > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {t.amount > 0 ? `+$${t.amount}` : `-$${Math.abs(t.amount)}`}
                  </TableCell>
                  <TableCell>{t.method}</TableCell>
                  <TableCell>{t.frequency}</TableCell>
                  <TableCell className="text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => handleDelete(t.id)} // ✅ delete works now
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
