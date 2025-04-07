import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GalleryGrid } from "@/components/gallery-grid"

export const metadata = {
  title: "Gallery | ATM Music",
  description: "Browse photos and videos from ATM Music artists, performances, studio sessions, and events.",
}

export default function GalleryPage() {
  // Gallery categories
  const categories = [
    { id: "all", label: "All" },
    { id: "performances", label: "Performances" },
    { id: "studio", label: "Studio Sessions" },
    { id: "events", label: "Events" },
    { id: "behind-scenes", label: "Behind the Scenes" },
  ]

  // Gallery items
  const galleryItems = {
    all: [
      // Performances
      {
        id: "perf1",
        category: "performances",
        title: "Summer Concert Series",
        description: "Live performance at Nairobi National Park",
        image: "/placeholder.svg?height=600&width=800",
        date: "July 15, 2023",
      },
      {
        id: "perf2",
        category: "performances",
        title: "Album Launch Party",
        description: "Artist performing at album release event",
        image: "/placeholder.svg?height=600&width=800",
        date: "August 5, 2023",
      },
      {
        id: "perf3",
        category: "performances",
        title: "Music Festival",
        description: "Main stage performance at annual music festival",
        image: "/placeholder.svg?height=800&width=600",
        date: "June 22, 2023",
      },
      {
        id: "perf4",
        category: "performances",
        title: "Acoustic Set",
        description: "Intimate acoustic performance at local venue",
        image: "/placeholder.svg?height=600&width=800",
        date: "May 10, 2023",
      },

      // Studio Sessions
      {
        id: "studio1",
        category: "studio",
        title: "Recording Session",
        description: "Artist recording vocals in the studio",
        image: "/placeholder.svg?height=600&width=800",
        date: "April 18, 2023",
      },
      {
        id: "studio2",
        category: "studio",
        title: "Mixing Session",
        description: "Producer working on new track",
        image: "/placeholder.svg?height=800&width=600",
        date: "March 25, 2023",
      },
      {
        id: "studio3",
        category: "studio",
        title: "Collaboration Session",
        description: "Artists collaborating on new music",
        image: "/placeholder.svg?height=600&width=800",
        date: "February 12, 2023",
      },
      {
        id: "studio4",
        category: "studio",
        title: "Production Meeting",
        description: "Team discussing upcoming project",
        image: "/placeholder.svg?height=600&width=800",
        date: "January 30, 2023",
      },

      // Events
      {
        id: "event1",
        category: "events",
        title: "Industry Networking Event",
        description: "Artists and industry professionals networking",
        image: "/placeholder.svg?height=600&width=800",
        date: "July 8, 2023",
      },
      {
        id: "event2",
        category: "events",
        title: "Award Ceremony",
        description: "Artist receiving award for outstanding contribution",
        image: "/placeholder.svg?height=600&width=800",
        date: "June 15, 2023",
      },
      {
        id: "event3",
        category: "events",
        title: "Press Conference",
        description: "Announcing new talent signing",
        image: "/placeholder.svg?height=800&width=600",
        date: "May 22, 2023",
      },
      {
        id: "event4",
        category: "events",
        title: "Charity Gala",
        description: "Fundraising event with performances",
        image: "/placeholder.svg?height=600&width=800",
        date: "April 10, 2023",
      },

      // Behind the Scenes
      {
        id: "bts1",
        category: "behind-scenes",
        title: "Tour Bus Life",
        description: "Artists relaxing between shows",
        image: "/placeholder.svg?height=600&width=800",
        date: "July 20, 2023",
      },
      {
        id: "bts2",
        category: "behind-scenes",
        title: "Rehearsal Session",
        description: "Band rehearsing for upcoming tour",
        image: "/placeholder.svg?height=800&width=600",
        date: "June 28, 2023",
      },
      {
        id: "bts3",
        category: "behind-scenes",
        title: "Photoshoot",
        description: "Artist during promotional photoshoot",
        image: "/placeholder.svg?height=600&width=800",
        date: "May 15, 2023",
      },
      {
        id: "bts4",
        category: "behind-scenes",
        title: "Video Shoot",
        description: "Behind the scenes of music video production",
        image: "/placeholder.svg?height=600&width=800",
        date: "April 5, 2023",
      },
    ],
    performances: [],
    studio: [],
    events: [],
    "behind-scenes": [],
  }

  // Populate category-specific arrays
  categories.forEach((category) => {
    if (category.id !== "all") {
      galleryItems[category.id] = galleryItems.all.filter((item) => item.category === category.id)
    }
  })

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Gallery</h1>
            <p className="text-lg text-muted-foreground">
              Explore photos and videos from our artists' performances, studio sessions, events, and behind-the-scenes
              moments.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-2xl">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <GalleryGrid items={galleryItems[category.id]} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Video</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out this highlight reel from our recent summer concert series.
            </p>
          </div>

          <div className="max-w-4xl mx-auto aspect-video bg-black/10 rounded-lg overflow-hidden">
            {/* Replace with actual video embed */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground">Video Player Embed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Your Photos Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-muted-foreground mb-8">
              Were you at one of our events? Share your photos with us by tagging #ATMMusic on social media or sending
              them directly to our email.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold">@atmmusic</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold">#ATMMusic</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

