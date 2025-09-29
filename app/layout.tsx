import type { Metadata } from "next"
import { Barlow } from "next/font/google"
import "./globals.css"

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "SnapTrade",
  description: "Track real-time stock prices, get personalized alerts and explore detailed company insights."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${barlow.className} antialiased`}>{children}</body>
    </html>
  )
}
