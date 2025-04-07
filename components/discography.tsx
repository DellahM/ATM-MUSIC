import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverCard } from "@/components/animations/hover-card"

export function Discography() {
  const artists = [
    { id: "artist1", name: "Artist Name 1" },
    { id: "artist2", name: "Artist Name 2" },
    { id: "artist3", name: "Artist Name 3" },
  ]

  const discography = {
    artist1: [
      {
        id: "album1",
        title: "Urban Dreams",
        releaseYear: "2023",
        image: "/placeholder.svg?height=400&width=400",
        type: "Album",
        tracks: 12,
        link: "/music/artist1/urban-dreams",
      },
      {
        id: "album2",
        title: "City Lights",
        releaseYear: "2022",
        image: "/placeholder.svg?height=400&width=400",
        type: "EP",
        tracks: 6,
        link: "/music/artist1/city-lights",
      },
      {
        id: "album3",
        title: "First Steps",
        releaseYear: "2021",
        image: "/placeholder.svg?height=400&width=400",
        type: "Album",
        tracks: 10,
        link: "/music/artist1/first-steps",
      },
    ],
    artist2: [
      {
        id: "album4",
        title: "Midnight Tales",
        releaseYear: "2023",
        image: "/placeholder.svg?height=400&width=400",
        type: "Album",
        tracks: 14,
        link: "/music/artist2/midnight-tales",
      },
      {
        id: "album5",
        title: "Summer Vibes",
        releaseYear: "2022",
        image: "/placeholder.svg?height=400&width=400",
        type: "Single",
        tracks: 1,
        link: "/music/artist2/summer-vibes",
      },
      {
        id: "album6",
        title: "New Beginnings",
        releaseYear: "2021",
        image: "/placeholder.svg?height=400&width=400",
        type: "EP",
        tracks: 5,
        link: "/music/artist2/new-beginnings",
      },
    ],
    artist3: [
      {
        id: "album7",
        title: "Reflections",
        releaseYear: "2023",
        image: "/placeholder.svg?height=400&width=400",
        type: "Album",
        tracks: 11,
        link: "/music/artist3/reflections",
      },
      {
        id: "album8",
        title: "Acoustic Sessions",
        releaseYear: "2022",
        image: "/placeholder.svg?height=400&width=400",
        type: "EP",
        tracks: 7,
        link: "/music/artist3/acoustic-sessions",
      },
      {
        id: "album9",
        title: "Debut",
        releaseYear: "2020",
        image: "/placeholder.svg?height=400&width=400",
        type: "Album",
        tracks: 9,
        link: "/music/artist3/debut",
      },
    ],
  }

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Discography</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the complete catalog of albums, EPs, and singles from our artists.
            </p>
          </div>
        </FadeIn>

        <Tabs defaultValue="artist1" className="w-full">
          <FadeIn delay={0.2}>
            <div className="flex justify-center mb-12">
              <TabsList>
                {artists.map((artist) => (
                  <TabsTrigger key={artist.id} value={artist.id}>
                    {artist.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </FadeIn>

          {artists.map((artist) => (
            <TabsContent key={artist.id} value={artist.id}>
              <StaggerChildren>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {discography[artist.id].map((album) => (
                    <StaggerItem key={album.id}>
                      <HoverCard>
                        <Card className="overflow-hidden">
                          <div className="relative aspect-square">
                            <Image
                              src={album.image || "/placeholder.svg"}
                              alt={album.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-2 right-2">
                              <Badge variant="secondary">{album.type}</Badge>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-bold text-lg mb-1">{album.title}</h3>
                            <div className="flex justify-between mb-4">
                              <span className="text-muted-foreground">{album.releaseYear}</span>
                              <span className="text-muted-foreground">{album.tracks} tracks</span>
                            </div>
                            <Button asChild variant="outline" className="w-full">
                              <Link href={album.link}>View Details</Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </HoverCard>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerChildren>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

