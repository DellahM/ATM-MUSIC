import { Hero } from "@/components/hero"
import { Highlights } from "@/components/highlights"
import { FeaturedArtists } from "@/components/featured-artists"
import { Partners } from "@/components/partners"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { UpcomingEvents } from "@/components/upcoming-events"
import { CallToAction } from "@/components/call-to-action"
import { MusicPreview } from "@/components/music-preview"
import { MerchandisePreview } from "@/components/merchandise-preview"
import { ScrollAnimation } from "@/components/animations/scroll-animation"

// Uncomment these lines to use CMS-ready components
// import { PartnersCMS } from "@/components/partners-cms"
// import { MerchandisePreviewCMS } from "@/components/merchandise-preview-cms"

export default function Home() {
  return (
    <div>
      <Hero />
      <ScrollAnimation variant="fadeIn">
        <Highlights />
      </ScrollAnimation>
      <ScrollAnimation variant="fadeIn">
        <FeaturedArtists />
      </ScrollAnimation>
      <ScrollAnimation variant="fadeIn">
        <Partners />
        {/* For CMS integration: <PartnersCMS /> */}
      </ScrollAnimation>
      <ScrollAnimation variant="fadeIn">
        <MusicPreview />
      </ScrollAnimation>
      <ScrollAnimation variant="fadeIn">
        <MerchandisePreview />
        {/* For CMS integration: <MerchandisePreviewCMS /> */}
      </ScrollAnimation>
      <ScrollAnimation variant="fadeIn">
        <Services />
      </ScrollAnimation>
      <ScrollAnimation variant="fadeIn">
        <Testimonials />
      </ScrollAnimation>
      <ScrollAnimation variant="fadeIn">
        <UpcomingEvents />
      </ScrollAnimation>
      <ScrollAnimation variant="fadeIn">
        <CallToAction />
      </ScrollAnimation>
    </div>
  )
}

