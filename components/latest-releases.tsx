import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverCard } from "@/components/animations/hover-card"

export function LatestReleases() {
  const releases = [
    {
      id: "release1",
      title: "Summer Vibes",
      artist: "Artist Name 1",
      releaseDate: "July 10, 2023",
      image: "/placeholder.svg?height=400&width=400",
      type: "Single",
      streamingLink: "/music/summer-vibes",
    },
    {
      id: "release2",
      title: "Urban Dreams",
      artist: "Artist Name 2",
      releaseDate: "June 25, 2023",
      image: "/placeholder.svg?height=400&width=400",
      type: "EP",
      streamingLink: "/music/urban-dreams",
    },
    {
      id: "release3",
      title: "Midnight Tales",
      artist: "Artist Name 3",
      releaseDate: "June 15, 2023",
      image: "/placeholder.svg?height=400&width=400",
      type: "Album",
      streamingLink: "/music/midnight-tales",
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Releases</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out the newest music from our talented artists.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {releases.map((release) => (
              <StaggerItem key={release.id}>
                <HoverCard>
                  <Card className="overflow-hidden">
                    <div className="relative aspect-square">
                      <Image
                        src={release.image || "/placeholder.svg"}
                        alt={`${release.title} by ${release.artist}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary">{release.type}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-1">{release.title}</h3>
                      <p className="text-primary font-medium mb-1">{release.artist}</p>
                      <p className="text-sm text-muted-foreground mb-4">Released: {release.releaseDate}</p>
                      <Button asChild className="w-full">
                        <Link href={release.streamingLink}>Stream Now</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </HoverCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}

