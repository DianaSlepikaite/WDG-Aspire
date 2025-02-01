import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Personal Finance Manager",
  description: "Manage your finances with ease",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container mx-auto px-4 py-8">{children}</div>
      </body>
    </html>
  )
}

