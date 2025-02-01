import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const expenses = [
  { id: 1, date: "2023-05-01", category: "Food", amount: 50 },
  { id: 2, date: "2023-05-02", category: "Transportation", amount: 30 },
  { id: 3, date: "2023-05-03", category: "Entertainment", amount: 80 },
  { id: 4, date: "2023-05-04", category: "Housing", amount: 1000 },
  { id: 5, date: "2023-05-05", category: "Other", amount: 40 },
]

export default function ExpenseList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>{expense.date}</TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell className="text-right">${expense.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

