"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type AnimationVariant = "fadeIn" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scale" | "flip" | "rotate"

interface ScrollAnimationProps {
  children: ReactNode
  variant?: AnimationVariant
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  amount?: number | "some" | "all"
}

export function ScrollAnimation({
  children,
  variant = "fadeIn",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  amount = 0.3,
}: ScrollAnimationProps) {
  const variants = {
    hidden: {
      fadeIn: { opacity: 0 },
      slideUp: { opacity: 0, y: 75 },
      slideDown: { opacity: 0, y: -75 },
      slideLeft: { opacity: 0, x: 75 },
      slideRight: { opacity: 0, x: -75 },
      scale: { opacity: 0, scale: 0.85 },
      flip: { opacity: 0, rotateY: 90 },
      rotate: { opacity: 0, rotate: 15 },
    },
    visible: {
      fadeIn: { opacity: 1 },
      slideUp: { opacity: 1, y: 0 },
      slideDown: { opacity: 1, y: 0 },
      slideLeft: { opacity: 1, x: 0 },
      slideRight: { opacity: 1, x: 0 },
      scale: { opacity: 1, scale: 1 },
      flip: { opacity: 1, rotateY: 0 },
      rotate: { opacity: 1, rotate: 0 },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: variants.hidden[variant],
        visible: {
          ...variants.visible[variant],
          transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier for a smooth, natural feel
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

