import ExpenseList from "@/components/ExpenseList"
import ExpenseForm from "@/components/ExpenseForm"
import ExpenseChart from "@/components/ExpenseChart"

export default function ExpensesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Expense Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ExpenseList />
        <div className="space-y-6">
          <ExpenseChart />
          <ExpenseForm />
        </div>
      </div>
    </div>
  )
}

