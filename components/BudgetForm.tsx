"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function BudgetForm() {
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the data to an API or database
    console.log("New budget category:", { category, amount })
    // Reset form
    setCategory("")
    setAmount("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Budget Category</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category Name
            </label>
            <Input id="category" type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Budget Amount ($)
            </label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min="0"
            />
          </div>
          <Button type="submit">Add Category</Button>
        </form>
      </CardContent>
    </Card>
  )
}

