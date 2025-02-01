"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const learningChallenges = [
  { id: 1, name: "Complete 5 Educational Reels", progress: 3, total: 5, reward: "Financial Novice Badge" },
  { id: 2, name: "Read 10 Financial Articles", progress: 7, total: 10, reward: "Informed Investor Badge" },
  { id: 3, name: "30-Day Learning Streak", progress: 15, total: 30, reward: "Financial Guru Badge" },
]

export default function LearningStreaks() {
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([])

  const completeChallenge = (id: number) => {
    if (!completedChallenges.includes(id)) {
      setCompletedChallenges([...completedChallenges, id])
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Learning Streaks & Rewards</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {learningChallenges.map((challenge) => (
            <div key={challenge.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span>{challenge.name}</span>
                <Badge variant="outline">{challenge.reward}</Badge>
              </div>
              <Progress
                value={(challenge.progress / challenge.total) * 100}
                className="h-2"
                onClick={() => completeChallenge(challenge.id)}
              />
              <div className="flex justify-between text-sm">
                <span>
                  {challenge.progress} / {challenge.total} completed
                </span>
                {completedChallenges.includes(challenge.id) && (
                  <span className="text-green-500">Challenge completed!</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

