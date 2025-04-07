"use client"

import { ScrollAnimation } from "@/components/animations/scroll-animation"

interface MapEmbedProps {
  address?: string
  mapUrl: string
  height?: string
  className?: string
  delay?: number
}

export function MapEmbed({ address, mapUrl, height = "300px", className = "", delay = 0 }: MapEmbedProps) {
  return (
    <ScrollAnimation
      variant="fadeIn"
      delay={delay}
      className={`bg-muted rounded-lg overflow-hidden ${className}`}
      style={{ height }}
    >
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing ${address || "location"}`}
        className="rounded-lg"
      ></iframe>
      {address && (
        <div className="sr-only">
          <p>Map showing {address}</p>
        </div>
      )}
    </ScrollAnimation>
  )
}

