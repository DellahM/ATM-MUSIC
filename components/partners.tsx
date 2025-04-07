import Image from "next/image"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { HeadingAnimation } from "@/components/animations/heading-animation"

export function Partners() {
  const partners = [
    { name: "Partner 1", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 2", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 3", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 4", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 5", logo: "/placeholder.svg?height=80&width=200" },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <ScrollAnimation variant="fadeIn">
          <HeadingAnimation as="h2" className="text-2xl font-bold text-center mb-12">
            Our Partners & Sponsors
          </HeadingAnimation>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <ScrollAnimation key={index} variant="fadeIn" delay={index * 0.1}>
                <div className="w-32 md:w-40 h-16 md:h-20 relative grayscale hover:grayscale-0 transition-all duration-300">
                  <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

