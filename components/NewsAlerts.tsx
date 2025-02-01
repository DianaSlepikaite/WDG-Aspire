"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const newsItems = [
  {
    id: 1,
    title: "Federal Reserve Announces Interest Rate Hike",
    summary:
      "The Federal Reserve has raised interest rates by 0.25%. This could affect mortgage rates and savings account yields.",
    category: "Economic Policy",
    date: "2023-06-15",
  },
  {
    id: 2,
    title: "New Tax Law Passed: What It Means for You",
    summary: "A new tax law has been passed that could affect your deductions. Key changes include...",
    category: "Legislation",
    date: "2023-06-10",
  },
  {
    id: 3,
    title: "Stock Market Reacts to Global Trade Tensions",
    summary: "Global trade tensions have caused volatility in the stock market. Here's what you need to know...",
    category: "Market News",
    date: "2023-06-05",
  },
]

export default function NewsAlerts() {
  const [selectedNews, setSelectedNews] = useState(newsItems[0])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Recent News</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className={`p-2 cursor-pointer ${item.id === selectedNews.id ? "bg-blue-100 dark:bg-blue-900" : ""}`}
                onClick={() => setSelectedNews(item)}
              >
                <h4 className="font-semibold">{item.title}</h4>
                <div className="flex justify-between items-center mt-1">
                  <Badge variant="secondary">{item.category}</Badge>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>{selectedNews.title}</CardTitle>
          <Badge variant="outline">{selectedNews.category}</Badge>
        </CardHeader>
        <CardContent>
          <p>{selectedNews.summary}</p>
          <h4 className="font-semibold mt-4">Potential Impact:</h4>
          <ul className="list-disc list-inside">
            <li>Effect on personal finances</li>
            <li>Changes in investment strategy</li>
            <li>Adjustments to financial planning</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

