"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface HoverCardProps {
  children: ReactNode
  className?: string
}

export function HoverCard({ children, className = "" }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.2 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

