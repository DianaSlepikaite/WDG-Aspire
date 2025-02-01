import AccountSummary from "@/components/AccountSummary"
import QuickAccessTiles from "@/components/QuickAccessTiles"
import FinancialInsights from "@/components/FinancialInsights"
import GoalProgress from "@/components/GoalProgress"
import FinancialAIAdvisor from "@/components/FinancialAIAdvisor"
import EducationCenter from "@/components/EducationCenter"
import HabitBuildingSavings from "@/components/HabitBuildingSavings"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">Personal Finance Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AccountSummary />
          <QuickAccessTiles />
          <FinancialInsights />
          <GoalProgress />
          <FinancialAIAdvisor />
          <EducationCenter />
          <HabitBuildingSavings />
        </div>
      </div>
    </main>
  )
}

