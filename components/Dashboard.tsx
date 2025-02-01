import AccountSummary from "./AccountSummary"
import QuickAccessTiles from "./QuickAccessTiles"
import FinancialInsights from "./FinancialInsights"
import GoalProgress from "./GoalProgress"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Personal Finance Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AccountSummary />
        <QuickAccessTiles />
        <FinancialInsights />
        <GoalProgress />
      </div>
    </div>
  )
}

