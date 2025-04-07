import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverCard } from "@/components/animations/hover-card"
import { ScaleIn } from "@/components/animations/scale-in"

export function FeaturedPlaylists() {
  const playlists = [
    {
      id: "playlist1",
      title: "ATM Summer Hits",
      description: "The hottest tracks from our artists to soundtrack your summer.",
      image: "/placeholder.svg?height=400&width=400",
      tracks: 15,
      spotifyLink: "https://open.spotify.com",
      appleMusicLink: "https://music.apple.com",
    },
    {
      id: "playlist2",
      title: "Afrobeats Essentials",
      description: "The best Afrobeats tracks from our roster of talented artists.",
      image: "/placeholder.svg?height=400&width=400",
      tracks: 20,
      spotifyLink: "https://open.spotify.com",
      appleMusicLink: "https://music.apple.com",
    },
    {
      id: "playlist3",
      title: "Chill & Vibe",
      description: "Relaxing tracks perfect for unwinding after a long day.",
      image: "/placeholder.svg?height=400&width=400",
      tracks: 18,
      spotifyLink: "https://open.spotify.com",
      appleMusicLink: "https://music.apple.com",
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Playlists</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Curated collections of music from our artists and beyond.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {playlists.map((playlist) => (
              <StaggerItem key={playlist.id}>
                <HoverCard>
                  <Card className="overflow-hidden">
                    <div className="relative aspect-square">
                      <Image
                        src={playlist.image || "/placeholder.svg"}
                        alt={playlist.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-1">{playlist.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{playlist.tracks} tracks</p>
                      <p className="text-muted-foreground mb-4">{playlist.description}</p>
                      <div className="flex gap-4">
                        <Button asChild variant="outline" className="flex-1">
                          <Link href={playlist.spotifyLink} target="_blank" rel="noopener noreferrer">
                            <span className="flex items-center">
                              Spotify
                              <ExternalLink className="ml-1 h-4 w-4" />
                            </span>
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="flex-1">
                          <Link href={playlist.appleMusicLink} target="_blank" rel="noopener noreferrer">
                            <span className="flex items-center">
                              Apple Music
                              <ExternalLink className="ml-1 h-4 w-4" />
                            </span>
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        {/* Embedded Spotify Playlist */}
        <ScaleIn delay={0.4}>
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">ATM Music Spotlight</h3>
              <p className="text-muted-foreground">Our featured playlist updated weekly with the best new music.</p>
            </div>
            <div className="max-w-3xl mx-auto aspect-[4/3] md:aspect-[3/2] lg:aspect-[2/1] bg-muted rounded-lg overflow-hidden">
              {/* This would be replaced with an actual Spotify embed */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground">Spotify Playlist Embed</p>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  )
}

