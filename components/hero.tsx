import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { StaggerScroll } from "@/components/animations/stagger-scroll"
import { StaggerItemScroll } from "@/components/animations/stagger-item-scroll"

export function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="/placeholder.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container relative z-20 text-center text-white">
        <ScrollAnimation variant="slideUp" duration={0.8}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Empowering Talent, Redefining Art</h1>
        </ScrollAnimation>

        <ScrollAnimation variant="fadeIn" delay={0.3} duration={0.8}>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Your journey to artistic greatness starts here.</p>
        </ScrollAnimation>

        <StaggerScroll delay={0.5} staggerDelay={0.15}>
          <div className="flex flex-wrap justify-center gap-4">
            <StaggerItemScroll>
              <Button asChild size="lg" variant="default">
                <Link href="/artists">Explore Our Talent</Link>
              </Button>
            </StaggerItemScroll>

            <StaggerItemScroll>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white hover:text-black">
                <Link href="/join">Join Us</Link>
              </Button>
            </StaggerItemScroll>

            <StaggerItemScroll>
              <Button asChild size="lg" variant="secondary">
                <Link href="/booking">Book an Artist</Link>
              </Button>
            </StaggerItemScroll>
          </div>
        </StaggerScroll>
      </div>
    </section>
  )
}

