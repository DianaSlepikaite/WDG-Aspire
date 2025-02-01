import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function GoalList() {
  // In a real app, this data would come from an API or database
  const goals = [
    { id: 1, name: "Emergency Fund", current: 8000, target: 10000, deadline: "2023-12-31" },
    { id: 2, name: "Vacation Savings", current: 2000, target: 5000, deadline: "2024-06-30" },
    { id: 3, name: "New Car", current: 5000, target: 20000, deadline: "2025-12-31" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Goals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal) => (
            <div key={goal.id} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold">{goal.name}</span>
                <span>
                  ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                </span>
              </div>
              <Progress value={(goal.current / goal.target) * 100} />
              <div className="text-sm text-gray-500">Deadline: {new Date(goal.deadline).toLocaleDateString()}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

