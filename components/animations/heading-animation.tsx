"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface HeadingAnimationProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function HeadingAnimation({ children, delay = 0, className = "", as = "h2" }: HeadingAnimationProps) {
  const Component = motion[as]

  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={className}
    >
      {children}
    </Component>
  )
}

