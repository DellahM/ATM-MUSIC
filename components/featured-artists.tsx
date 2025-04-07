"use client"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HeadingAnimation } from "@/components/animations/heading-animation"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { StaggerScroll } from "@/components/animations/stagger-scroll"
import { StaggerItemScroll } from "@/components/animations/stagger-item-scroll"
import { ImageAnimation } from "@/components/animations/image-animation"
import { motion } from "framer-motion"

export function FeaturedArtists() {
  const artists = [
    {
      name: "Artist Name 1",
      category: "Singer/Songwriter",
      image: "/placeholder.svg?height=400&width=300",
      link: "/artists/artist-1",
    },
    {
      name: "Artist Name 2",
      category: "Producer",
      image: "/placeholder.svg?height=400&width=300",
      link: "/artists/artist-2",
    },
    {
      name: "Artist Name 3",
      category: "Dancer",
      image: "/placeholder.svg?height=400&width=300",
      link: "/artists/artist-3",
    },
    {
      name: "Artist Name 4",
      category: "Actor",
      image: "/placeholder.svg?height=400&width=300",
      link: "/artists/artist-4",
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <ScrollAnimation variant="slideUp">
          <div className="text-center mb-12">
            <HeadingAnimation as="h2" className="text-3xl font-bold mb-4">
              Featured Artists
            </HeadingAnimation>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the faces and voices that define us. Our roster includes talented individuals across various artistic
              disciplines.
            </p>
          </div>
        </ScrollAnimation>

        <StaggerScroll staggerDelay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {artists.map((artist, index) => (
              <StaggerItemScroll key={index} variant="fadeUp">
                <motion.div whileHover={{ y: -10 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3 }}>
                  <Card className="overflow-hidden">
                    <div className="relative h-[300px]">
                      <ImageAnimation
                        src={artist.image || "/placeholder.svg"}
                        alt={artist.name}
                        fill
                        variant="scaleIn"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <ScrollAnimation variant="fadeIn" delay={0.2}>
                        <h3 className="font-bold text-xl mb-1">{artist.name}</h3>
                        <p className="text-muted-foreground mb-4">{artist.category}</p>
                        <Button asChild variant="outline" size="sm">
                          <Link href={artist.link}>View Profile</Link>
                        </Button>
                      </ScrollAnimation>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItemScroll>
            ))}
          </div>
        </StaggerScroll>

        <ScrollAnimation variant="fadeIn" delay={0.6}>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/artists">View All Artists</Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

