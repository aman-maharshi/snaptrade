import TradingViewWidget from "@/components/TradingViewWidget"
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants"
import React from "react"

const Home = () => {
  return (
    <div className="flex min-h-screen text-neutral-400 flex-col gap-4 md:gap-10 items-center sm:items-start">
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title="Market Overview"
            scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            height={600}
            className="custom-chart"
          />
        </div>
      </section>
    </div>
  )
}

export default Home
