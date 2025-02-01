import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const investments = [
  { id: 1, name: "AAPL", type: "Stock", quantity: 10, price: 150, value: 1500 },
  { id: 2, name: "GOOGL", type: "Stock", quantity: 5, price: 2500, value: 12500 },
  { id: 3, name: "US Treasury Bond", type: "Bond", quantity: 1, price: 1000, value: 1000 },
  { id: 4, name: "REIT Fund", type: "Real Estate", quantity: 100, price: 20, value: 2000 },
  { id: 5, name: "Bitcoin", type: "Crypto", quantity: 0.05, price: 20000, value: 1000 },
]

export default function InvestmentList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Investment Holdings</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {investments.map((investment) => (
              <TableRow key={investment.id}>
                <TableCell>{investment.name}</TableCell>
                <TableCell>{investment.type}</TableCell>
                <TableCell>{investment.quantity}</TableCell>
                <TableCell>${investment.price}</TableCell>
                <TableCell className="text-right">${investment.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

