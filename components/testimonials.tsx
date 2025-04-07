import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Working with ATM Music has been life-changing. Their professionalism and dedication are unmatched.",
      name: "Artist Name 1",
      role: "Singer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "They took my career to heights I never imagined. The team's expertise and connections in the industry are invaluable.",
      name: "Artist Name 2",
      role: "Producer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote: "ATM Music provided me with the platform and guidance I needed to showcase my talent to the world.",
      name: "Artist Name 3",
      role: "Dancer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The production quality and attention to detail at ATM Music is exceptional. They truly care about their artists.",
      name: "Artist Name 4",
      role: "Actor",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our artists have to say about working with us.
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  )
}

