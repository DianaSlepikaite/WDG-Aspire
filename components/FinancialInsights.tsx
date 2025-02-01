"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const insights = [
  "You've spent 20% less on dining out this month compared to last month.",
  "Your emergency fund is 2 months away from reaching your 6-month goal.",
  "Consider increasing your 401(k) contributions to maximize your employer match.",
  "You've consistently stayed under budget in the 'Entertainment' category for 3 months.",
  "Your investment portfolio has grown by 5% this quarter.",
]

export default function FinancialInsights() {
  const [currentInsight, setCurrentInsight] = useState(0)

  const nextInsight = () => {
    setCurrentInsight((prev) => (prev + 1) % insights.length)
  }

  const prevInsight = () => {
    setCurrentInsight((prev) => (prev - 1 + insights.length) % insights.length)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <Button variant="outline" size="icon" onClick={prevInsight}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <p className="text-center px-4">{insights[currentInsight]}</p>
          <Button variant="outline" size="icon" onClick={nextInsight}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

