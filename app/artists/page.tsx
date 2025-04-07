import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Our Artists | ATM Music",
  description: "Discover the talented artists managed by ATM Music across music, acting, modeling, and dance.",
}

export default function ArtistsPage() {
  const categories = [
    { id: "music", label: "Music" },
    { id: "acting", label: "Acting" },
    { id: "modeling", label: "Modeling" },
    { id: "dance", label: "Dance" },
  ]

  const artists = {
    music: [
      {
        name: "Artist Name 1",
        specialty: "Singer/Songwriter",
        image: "/placeholder.svg?height=400&width=300",
        link: "/artists/artist-1",
      },
      {
        name: "Artist Name 2",
        specialty: "Producer",
        image: "/placeholder.svg?height=400&width=300",
        link: "/artists/artist-2",
      },
      {
        name: "Artist Name 3",
        specialty: "Rapper",
        image: "/placeholder.svg?height=400&width=300",
        link: "/artists/artist-3",
      },
      {
        name: "Artist Name 4",
        specialty: "DJ",
        image: "/placeholder.svg?height=400&width=300",
        link: "/artists/artist-4",
      },
      {
        name: "Artist Name 5",
        specialty: "Gospel Artist",
        image: "/placeholder.svg?height=400&width=300",
        link: "/artists/artist-5",
      },
      {
        name: "Artist Name 6",
        specialty: "Band",
        image: "/placeholder.svg?height=400&width=300",
        link: "/artists/artist-6",
      },
    ],
    acting: [
      {
        name: "Artist Name 7",
        specialty: "Film Actor",
        image: "/placeholder.svg?height=400&width=300",
        link: "/artists/artist-7",
      },
      {
        name: "Artist Name 8",
        specialty: "Theater Actor",
        image: "/placeholder.svg?height=400&width=300",
        link: "/artists/artist-8",
      },
      {
        name: "Artist Name 9",
        specialty: "Voice Actor",
        image: "/placeholder.svg?height=400&width=300",
        link: "/artists/artist-9",
      },
    ],
    modeling: [
      {
        name: "Artist Name 10",
        specialty: "Fashion Model",
        image: "/placeholder.svg?height=400&width=300",
        link: "/artists/artist-10",
      },
      {
        name: "Artist Name 11",
        specialty: "Commercial Model",
        image: "/placeholder.svg?height=400&width=300",
        link: "/artists/artist-11",
      },
    ],
    dance: [
      {
        name: "Artist Name 12",
        specialty: "Contemporary Dancer",
        image: "/placeholder.svg?height=400&width=300",
        link: "/artists/artist-12",
      },
      {
        name: "Artist Name 13",
        specialty: "Hip Hop Dancer",
        image: "/placeholder.svg?height=400&width=300",
        link: "/artists/artist-13",
      },
      {
        name: "Artist Name 14",
        specialty: "Traditional Dancer",
        image: "/placeholder.svg?height=400&width=300",
        link: "/artists/artist-14",
      },
    ],
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Artists & Talents</h1>
            <p className="text-lg text-muted-foreground">
              Meet the faces and voices that define us. Our roster includes talented individuals across various artistic
              disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Artists Categories */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="music" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {artists[category.id].map((artist, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-[400px]">
                        <Image
                          src={artist.image || "/placeholder.svg"}
                          alt={artist.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6 text-center">
                        <h3 className="font-bold text-xl mb-1">{artist.name}</h3>
                        <p className="text-muted-foreground mb-4">{artist.specialty}</p>
                        <Button asChild>
                          <Link href={artist.link}>View Profile</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Artist Spotlight */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Artist Spotlight</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each month, we highlight one of our exceptional talents. Get to know them better through exclusive content
              and interviews.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Spotlight Artist"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Artist Name</h3>
              <p className="text-primary font-medium mb-4">Singer/Songwriter</p>
              <p className="text-muted-foreground mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
                nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
              <p className="text-muted-foreground mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/artists/spotlight">Read Full Interview</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/music">Listen to Music</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

