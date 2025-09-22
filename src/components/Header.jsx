import { Link, useLocation } from "react-router-dom"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet"

export default function Header() {
  const location = useLocation()

  const navItems = [
    { name: "Overview", path: "/" },
    { name: "Transactions", path: "/transactions" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-white py-3 z-50 shadow-md">
      <div className="max-w-[1182px] mx-auto px-4 sm:px-6 lg:px-0 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600"> Verity</h1>

        <nav className="hidden md:flex gap-6 ml-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav className="flex flex-col gap-4 mt-6">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.path}>
                    <Link
                      to={item.path}
                      className={`text-base font-medium transition-colors ${
                        location.pathname === item.path
                          ? "text-blue-600"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
