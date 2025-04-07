"use client"

import { CardContent } from "@/components/ui/card"

import { Card } from "@/components/ui/card"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { StaggerScroll } from "@/components/animations/stagger-scroll"
import { StaggerItemScroll } from "@/components/animations/stagger-item-scroll"
import { HeadingAnimation } from "@/components/animations/heading-animation"
import { motion } from "framer-motion"
import { ChevronLeft, Minus, Plus, ShoppingCart, Star, Truck } from "lucide-react"

// This is a mock function to get product data
// In a real application, this would fetch data from an API
const getProductData = (slug: string) => {
  // For demo purposes, return mock data
  return {
    id: "prod1",
    name: "ATM Music Logo T-Shirt",
    price: 2500,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Apparel",
    isNew: true,
    description:
      "Show your support for ATM Music with this premium quality t-shirt featuring our iconic logo. Made from 100% cotton for maximum comfort and durability.",
    features: [
      "100% cotton material",
      "Screen printed logo",
      "Unisex fit",
      "Machine washable",
      "Available in multiple sizes",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Gray"],
    inStock: true,
    rating: 4.8,
    reviewCount: 24,
    relatedProducts: [
      {
        id: "prod3",
        name: "ATM Music Snapback Cap",
        price: 1800,
        image: "/placeholder.svg?height=400&width=400",
        category: "Accessories",
        link: "/shop/atm-music-snapback-cap",
      },
      {
        id: "prod5",
        name: "ATM Music Hoodie",
        price: 3800,
        image: "/placeholder.svg?height=400&width=400",
        category: "Apparel",
        link: "/shop/atm-music-hoodie",
      },
      {
        id: "prod7",
        name: "ATM Music Tote Bag",
        price: 1200,
        image: "/placeholder.svg?height=400&width=400",
        category: "Accessories",
        link: "/shop/atm-music-tote-bag",
      },
    ],
  }
}

export function ProductDetailClient({ slug }: { slug: string }) {
  const product = getProductData(slug)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]) // Default to Medium
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  // Format price in KSH
  const formatPrice = (price: number) => {
    return `KSh ${price.toLocaleString()}`
  }

  // Handle quantity changes
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="container">
          <div className="flex items-center text-sm">
            <Link href="/shop" className="text-muted-foreground hover:text-foreground flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Shop
            </Link>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <ScrollAnimation variant="fadeIn">
              <div className="space-y-4">
                <div className="relative aspect-square rounded-lg overflow-hidden border">
                  <Image
                    src={product.images[selectedImage] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.isNew && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-primary hover:bg-primary/90">New</Badge>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className={`relative aspect-square w-20 rounded-md overflow-hidden border ${
                        selectedImage === index ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Product Info */}
            <div>
              <ScrollAnimation variant="slideUp">
                <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                <HeadingAnimation as="h1" className="text-3xl font-bold mb-2">
                  {product.name}
                </HeadingAnimation>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>

                <div className="text-2xl font-bold text-primary mb-6">{formatPrice(product.price)}</div>

                <p className="text-muted-foreground mb-6">{product.description}</p>

                {/* Size Selection */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`px-4 py-2 border rounded-md ${
                          selectedSize === size ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`px-4 py-2 border rounded-md ${
                          selectedColor === color
                            ? "bg-primary text-primary-foreground"
                            : "bg-background hover:bg-muted"
                        }`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex items-center border rounded-md">
                    <button className="px-3 py-2 hover:bg-muted" onClick={decreaseQuantity} disabled={quantity <= 1}>
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 text-center min-w-[40px]">{quantity}</span>
                    <button className="px-3 py-2 hover:bg-muted" onClick={increaseQuantity}>
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <Button className="flex-1 gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>

                {/* Shipping Info */}
                <div className="flex items-start gap-2 p-4 bg-muted rounded-lg mb-6">
                  <Truck className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Free Shipping</h3>
                    <p className="text-sm text-muted-foreground">
                      Free standard shipping on orders over KSh 5,000. Delivery within 3-5 business days.
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-12 bg-muted">
        <div className="container">
          <Tabs defaultValue="description" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="description">
              <div className="max-w-3xl mx-auto bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Product Description</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <p className="text-muted-foreground">
                  This official ATM Music merchandise is designed to provide both style and comfort. Each item is
                  carefully crafted using premium materials to ensure durability and a perfect fit. By purchasing
                  official merchandise, you're directly supporting your favorite artists and the ATM Music community.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="details">
              <div className="max-w-3xl mx-auto bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Product Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Materials</h4>
                    <p className="text-muted-foreground mb-4">100% premium cotton</p>

                    <h4 className="font-medium mb-2">Care Instructions</h4>
                    <p className="text-muted-foreground mb-4">Machine wash cold, tumble dry low</p>

                    <h4 className="font-medium mb-2">Country of Origin</h4>
                    <p className="text-muted-foreground">Kenya</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Sizing</h4>
                    <p className="text-muted-foreground mb-4">True to size, unisex fit</p>

                    <h4 className="font-medium mb-2">SKU</h4>
                    <p className="text-muted-foreground mb-4">ATM-TS-001</p>

                    <h4 className="font-medium mb-2">Return Policy</h4>
                    <p className="text-muted-foreground">30-day returns for unworn items</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="max-w-3xl mx-auto bg-background p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Customer Reviews</h3>
                  <Button variant="outline">Write a Review</Button>
                </div>

                <div className="space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="border-b pb-6 last:border-0">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Customer Name</h4>
                        <span className="text-sm text-muted-foreground">2 weeks ago</span>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className={`h-4 w-4 ${j < 5 - i ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">
                        Great quality t-shirt! The fabric is soft and comfortable, and the design looks amazing.
                        Definitely recommend this to any ATM Music fan.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12">
        <div className="container">
          <HeadingAnimation as="h2" className="text-2xl font-bold mb-8 text-center">
            You May Also Like
          </HeadingAnimation>

          <StaggerScroll staggerDelay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {product.relatedProducts.map((relatedProduct) => (
                <StaggerItemScroll key={relatedProduct.id} variant="fadeUp">
                  <motion.div whileHover={{ y: -10 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3 }}>
                    <Link href={relatedProduct.link}>
                      <Card className="overflow-hidden h-full">
                        <div className="relative aspect-square">
                          <Image
                            src={relatedProduct.image || "/placeholder.svg"}
                            alt={relatedProduct.name}
                            fill
                            className="object-cover transition-transform hover:scale-105 duration-500"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="text-sm text-muted-foreground mb-1">{relatedProduct.category}</div>
                          <h3 className="font-bold text-lg mb-1">{relatedProduct.name}</h3>
                          <p className="font-medium text-primary">{formatPrice(relatedProduct.price)}</p>
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
    </div>
  )
}

