"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { StaggerItem } from "@/components/animations/stagger-item"
import { motion } from "framer-motion"

export function MusicPreview() {
  const featuredReleases = [
    {
      id: "release1",
      title: "Summer Vibes",
      artist: "Artist Name 1",
      image: "/placeholder.svg?height=400&width=400",
      type: "Single",
      link: "/music/summer-vibes",
    },
    {
      id: "release2",
      title: "Urban Dreams",
      artist: "Artist Name 2",
      image: "/placeholder.svg?height=400&width=400",
      type: "EP",
      link: "/music/urban-dreams",
    },
    {
      id: "release3",
      title: "Midnight Tales",
      artist: "Artist Name 3",
      image: "/placeholder.svg?height=400&width=400",
      type: "Album",
      link: "/music/midnight-tales",
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Latest Music</h2>
              <p className="text-muted-foreground">Fresh releases from our talented artists</p>
            </div>
            <Button asChild className="mt-4 md:mt-0">
              <Link href="/music">View All Music</Link>
            </Button>
          </div>
        </FadeIn>

        <StaggerChildren>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReleases.map((release) => (
              <StaggerItem key={release.id}>
                <motion.div whileHover={{ y: -10 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3 }}>
                  <Card className="overflow-hidden">
                    <div className="relative aspect-square group">
                      <Image
                        src={release.image || "/placeholder.svg"}
                        alt={`${release.title} by ${release.artist}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary">{release.type}</Badge>
                      </div>
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link href={release.link}>
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center"
                          >
                            <Play className="h-8 w-8 text-white" fill="white" />
                          </motion.div>
                        </Link>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-1">{release.title}</h3>
                      <p className="text-muted-foreground">{release.artist}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        {/* Featured Music Video */}
        <FadeIn delay={0.4}>
          <div className="mt-16">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Featured Music Video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Featured Video: "Summer Vibes"</h3>
                  <p className="text-lg mb-6">Artist Name 1</p>
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href="/music/videos/summer-vibes">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" fill="white" />
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

