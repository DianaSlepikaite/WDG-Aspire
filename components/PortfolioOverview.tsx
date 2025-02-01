"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { date: "2023-01-01", value: 10000 },
  { date: "2023-02-01", value: 11000 },
  { date: "2023-03-01", value: 10500 },
  { date: "2023-04-01", value: 12000 },
  { date: "2023-05-01", value: 13000 },
]

export default function PortfolioOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Value Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold">Current Value: $13,000</p>
          <p className="text-sm text-green-600">+30% since inception</p>
        </div>
      </CardContent>
    </Card>
  )
}

