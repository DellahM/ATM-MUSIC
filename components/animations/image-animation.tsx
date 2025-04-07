"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { CSSProperties } from "react"

interface ImageAnimationProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  style?: CSSProperties
  delay?: number
  variant?: "fadeIn" | "scaleIn" | "slideUp" | "slideLeft" | "slideRight"
}

export function ImageAnimation({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  style,
  delay = 0,
  variant = "fadeIn",
}: ImageAnimationProps) {
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants[variant]}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={`relative ${fill ? "w-full h-full" : ""} ${className}`}
      style={style}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={`${fill ? "object-cover" : ""} ${className}`}
      />
    </motion.div>
  )
}

