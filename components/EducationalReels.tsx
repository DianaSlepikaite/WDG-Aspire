"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const reels = [
  { id: 1, title: "Understanding Compound Interest", videoUrl: "https://example.com/video1.mp4" },
  { id: 2, title: "The Power of Dollar-Cost Averaging", videoUrl: "https://example.com/video2.mp4" },
  { id: 3, title: "How to Read a Stock Chart", videoUrl: "https://example.com/video3.mp4" },
]

export default function EducationalReels() {
  const [currentReelIndex, setCurrentReelIndex] = useState(0)

  const nextReel = () => {
    setCurrentReelIndex((prev) => (prev + 1) % reels.length)
  }

  const prevReel = () => {
    setCurrentReelIndex((prev) => (prev - 1 + reels.length) % reels.length)
  }

  const currentReel = reels[currentReelIndex]

  return (
    <Card>
      <CardContent className="p-4">
        <div className="aspect-w-9 aspect-h-16 mb-4">
          <video src={currentReel.videoUrl} controls className="w-full h-full object-cover rounded-lg" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{currentReel.title}</h3>
        <div className="flex justify-between">
          <Button onClick={prevReel} variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button onClick={nextReel} variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

