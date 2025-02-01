import Link from "next/link"
import { Home, PiggyBank, CreditCard, TrendingUp, FileText } from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Budget", href: "/budget", icon: PiggyBank },
  { name: "Expenses", href: "/expenses", icon: CreditCard },
  { name: "Investments", href: "/investments", icon: TrendingUp },
  { name: "Goals", href: "/goals", icon: FileText },
]

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">FinanceApp</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex justify-around py-2 bg-gray-700">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="flex flex-col items-center px-3 py-2 rounded-md text-xs">
              <item.icon className="h-5 w-5 mb-1" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

