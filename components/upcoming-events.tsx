import Link from "next/link"
import { Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function UpcomingEvents() {
  const events = [
    {
      title: "Summer Concert Series",
      date: "July 15, 2023",
      time: "7:00 PM",
      location: "Nairobi National Park",
      link: "/events/summer-concert",
    },
    {
      title: "Album Launch Party",
      date: "August 5, 2023",
      time: "8:00 PM",
      location: "The Alchemist Bar, Westlands",
      link: "/events/album-launch",
    },
    {
      title: "Music Workshop",
      date: "August 20, 2023",
      time: "2:00 PM",
      location: "ATM Studios, Ruaka",
      link: "/events/music-workshop",
    },
  ]

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us at our upcoming events and experience the talent of our artists live.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={event.link}>Get Tickets</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

