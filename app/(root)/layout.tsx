import React from "react"
import Header from "@/components/Header"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen p-4 text-neutral-400">
      <Header />
      <div className="container py-10">{children}</div>
    </main>
  )
}

export default RootLayout
