import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Music, Award } from "lucide-react"
import { EventTimeline } from "@/components/event-timeline"

export const metadata = {
  title: "Events | ATM Music",
  description: "Upcoming and past events from ATM Music, including concerts, album launches, workshops, and more.",
}

export default function EventsPage() {
  // Upcoming events
  const upcomingEvents = [
    {
      id: "event1",
      title: "Summer Concert Series",
      date: "July 15, 2023",
      time: "7:00 PM - 11:00 PM",
      location: "Nairobi National Park",
      image: "/placeholder.svg?height=400&width=600",
      description: "Join us for an unforgettable night of music under the stars featuring our top artists.",
      ticketLink: "/events/summer-concert/tickets",
      featured: true,
      artists: ["Artist Name 1", "Artist Name 2", "Artist Name 3"],
    },
    {
      id: "event2",
      title: "Album Launch Party",
      date: "August 5, 2023",
      time: "8:00 PM - 1:00 AM",
      location: "The Alchemist Bar, Westlands",
      image: "/placeholder.svg?height=400&width=600",
      description: "Be the first to hear the new album from our rising star. VIP tickets include meet and greet.",
      ticketLink: "/events/album-launch/tickets",
      featured: false,
      artists: ["Artist Name 4"],
    },
    {
      id: "event3",
      title: "Music Workshop",
      date: "August 20, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "ATM Studios, Ruaka",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Learn from industry professionals in this hands-on workshop covering production, songwriting, and performance.",
      ticketLink: "/events/music-workshop/tickets",
      featured: false,
      artists: ["Artist Name 5", "Artist Name 6"],
    },
    {
      id: "event4",
      title: "Industry Networking Night",
      date: "September 10, 2023",
      time: "6:00 PM - 9:00 PM",
      location: "Kiza Lounge, Kilimani",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Connect with music industry professionals, artists, and producers in this exclusive networking event.",
      ticketLink: "/events/networking-night/tickets",
      featured: false,
      artists: [],
    },
  ]

  // Past events with highlights
  const pastEvents = [
    {
      id: "past1",
      title: "Spring Music Festival",
      date: "April 22, 2023",
      location: "Uhuru Gardens",
      image: "/placeholder.svg?height=400&width=600",
      description: "A celebration of music and culture featuring performances from our top artists.",
      highlights: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    {
      id: "past2",
      title: "Talent Showcase",
      date: "March 15, 2023",
      location: "Kenya National Theatre",
      image: "/placeholder.svg?height=400&width=600",
      description: "Showcasing the best emerging talent from across the country.",
      highlights: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    },
    {
      id: "past3",
      title: "Charity Concert",
      date: "February 28, 2023",
      location: "Carnivore Grounds",
      image: "/placeholder.svg?height=400&width=600",
      description: "A benefit concert raising funds for local education initiatives.",
      highlights: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Events</h1>
            <p className="text-lg text-muted-foreground">
              Join us at our upcoming events or browse through highlights from our past events.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {upcomingEvents
        .filter((event) => event.featured)
        .map((featuredEvent) => (
          <section key={featuredEvent.id} className="py-16">
            <div className="container">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
                    <Image
                      src={featuredEvent.image || "/placeholder.svg"}
                      alt={featuredEvent.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm mb-4">
                    Featured Event
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{featuredEvent.title}</h2>
                  <p className="text-muted-foreground mb-6">{featuredEvent.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>{featuredEvent.location}</span>
                    </div>
                    {featuredEvent.artists.length > 0 && (
                      <div className="flex items-center">
                        <Music className="h-5 w-5 mr-2 text-muted-foreground" />
                        <span>{featuredEvent.artists.join(", ")}</span>
                      </div>
                    )}
                  </div>
                  <Button asChild size="lg">
                    <Link href={featuredEvent.ticketLink}>Get Tickets</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ))}

      {/* Events Tabs */}
      <section className="py-16 bg-muted">
        <div className="container">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
                <TabsTrigger value="timeline">Event Timeline</TabsTrigger>
              </TabsList>
            </div>

            {/* Upcoming Events Tab */}
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents
                  .filter((event) => !event.featured)
                  .map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-6 py-4 pt-0 border-t">
                        <Button asChild className="w-full">
                          <Link href={event.ticketLink}>Get Tickets</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            {/* Past Events Tab */}
            <TabsContent value="past">
              <div className="space-y-12">
                {pastEvents.map((event) => (
                  <div key={event.id} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                      <div className="flex items-center mb-2">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm mr-4">{event.date}</span>
                        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      <h4 className="font-medium mb-3">Event Highlights</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {event.highlights.map((image, index) => (
                          <div key={index} className="relative aspect-square rounded-md overflow-hidden">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${event.title} highlight ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Timeline Tab */}
            <TabsContent value="timeline">
              <EventTimeline />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Event Stats */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                <Music className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <h4 className="text-lg font-medium mb-2">Events Per Year</h4>
              <p className="text-muted-foreground">From intimate showcases to major concerts and festivals.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">10,000+</h3>
              <h4 className="text-lg font-medium mb-2">Attendees</h4>
              <p className="text-muted-foreground">Music lovers who have attended our events in the past year.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">15+</h3>
              <h4 className="text-lg font-medium mb-2">Venues</h4>
              <p className="text-muted-foreground">Partnerships with top venues across the country.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Host an Event with ATM Music</h2>
            <p className="text-muted-foreground mb-8">
              Looking to book our artists for your event? Whether it's a corporate function, wedding, festival, or
              private party, we can help make your event unforgettable.
            </p>
            <Button asChild size="lg">
              <Link href="/booking">Book an Artist</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

