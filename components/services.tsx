import { Mic, Film, Users, Music } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HeadingAnimation } from "@/components/animations/heading-animation"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { StaggerScroll } from "@/components/animations/stagger-scroll"
import { StaggerItemScroll } from "@/components/animations/stagger-item-scroll"

export function Services() {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Talent Management",
      description: "We guide artists through every step of their career, ensuring their creative vision comes to life.",
      features: ["Booking", "Branding", "Networking"],
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Production & Distribution",
      description: "From the studio to the stage, we craft and share masterpieces.",
      features: ["Recording", "Mixing", "Publishing"],
    },
    {
      icon: <Film className="h-8 w-8" />,
      title: "Content Creation",
      description: "High-quality content that captivates audiences and strengthens your brand.",
      features: ["Photography", "Videography", "Social Media Content"],
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Music Promotion",
      description: "Strategic promotion to ensure your music reaches the right audience.",
      features: ["Radio Promotion", "Playlist Placement", "PR Campaigns"],
    },
  ]

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <ScrollAnimation variant="slideUp">
          <div className="text-center mb-12">
            <HeadingAnimation as="h2" className="text-3xl font-bold mb-4">
              Our Services
            </HeadingAnimation>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From talent management to production and content creation, we offer comprehensive services to help artists
              thrive.
            </p>
          </div>
        </ScrollAnimation>

        <StaggerScroll staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <StaggerItemScroll key={index} variant="fadeUp">
                <Card>
                  <CardHeader className="pb-2">
                    <ScrollAnimation variant="scale" delay={0.1}>
                      <div className="p-2 w-fit rounded-full bg-primary/10 text-primary mb-4">{service.icon}</div>
                    </ScrollAnimation>
                    <ScrollAnimation variant="fadeIn" delay={0.2}>
                      <CardTitle>{service.title}</CardTitle>
                    </ScrollAnimation>
                  </CardHeader>
                  <CardContent>
                    <ScrollAnimation variant="fadeIn" delay={0.3}>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-1">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <span className="mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </ScrollAnimation>
                  </CardContent>
                </Card>
              </StaggerItemScroll>
            ))}
          </div>
        </StaggerScroll>
      </div>
    </section>
  )
}

