"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { HeadingAnimation } from "@/components/animations/heading-animation"
import { cmsAdapter } from "@/lib/cms-adapters"
import type { Partner } from "@/lib/cms-types"

export function PartnersCMS() {
  const [partners, setPartners] = useState<Partner[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const data = await cmsAdapter.getPartners()
        setPartners(data)
      } catch (error) {
        console.error("Error fetching partners:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPartners()
  }, [])

  if (loading) {
    return (
      <section className="py-16">
        <div className="container">
          <div className="text-center">
            <p>Loading partners...</p>
          </div>
        </div>
      </section>
    )
  }

  if (partners.length === 0) {
    return null
  }

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
                {partner.url ? (
                  <Link href={partner.url} target="_blank" rel="noopener noreferrer">
                    <div className="w-32 md:w-40 h-16 md:h-20 relative grayscale hover:grayscale-0 transition-all duration-300">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="w-32 md:w-40 h-16 md:h-20 relative grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

