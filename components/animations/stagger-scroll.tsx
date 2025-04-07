"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggerScrollProps {
  children: ReactNode
  delay?: number
  staggerDelay?: number
  className?: string
  once?: boolean
  amount?: number | "some" | "all"
}

export function StaggerScroll({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = "",
  once = true,
  amount = 0.3,
}: StaggerScrollProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

