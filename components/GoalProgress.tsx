import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const goals = [
  { name: "Emergency Fund", current: 8000, target: 10000 },
  { name: "Vacation Savings", current: 2000, target: 5000 },
  { name: "New Car", current: 5000, target: 20000 },
]

export default function GoalProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Goal Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal) => (
            <div key={goal.name} className="space-y-2">
              <div className="flex justify-between">
                <span>{goal.name}</span>
                <span>
                  ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                </span>
              </div>
              <Progress
                value={(goal.current / goal.target) * 100}
                className="h-2"
                indicatorClassName={goal.current / goal.target >= 0.8 ? "bg-green-500" : "bg-blue-500"}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

