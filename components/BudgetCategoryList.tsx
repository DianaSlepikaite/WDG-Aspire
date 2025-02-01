import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const categories = [
  { name: "Housing", budget: 1000, spent: 950 },
  { name: "Food", budget: 500, spent: 450 },
  { name: "Transportation", budget: 300, spent: 280 },
  { name: "Entertainment", budget: 200, spent: 150 },
  { name: "Other", budget: 400, spent: 200 },
]

export default function BudgetCategoryList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold">{category.name}</span>
                <span>
                  ${category.spent} / ${category.budget}
                </span>
              </div>
              <Progress value={(category.spent / category.budget) * 100} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

