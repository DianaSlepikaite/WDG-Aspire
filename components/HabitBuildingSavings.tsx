"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const savingHabits = [
  {
    id: 1,
    name: "Make your own lunch",
    description: "Save money by preparing your own meals",
    streakDays: 0,
    reward: "10% off at local grocery store",
  },
  {
    id: 2,
    name: "No-spend weekends",
    description: "Avoid unnecessary spending on weekends",
    streakDays: 0,
    reward: "Free movie tickets",
  },
  {
    id: 3,
    name: "Use public transport",
    description: "Save on gas and parking fees",
    streakDays: 0,
    reward: "50% off next month's transit pass",
  },
]

export default function HabitBuildingSavings() {
  const [habits, setHabits] = useState(savingHabits)

  const incrementStreak = (id: number) => {
    setHabits(habits.map((habit) => (habit.id === id ? { ...habit, streakDays: habit.streakDays + 1 } : habit)))
  }

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Habit Building & Savings Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {habits.map((habit) => (
            <Card key={habit.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{habit.name}</h3>
                  <Badge variant="outline">Streak: {habit.streakDays} days</Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{habit.description}</p>
                <Progress value={(habit.streakDays / 30) * 100} className="mb-2" />
                <div className="flex justify-between items-center">
                  <span className="text-sm">Reward: {habit.reward}</span>
                  <Button onClick={() => incrementStreak(habit.id)} size="sm">
                    Log Today
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

