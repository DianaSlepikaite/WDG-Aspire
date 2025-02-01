"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import EducationalReels from "./EducationalReels"
import NewsAlerts from "./NewsAlerts"
import LearningStreaks from "./LearningStreaks"

const articles = [
  { id: 1, title: "10 Tips for Saving Money", content: "Lorem ipsum...", category: "Saving" },
  { id: 2, title: "How to Build an Emergency Fund", content: "Lorem ipsum...", category: "Planning" },
  { id: 3, title: "Retirement Planning Guide", content: "Lorem ipsum...", category: "Retirement" },
]

const externalResources = [
  {
    id: 1,
    title: "Investopedia - Financial Terms",
    url: "https://www.investopedia.com/financial-term-dictionary-4769738",
  },
  {
    id: 2,
    title: "Khan Academy - Personal Finance",
    url: "https://www.khanacademy.org/college-careers-more/personal-finance",
  },
  { id: 3, title: "Coursera - Financial Markets", url: "https://www.coursera.org/learn/financial-markets-global" },
]

export default function EducationCenter() {
  const [selectedArticle, setSelectedArticle] = useState(articles[0])

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Financial Education Center</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="reels">
          <TabsList>
            <TabsTrigger value="reels">Educational Reels</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="external">External Resources</TabsTrigger>
            <TabsTrigger value="news">News & Alerts</TabsTrigger>
            <TabsTrigger value="streaks">Learning Streaks</TabsTrigger>
          </TabsList>
          <TabsContent value="reels">
            <EducationalReels />
          </TabsContent>
          <TabsContent value="articles">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ScrollArea className="h-[400px]">
                {articles.map((article) => (
                  <div
                    key={article.id}
                    className={`p-2 cursor-pointer ${article.id === selectedArticle.id ? "bg-blue-100 dark:bg-blue-900" : ""}`}
                    onClick={() => setSelectedArticle(article)}
                  >
                    <h4 className="font-semibold">{article.title}</h4>
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                ))}
              </ScrollArea>
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-2">{selectedArticle.title}</h3>
                <p>{selectedArticle.content}</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="external">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {externalResources.map((resource) => (
                <Card key={resource.id}>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">{resource.title}</h4>
                    <Button variant="outline" asChild>
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        Visit Resource <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="news">
            <NewsAlerts />
          </TabsContent>
          <TabsContent value="streaks">
            <LearningStreaks />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

