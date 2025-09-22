"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { PlusIcon, XIcon } from "lucide-react"
import TransactionForm from "./TransactionForm"

const AddTransaction = ({ onAddTransaction }) => {
  const [open, setOpen] = useState(false)

  const onCloseDrawer = () => setOpen(false)

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Transaction
        </Button>
      </DrawerTrigger>

      <DrawerContent className="max-w-md overflow-hidden overflow-y-auto">
        <DrawerHeader className="relative">
          <div>
            <DrawerTitle className="text-xl font-semibold">Add Transaction</DrawerTitle>
            <DrawerDescription>
              Add a new transaction to track your finances
            </DrawerDescription>
          </div>
          <DrawerClose className="absolute top-4 right-4">
            <XIcon className="h-5 w-5 cursor-pointer" />
          </DrawerClose>
        </DrawerHeader>

        {/* ✅ pass props */}
        <TransactionForm onCloseDrawer={onCloseDrawer} onAddTransaction={onAddTransaction} />
      </DrawerContent>
    </Drawer>
  )
}

export default AddTransaction
