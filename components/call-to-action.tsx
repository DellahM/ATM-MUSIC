import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { HeadingAnimation } from "@/components/animations/heading-animation"

export function CallToAction() {
  return (
    <section className="py-16">
      <div className="container">
        <ScrollAnimation variant="scale" duration={0.7}>
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <HeadingAnimation as="h2" className="text-3xl font-bold mb-4">
              Ready to Take Your Career to the Next Level?
            </HeadingAnimation>

            <ScrollAnimation variant="fadeIn" delay={0.3}>
              <p className="max-w-2xl mx-auto mb-8">
                Join our family of artists and creators. We're always looking for fresh talent to collaborate with.
              </p>
            </ScrollAnimation>

            <ScrollAnimation variant="fadeIn" delay={0.5}>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/join">Join Our Roster</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

