"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggerItemScrollProps {
  children: ReactNode
  className?: string
  variant?: "fadeUp" | "fadeIn" | "scale" | "slideLeft" | "slideRight"
}

export function StaggerItemScroll({ children, className = "", variant = "fadeUp" }: StaggerItemScrollProps) {
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
  }

  return (
    <motion.div variants={variants[variant]} className={className}>
      {children}
    </motion.div>
  )
}

