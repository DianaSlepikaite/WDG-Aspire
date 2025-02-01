import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PiggyBank, CreditCard, TrendingUp, FileText, Target, BookOpen } from "lucide-react"

const tiles = [
  { name: "Budget", icon: PiggyBank, href: "/budget" },
  { name: "Expenses", icon: CreditCard, href: "/expenses" },
  { name: "Investments", icon: TrendingUp, href: "/investments" },
  { name: "Goals", icon: Target, href: "/goals" },
  { name: "Reports", icon: FileText, href: "/reports" },
  { name: "Learn", icon: BookOpen, href: "/learn" },
]

export default function QuickAccessTiles() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Access</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {tiles.map((tile) => (
            <Button
              key={tile.name}
              variant="outline"
              className="h-24 flex flex-col items-center justify-center"
              asChild
            >
              <a href={tile.href}>
                <tile.icon className="h-6 w-6 mb-2" />
                {tile.name}
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

