import { Calendar, MapPin, Music } from "lucide-react"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { StaggerScroll } from "@/components/animations/stagger-scroll"
import { StaggerItemScroll } from "@/components/animations/stagger-item-scroll"

export function EventTimeline() {
  const timelineEvents = [
    {
      month: "July 2023",
      events: [
        {
          date: "July 15",
          title: "Summer Concert Series",
          location: "Nairobi National Park",
          artists: ["Artist Name 1", "Artist Name 2", "Artist Name 3"],
        },
        {
          date: "July 22",
          title: "Radio Interview",
          location: "Capital FM",
          artists: ["Artist Name 1"],
        },
        {
          date: "July 29",
          title: "Club Performance",
          location: "B Club, Kilimani",
          artists: ["Artist Name 4"],
        },
      ],
    },
    {
      month: "August 2023",
      events: [
        {
          date: "August 5",
          title: "Album Launch Party",
          location: "The Alchemist Bar, Westlands",
          artists: ["Artist Name 4"],
        },
        {
          date: "August 12",
          title: "Music Video Shoot",
          location: "Various Locations",
          artists: ["Artist Name 2"],
        },
        {
          date: "August 20",
          title: "Music Workshop",
          location: "ATM Studios, Ruaka",
          artists: ["Artist Name 5", "Artist Name 6"],
        },
        {
          date: "August 27",
          title: "TV Appearance",
          location: "Citizen TV",
          artists: ["Artist Name 1", "Artist Name 3"],
        },
      ],
    },
    {
      month: "September 2023",
      events: [
        {
          date: "September 2",
          title: "Corporate Event",
          location: "Kempinski Hotel",
          artists: ["Artist Name 5"],
        },
        {
          date: "September 10",
          title: "Industry Networking Night",
          location: "Kiza Lounge, Kilimani",
          artists: [],
        },
        {
          date: "September 16",
          title: "University Tour",
          location: "University of Nairobi",
          artists: ["Artist Name 1", "Artist Name 4"],
        },
        {
          date: "September 23",
          title: "Album Listening Party",
          location: "ATM Studios, Ruaka",
          artists: ["Artist Name 3"],
        },
        {
          date: "September 30",
          title: "International Collaboration",
          location: "Online Event",
          artists: ["Artist Name 2"],
        },
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <StaggerScroll staggerDelay={0.3}>
        {timelineEvents.map((monthGroup, monthIndex) => (
          <StaggerItemScroll key={monthIndex} variant="fadeUp">
            <div className="mb-12">
              <ScrollAnimation variant="slideLeft">
                <h3 className="text-2xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">
                  {monthGroup.month}
                </h3>
              </ScrollAnimation>

              <StaggerScroll staggerDelay={0.15}>
                <div className="space-y-6">
                  {monthGroup.events.map((event, eventIndex) => (
                    <StaggerItemScroll key={eventIndex} variant="fadeUp">
                      <div className="relative pl-8 border-l-2 border-muted-foreground/30 pb-6 last:border-0 last:pb-0">
                        <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <ScrollAnimation variant="fadeIn" delay={0.1}>
                            <h4 className="text-xl font-bold">{event.title}</h4>
                          </ScrollAnimation>
                          <ScrollAnimation variant="fadeIn" delay={0.2}>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{event.date}</span>
                            </div>
                          </ScrollAnimation>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <ScrollAnimation variant="fadeIn" delay={0.3}>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{event.location}</span>
                            </div>
                          </ScrollAnimation>
                          {event.artists.length > 0 && (
                            <ScrollAnimation variant="fadeIn" delay={0.4}>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Music className="h-4 w-4 mr-1" />
                                <span>{event.artists.join(", ")}</span>
                              </div>
                            </ScrollAnimation>
                          )}
                        </div>
                      </div>
                    </StaggerItemScroll>
                  ))}
                </div>
              </StaggerScroll>
            </div>
          </StaggerItemScroll>
        ))}
      </StaggerScroll>
    </div>
  )
}

