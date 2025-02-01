"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const challenges = [
  { id: 1, name: "Save $500 this month", progress: 80, reward: "Silver Badge" },
  { id: 2, name: "Track expenses for 30 days", progress: 60, reward: "Gold Badge" },
  { id: 3, name: "Invest in 3 different assets", progress: 33, reward: "Platinum Badge" },
]

export default function ChallengesRewards() {
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([])

  const completeChallenge = (id: number) => {
    if (!completedChallenges.includes(id)) {
      setCompletedChallenges([...completedChallenges, id])
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Challenges & Rewards</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span>{challenge.name}</span>
                <Badge variant="outline">{challenge.reward}</Badge>
              </div>
              <Progress value={challenge.progress} className="h-2" onClick={() => completeChallenge(challenge.id)} />
              {completedChallenges.includes(challenge.id) && (
                <p className="text-green-500 text-sm">Challenge completed!</p>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

