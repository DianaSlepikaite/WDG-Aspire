import BudgetOverview from "@/components/BudgetOverview"
import BudgetCategoryList from "@/components/BudgetCategoryList"
import BudgetForm from "@/components/BudgetForm"

export default function BudgetPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Budget Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BudgetOverview />
        <BudgetCategoryList />
      </div>
      <BudgetForm />
    </div>
  )
}

