"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { StaggerScroll } from "@/components/animations/stagger-scroll"
import { StaggerItemScroll } from "@/components/animations/stagger-item-scroll"
import { HeadingAnimation } from "@/components/animations/heading-animation"
import { motion } from "framer-motion"

export function MerchandisePreview() {
  const featuredProducts = [
    {
      id: "prod1",
      name: "ATM Music Logo T-Shirt",
      price: 2500,
      image: "/placeholder.svg?height=400&width=400",
      category: "Apparel",
      link: "/shop/atm-music-logo-tshirt",
      isNew: true,
    },
    {
      id: "prod2",
      name: "Artist Name 1 - Album Vinyl",
      price: 3500,
      image: "/placeholder.svg?height=400&width=400",
      category: "Music",
      link: "/shop/artist-name-1-album-vinyl",
      isNew: false,
    },
    {
      id: "prod3",
      name: "ATM Music Snapback Cap",
      price: 1800,
      image: "/placeholder.svg?height=400&width=400",
      category: "Accessories",
      link: "/shop/atm-music-snapback-cap",
      isNew: true,
    },
    {
      id: "prod4",
      name: "Limited Edition Poster Set",
      price: 1200,
      image: "/placeholder.svg?height=400&width=400",
      category: "Collectibles",
      link: "/shop/limited-edition-poster-set",
      isNew: false,
    },
  ]

  // Format price in KSH
  const formatPrice = (price: number) => {
    return `KSh ${price.toLocaleString()}`
  }

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <ScrollAnimation variant="slideUp">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <HeadingAnimation as="h2" className="text-3xl font-bold mb-2">
                Official Merchandise
              </HeadingAnimation>
              <p className="text-muted-foreground">Support your favorite artists with exclusive merch</p>
            </div>
            <Button asChild className="mt-4 md:mt-0">
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </ScrollAnimation>

        <StaggerScroll staggerDelay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <StaggerItemScroll key={product.id} variant="fadeUp">
                <motion.div whileHover={{ y: -10 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3 }}>
                  <Link href={product.link}>
                    <Card className="overflow-hidden h-full">
                      <div className="relative aspect-square">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform hover:scale-105 duration-500"
                        />
                        {product.isNew && (
                          <div className="absolute top-2 left-2">
                            <Badge className="bg-primary hover:bg-primary/90">New</Badge>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                        <h3 className="font-bold text-lg mb-1 line-clamp-1">{product.name}</h3>
                        <p className="font-medium text-primary">{formatPrice(product.price)}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              </StaggerItemScroll>
            ))}
          </div>
        </StaggerScroll>
      </div>
    </section>
  )
}

