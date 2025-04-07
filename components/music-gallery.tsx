import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverCard } from "@/components/animations/hover-card"

export function MusicGallery() {
  const musicCategories = [
    { id: "all", label: "All Genres" },
    { id: "afrobeats", label: "Afrobeats" },
    { id: "hiphop", label: "Hip Hop" },
    { id: "rnb", label: "R&B" },
    { id: "gospel", label: "Gospel" },
  ]

  const musicItems = {
    all: [
      {
        id: "song1",
        title: "Summer Vibes",
        artist: "Artist Name 1",
        image: "/placeholder.svg?height=400&width=400",
        category: "afrobeats",
        streamingLinks: {
          spotify: "https://open.spotify.com",
          apple: "https://music.apple.com",
          youtube: "https://youtube.com",
          audiomack: "https://audiomack.com",
        },
      },
      {
        id: "song2",
        title: "City Lights",
        artist: "Artist Name 2",
        image: "/placeholder.svg?height=400&width=400",
        category: "hiphop",
        streamingLinks: {
          spotify: "https://open.spotify.com",
          apple: "https://music.apple.com",
          youtube: "https://youtube.com",
          audiomack: "https://audiomack.com",
        },
      },
      {
        id: "song3",
        title: "Midnight Dreams",
        artist: "Artist Name 3",
        image: "/placeholder.svg?height=400&width=400",
        category: "rnb",
        streamingLinks: {
          spotify: "https://open.spotify.com",
          apple: "https://music.apple.com",
          youtube: "https://youtube.com",
          audiomack: "https://audiomack.com",
        },
      },
      {
        id: "song4",
        title: "Higher Ground",
        artist: "Artist Name 4",
        image: "/placeholder.svg?height=400&width=400",
        category: "gospel",
        streamingLinks: {
          spotify: "https://open.spotify.com",
          apple: "https://music.apple.com",
          youtube: "https://youtube.com",
          audiomack: "https://audiomack.com",
        },
      },
      {
        id: "song5",
        title: "Dance All Night",
        artist: "Artist Name 1 ft. Artist Name 2",
        image: "/placeholder.svg?height=400&width=400",
        category: "afrobeats",
        streamingLinks: {
          spotify: "https://open.spotify.com",
          apple: "https://music.apple.com",
          youtube: "https://youtube.com",
          audiomack: "https://audiomack.com",
        },
      },
      {
        id: "song6",
        title: "Street Stories",
        artist: "Artist Name 5",
        image: "/placeholder.svg?height=400&width=400",
        category: "hiphop",
        streamingLinks: {
          spotify: "https://open.spotify.com",
          apple: "https://music.apple.com",
          youtube: "https://youtube.com",
          audiomack: "https://audiomack.com",
        },
      },
      {
        id: "song7",
        title: "Love & Light",
        artist: "Artist Name 6",
        image: "/placeholder.svg?height=400&width=400",
        category: "gospel",
        streamingLinks: {
          spotify: "https://open.spotify.com",
          apple: "https://music.apple.com",
          youtube: "https://youtube.com",
          audiomack: "https://audiomack.com",
        },
      },
      {
        id: "song8",
        title: "Slow Motion",
        artist: "Artist Name 3 ft. Artist Name 7",
        image: "/placeholder.svg?height=400&width=400",
        category: "rnb",
        streamingLinks: {
          spotify: "https://open.spotify.com",
          apple: "https://music.apple.com",
          youtube: "https://youtube.com",
          audiomack: "https://audiomack.com",
        },
      },
    ],
    afrobeats: [],
    hiphop: [],
    rnb: [],
    gospel: [],
  }

  // Populate category-specific arrays
  musicCategories.forEach((category) => {
    if (category.id !== "all") {
      musicItems[category.id] = musicItems.all.filter((item) => item.category === category.id)
    }
  })

  return (
    <section className="py-16">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Music Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse catalog of music across different genres. Stream on your favorite platform.
            </p>
          </div>
        </FadeIn>

        <Tabs defaultValue="all" className="w-full">
          <FadeIn delay={0.2}>
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-2xl">
                {musicCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </FadeIn>

          {musicCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <StaggerChildren>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {musicItems[category.id].map((item) => (
                    <StaggerItem key={item.id}>
                      <HoverCard>
                        <Card className="overflow-hidden">
                          <div className="relative aspect-square">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={`${item.title} by ${item.artist}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                            <p className="text-muted-foreground mb-4">{item.artist}</p>
                            <div className="flex flex-wrap gap-2">
                              <Button asChild size="sm" variant="outline" className="flex-1">
                                <Link href={item.streamingLinks.spotify} target="_blank" rel="noopener noreferrer">
                                  Spotify
                                </Link>
                              </Button>
                              <Button asChild size="sm" variant="outline" className="flex-1">
                                <Link href={item.streamingLinks.apple} target="_blank" rel="noopener noreferrer">
                                  Apple
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
            </TabsContent>
          ))}
        </Tabs>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/music/all">View Full Catalog</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

