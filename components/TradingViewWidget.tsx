"use client"
import useTradingViewWidget from "@/hooks/useTradingViewWidget"
import { CANDLE_CHART_WIDGET_CONFIG } from "@/lib/constants"
// TradingViewWidget.jsx
import React, { memo } from "react"

interface TradingViewWidgetProps {
  title?: string
  scriptUrl: string
  config: Record<string, unknown>
  height?: number
  className?: string
}

function TradingViewWidget({ title, scriptUrl, config, height = 600, className }: TradingViewWidgetProps) {
  const containerRef = useTradingViewWidget(scriptUrl, config, height)

  return (
    <div className="tradingview-widget-container" ref={containerRef} style={{ height: "100%", width: "100%" }}>
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
    </div>
  )
}

export default memo(TradingViewWidget)
