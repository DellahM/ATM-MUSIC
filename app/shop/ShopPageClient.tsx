"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { StaggerScroll } from "@/components/animations/stagger-scroll"
import { StaggerItemScroll } from "@/components/animations/stagger-item-scroll"
import { HeadingAnimation } from "@/components/animations/heading-animation"
import { motion } from "framer-motion"
import { Search, ShoppingCart } from "lucide-react"

export function ShopPageClient() {
  const [searchQuery, setSearchQuery] = useState("")

  // Product categories
  const categories = [
    { id: "all", label: "All Products" },
    { id: "apparel", label: "Apparel" },
    { id: "music", label: "Music" },
    { id: "accessories", label: "Accessories" },
    { id: "collectibles", label: "Collectibles" },
  ]

  // Product data
  const products = {
    all: [
      {
        id: "prod1",
        name: "ATM Music Logo T-Shirt",
        price: 2500,
        image: "/placeholder.svg?height=400&width=400",
        category: "apparel",
        link: "/shop/atm-music-logo-tshirt",
        isNew: true,
        isFeatured: true,
        description: "Classic black t-shirt with the ATM Music logo on the front.",
      },
      {
        id: "prod2",
        name: "Artist Name 1 - Album Vinyl",
        price: 3500,
        image: "/placeholder.svg?height=400&width=400",
        category: "music",
        link: "/shop/artist-name-1-album-vinyl",
        isNew: false,
        isFeatured: true,
        description: "Limited edition vinyl pressing of Artist Name 1's debut album.",
      },
      {
        id: "prod3",
        name: "ATM Music Snapback Cap",
        price: 1800,
        image: "/placeholder.svg?height=400&width=400",
        category: "accessories",
        link: "/shop/atm-music-snapback-cap",
        isNew: true,
        isFeatured: true,
        description: "Adjustable snapback cap with embroidered ATM Music logo.",
      },
      {
        id: "prod4",
        name: "Limited Edition Poster Set",
        price: 1200,
        image: "/placeholder.svg?height=400&width=400",
        category: "collectibles",
        link: "/shop/limited-edition-poster-set",
        isNew: false,
        isFeatured: true,
        description: "Set of 3 limited edition posters featuring ATM Music artists.",
      },
      {
        id: "prod5",
        name: "ATM Music Hoodie",
        price: 3800,
        image: "/placeholder.svg?height=400&width=400",
        category: "apparel",
        link: "/shop/atm-music-hoodie",
        isNew: false,
        isFeatured: false,
        description: "Premium quality hoodie with ATM Music logo on the back.",
      },
      {
        id: "prod6",
        name: "Artist Name 2 - EP CD",
        price: 1500,
        image: "/placeholder.svg?height=400&width=400",
        category: "music",
        link: "/shop/artist-name-2-ep-cd",
        isNew: true,
        isFeatured: false,
        description: "CD version of Artist Name 2's latest EP with bonus tracks.",
      },
      {
        id: "prod7",
        name: "ATM Music Tote Bag",
        price: 1200,
        image: "/placeholder.svg?height=400&width=400",
        category: "accessories",
        link: "/shop/atm-music-tote-bag",
        isNew: false,
        isFeatured: false,
        description: "Canvas tote bag with ATM Music logo print.",
      },
      {
        id: "prod8",
        name: "Signed Artist Photo",
        price: 2000,
        image: "/placeholder.svg?height=400&width=400",
        category: "collectibles",
        link: "/shop/signed-artist-photo",
        isNew: false,
        isFeatured: false,
        description: "Limited edition signed photograph of ATM Music artists.",
      },
      {
        id: "prod9",
        name: "ATM Music Tank Top",
        price: 1800,
        image: "/placeholder.svg?height=400&width=400",
        category: "apparel",
        link: "/shop/atm-music-tank-top",
        isNew: false,
        isFeatured: false,
        description: "Lightweight tank top with small ATM Music logo on the front.",
      },
      {
        id: "prod10",
        name: "Artist Name 3 - Digital Album",
        price: 1000,
        image: "/placeholder.svg?height=400&width=400",
        category: "music",
        link: "/shop/artist-name-3-digital-album",
        isNew: true,
        isFeatured: false,
        description: "Digital download of Artist Name 3's latest album with exclusive bonus content.",
      },
      {
        id: "prod11",
        name: "ATM Music Phone Case",
        price: 1500,
        image: "/placeholder.svg?height=400&width=400",
        category: "accessories",
        link: "/shop/atm-music-phone-case",
        isNew: false,
        isFeatured: false,
        description: "Durable phone case with ATM Music design. Available for various models.",
      },
      {
        id: "prod12",
        name: "Concert Ticket Collection",
        price: 2500,
        image: "/placeholder.svg?height=400&width=400",
        category: "collectibles",
        link: "/shop/concert-ticket-collection",
        isNew: false,
        isFeatured: false,
        description: "Framed collection of tickets from ATM Music's most memorable concerts.",
      },
    ],
    apparel: [],
    music: [],
    accessories: [],
    collectibles: [],
  }

  // Populate category-specific arrays
  categories.forEach((category) => {
    if (category.id !== "all") {
      products[category.id] = products.all.filter((item) => item.category === category.id)
    }
  })

  // Filter products based on search query
  const filterProducts = (items) => {
    if (!searchQuery) return items
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  // Format price in KSH
  const formatPrice = (price: number) => {
    return `KSh ${price.toLocaleString()}`
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <HeadingAnimation as="h1" className="text-4xl font-bold mb-6">
              Official Merchandise
            </HeadingAnimation>
            <p className="text-lg text-muted-foreground">
              Support your favorite artists with exclusive merchandise. From apparel to music and collectibles.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Banner */}
      <section className="py-12">
        <div className="container">
          <ScrollAnimation variant="fadeIn">
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10"></div>
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Featured merchandise"
                width={1200}
                height={400}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">New Collection Available</h2>
                <p className="text-lg md:text-xl mb-6 text-center max-w-2xl">
                  Check out our latest merchandise featuring designs from your favorite ATM Music artists.
                </p>
                <Button size="lg" variant="secondary">
                  Shop New Arrivals
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-12">
        <div className="container">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select className="border rounded-md p-2 text-sm bg-background">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {/* Products */}
          <Tabs defaultValue="all" className="w-full">
            <ScrollAnimation variant="fadeIn">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-3xl">
                  {categories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </ScrollAnimation>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <StaggerScroll staggerDelay={0.1}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filterProducts(products[category.id]).map((product) => (
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
                                <div className="text-sm text-muted-foreground mb-1 capitalize">{product.category}</div>
                                <h3 className="font-bold text-lg mb-1 line-clamp-1">{product.name}</h3>
                                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                                <div className="flex justify-between items-center">
                                  <p className="font-medium text-primary">{formatPrice(product.price)}</p>
                                  <Button size="sm" variant="outline" className="rounded-full w-9 h-9 p-0">
                                    <ShoppingCart className="h-4 w-4" />
                                    <span className="sr-only">Add to cart</span>
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </Link>
                        </motion.div>
                      </StaggerItemScroll>
                    ))}
                  </div>
                </StaggerScroll>

                {filterProducts(products[category.id]).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No products found matching your search.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <HeadingAnimation as="h2" className="text-3xl font-bold mb-4">
              Stay Updated
            </HeadingAnimation>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter to be the first to know about new merchandise, exclusive offers, and limited
              editions.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input placeholder="Your email address" type="email" className="flex-grow" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

