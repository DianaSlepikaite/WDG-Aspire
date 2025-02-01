"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FinancialAIAdvisor() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }])
      // Here you would typically send the message to your AI service and get a response
      // For this example, we'll just echo the user's message
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "assistant", content: `AI response to: ${input}` }])
      }, 500)
      setInput("")
    }
  }

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Financial AI Advisor</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="chat">
          <TabsList>
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="roadmap">Financial Roadmap</TabsTrigger>
            <TabsTrigger value="forecast">Portfolio Forecast</TabsTrigger>
          </TabsList>
          <TabsContent value="chat">
            <ScrollArea className="h-[300px] mb-4">
              {messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.role === "user" ? "text-right" : "text-left"}`}>
                  <span
                    className={`inline-block p-2 rounded-lg ${message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
                  >
                    {message.content}
                  </span>
                </div>
              ))}
            </ScrollArea>
            <div className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about your finances..."
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend}>Send</Button>
            </div>
          </TabsContent>
          <TabsContent value="roadmap">
            <p>
              Your personalized financial roadmap will be displayed here, based on your goals and current financial
              situation.
            </p>
          </TabsContent>
          <TabsContent value="forecast">
            <p>Your portfolio forecast and alerts for potential financial actions will be shown here.</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

