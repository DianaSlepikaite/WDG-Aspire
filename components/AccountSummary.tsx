"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const accounts = [
  { name: "Checking", balance: 5000 },
  { name: "Savings", balance: 10000 },
  { name: "Investment", balance: 50000 },
]

const netWorthData = [
  { date: "2023-01-01", value: 60000 },
  { date: "2023-02-01", value: 62000 },
  { date: "2023-03-01", value: 63000 },
  { date: "2023-04-01", value: 64000 },
  { date: "2023-05-01", value: 65000 },
]

export default function AccountSummary() {
  const netWorth = accounts.reduce((sum, account) => sum + account.balance, 0)

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Account Summary & Net Worth</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Accounts</h3>
            <div className="space-y-2">
              {accounts.map((account) => (
                <div
                  key={account.name}
                  className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2 rounded"
                >
                  <span>{account.name}</span>
                  <span className="font-semibold">${account.balance.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="font-bold">Net Worth</span>
                <span className="font-bold text-green-600">${netWorth.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Net Worth Trend</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={netWorthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

