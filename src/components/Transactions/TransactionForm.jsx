import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

// Extend schema
const formSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Amount must be a positive number.",
  }),
  type: z.enum(["INCOME", "EXPENSE"]),
  date: z.date({ required_error: "Please select a date." }),
  category: z.string().min(1, { message: "Please select a category." }),
  paymentMethod: z.string().min(1, { message: "Please select a payment method." }),
});

const categories = [
  "Food",
  "Rent",
  "Utilities",
  "Entertainment",
  "Salary",
  "Other",
];

const paymentMethods = [
  "Cash",
  "Credit Card",
  "Debit Card",
  "UPI",
  "Wallet",
];

const TransactionForm = ({ onCloseDrawer }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      amount: "",
      type: "EXPENSE",
      date: new Date(),
      category: "",
      paymentMethod: "",
    },
  });

  const onSubmit = (values) => {
    console.log("Transaction submitted:", values);
    // Later connect API here
    form.reset();
    onCloseDrawer?.();
  };

  return (
    <div className="p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Transaction Type */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transaction Type</FormLabel>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-4"
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    <RadioGroupItem value="INCOME" id="income" />
                    Income
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <RadioGroupItem value="EXPENSE" id="expense" />
                    Expense
                  </label>
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Transaction title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Amount */}
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input placeholder="0.00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <select
                    className="w-full border rounded-md p-2"
                    {...field}
                  >
                    <option value="">Select category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Payment Method */}
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment Method</FormLabel>
                <FormControl>
                  <select
                    className="w-full border rounded-md p-2"
                    {...field}
                  >
                    <option value="">Select payment method</option>
                    {paymentMethods.map((method) => (
                      <option key={method} value={method}>
                        {method}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Date */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className="w-full flex justify-between"
                      >
                        {field.value ? format(field.value, "PPP") : "Pick a date"}
                        <Calendar className="ml-2 h-4 w-4" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent 
                    className="w-auto p-0 bg-white border rounded-md shadow-md" 
                    align="start"
                  >
                    <CalendarComponent
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => field.onChange(date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button type="submit" className="w-full text-white bg-blue-700 rounded-lg">
            Save Transaction
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TransactionForm;
