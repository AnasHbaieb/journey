import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Expert Journeys - Learn from Industry Leaders",
  description:
    "Discover inspiring professional journeys of industry experts. Learn from their experiences, mistakes, and achievements.",
  keywords: "expert journeys, professional development, career growth, industry leaders",
  openGraph: {
    title: "Expert Journeys - Learn from Industry Leaders",
    description: "Discover inspiring professional journeys of industry experts.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
