"use client"

import { useEffect, useState } from "react"
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
import { cmsAdapter } from "@/lib/cms-adapters"
import type { Product } from "@/lib/cms-types"

export function MerchandisePreviewCMS() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await cmsAdapter.getFeaturedProducts(4)
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Format price in KSH
  const formatPrice = (price: number) => {
    return `KSh ${price.toLocaleString()}`
  }

  if (loading) {
    return (
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center">
            <p>Loading featured products...</p>
          </div>
        </div>
      </section>
    )
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
            {products.map((product) => (
              <StaggerItemScroll key={product.id} variant="fadeUp">
                <motion.div whileHover={{ y: -10 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3 }}>
                  <Link href={`/shop/${product.slug}`}>
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

