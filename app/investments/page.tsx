import PortfolioOverview from "@/components/PortfolioOverview"
import PortfolioAllocation from "@/components/PortfolioAllocation"
import InvestmentList from "@/components/InvestmentList"

export default function InvestmentsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Investment Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PortfolioOverview />
        <PortfolioAllocation />
      </div>
      <InvestmentList />
    </div>
  )
}

