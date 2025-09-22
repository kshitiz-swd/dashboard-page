"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const OverallBudget = () => {
  const [totalSpent, setTotalSpent] = useState(32000)   // Example: fetched/spent
  const [monthlyBudget, setMonthlyBudget] = useState(50000)
  const [newBudget, setNewBudget] = useState(monthlyBudget)

  const percentage = (totalSpent / monthlyBudget) * 100
  const overBudget = totalSpent  > monthlyBudget

  const handleSave = () => {
    setMonthlyBudget(newBudget)
  }

  return (
    <Card className="border-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Monthly Budget</CardTitle>
          <p className="text-sm text-gray-500">Track your overall spending</p>
        </div>
        {/* Edit Button opens Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">Edit</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Monthly Budget</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <Input
                type="number"
                value={newBudget}
                onChange={(e) => setNewBudget(Number(e.target.value))}
              />
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleSave} className="bg-blue-600 text-white hover:bg-blue-700">
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between text-sm mb-2">
          <span>Spent</span>
          <span className={overBudget ? "text-red-600" : "text-gray-600"}>
            ₹{totalSpent.toLocaleString()} / ₹{monthlyBudget.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Progress
            value={Math.min(percentage, 100)}
            className={`h-2 flex-1 ${overBudget ? "bg-red-600" : "text-gray-700"}`}
          />
          <span
            className={`text-sm font-medium ${
              overBudget ? "text-red-600" : "text-gray-700"
            }`}
          >
            {percentage.toFixed(1)}%
          </span>
        </div>

        {overBudget && (
          <p className="text-xs text-red-600 mt-1">
            You’ve exceeded your budget!
          </p>
        )}
      </CardContent>
    </Card>
  )
}

export default OverallBudget
