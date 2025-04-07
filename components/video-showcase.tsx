"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { Play } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { StaggerItem } from "@/components/animations/stagger-item"
import { motion } from "framer-motion"

export function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<null | {
    id: string
    title: string
    artist: string
    thumbnail: string
    videoId: string
  }>(null)

  const videos = [
    {
      id: "video1",
      title: "Summer Vibes",
      artist: "Artist Name 1",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      videoId: "dQw4w9WgXcQ", // Example YouTube video ID
    },
    {
      id: "video2",
      title: "City Lights",
      artist: "Artist Name 2",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: "video3",
      title: "Midnight Dreams",
      artist: "Artist Name 3",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: "video4",
      title: "Dance All Night",
      artist: "Artist Name 1 ft. Artist Name 2",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      videoId: "dQw4w9WgXcQ",
    },
  ]

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Video Showcase</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch music videos, live performances, and behind-the-scenes content from our artists.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <StaggerItem key={video.id}>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3 }}>
                  <Card className="overflow-hidden cursor-pointer group" onClick={() => setSelectedVideo(video)}>
                    <div className="relative aspect-video">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={`${video.title} by ${video.artist}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center"
                        >
                          <Play className="h-8 w-8 text-white" fill="white" />
                        </motion.div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-1">{video.title}</h3>
                      <p className="text-muted-foreground">{video.artist}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            <DialogHeader className="p-4">
              <DialogTitle>
                {selectedVideo?.title} - {selectedVideo?.artist}
              </DialogTitle>
            </DialogHeader>
            <div className="aspect-video w-full">
              {selectedVideo && (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                  title={`${selectedVideo.title} by ${selectedVideo.artist}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

