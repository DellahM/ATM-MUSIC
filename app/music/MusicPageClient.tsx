"use client"

import { MusicGallery } from "@/components/music-gallery"
import { VideoShowcase } from "@/components/video-showcase"
import { LatestReleases } from "@/components/latest-releases"
import { FeaturedPlaylists } from "@/components/featured-playlists"
import { Discography } from "@/components/discography"
import { motion } from "framer-motion"

export default function MusicPageClient() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div className="w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"></div>
        </div>

        {/* Content */}
        <div className="container relative z-20 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Music & Media
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Discover the sounds and visuals that define ATM Music. Stream our latest releases, watch music videos, and
            explore our artists' discographies.
          </motion.p>
        </div>
      </section>

      {/* Latest Releases Section */}
      <LatestReleases />

      {/* Music Gallery Section */}
      <MusicGallery />

      {/* Video Showcase Section */}
      <VideoShowcase />

      {/* Featured Playlists Section */}
      <FeaturedPlaylists />

      {/* Discography Section */}
      <Discography />
    </div>
  )
}

