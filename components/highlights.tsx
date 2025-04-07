import { Users, Award, Calendar } from "lucide-react"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { StaggerScroll } from "@/components/animations/stagger-scroll"
import { StaggerItemScroll } from "@/components/animations/stagger-item-scroll"

export function Highlights() {
  const stats = [
    {
      icon: <Calendar className="h-8 w-8" />,
      value: "10+",
      label: "Years of Experience",
      description: "Over a decade of nurturing talent and delivering excellence.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "500+",
      label: "Successful Projects",
      description: "From music videos to live performances and studio productions.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "50+",
      label: "Diverse Talents",
      description: "Home to diverse talents across music, acting, fashion, and more.",
    },
  ]

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <StaggerScroll staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StaggerItemScroll key={index} variant="fadeUp">
                <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
                  <ScrollAnimation variant="scale" delay={0.2 + index * 0.1}>
                    <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">{stat.icon}</div>
                  </ScrollAnimation>

                  <ScrollAnimation variant="fadeIn" delay={0.4 + index * 0.1}>
                    <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  </ScrollAnimation>

                  <ScrollAnimation variant="fadeIn" delay={0.5 + index * 0.1}>
                    <h4 className="text-lg font-medium mb-2">{stat.label}</h4>
                    <p className="text-muted-foreground">{stat.description}</p>
                  </ScrollAnimation>
                </div>
              </StaggerItemScroll>
            ))}
          </div>
        </StaggerScroll>
      </div>
    </section>
  )
}

