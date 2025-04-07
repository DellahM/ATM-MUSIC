// CMS Content Types

// Hero Section
export interface HeroContent {
  title: string
  subtitle: string
  ctaButtons: {
    label: string
    url: string
    variant: "default" | "outline" | "secondary"
  }[]
  backgroundVideo?: string
  backgroundImage?: string
}

// Artist
export interface Artist {
  id: string
  name: string
  slug: string
  category: string
  image: string
  bio?: string
  featured?: boolean
  socialLinks?: {
    platform: string
    url: string
  }[]
}

// Music Release
export interface MusicRelease {
  id: string
  title: string
  artist: string
  releaseDate: string
  image: string
  type: "Single" | "EP" | "Album"
  streamingLink: string
  featured?: boolean
}

// Event
export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  image: string
  description: string
  ticketLink: string
  featured?: boolean
  artists: string[]
}

// Testimonial
export interface Testimonial {
  quote: string
  name: string
  role: string
  image: string
}

// Service
export interface Service {
  icon: string
  title: string
  description: string
  features: string[]
}

// Gallery Item
export interface GalleryItem {
  id: string
  category: string
  title: string
  description: string
  image: string
  date: string
}

// Product
export interface Product {
  id: string
  name: string
  slug: string
  price: number
  image: string
  images?: string[]
  category: string
  description: string
  features?: string[]
  sizes?: string[]
  colors?: string[]
  isNew?: boolean
  isFeatured?: boolean
  inStock?: boolean
}

// Partner
export interface Partner {
  name: string
  logo: string
  url?: string
}

// Page Metadata
export interface PageMetadata {
  title: string
  description: string
  ogImage?: string
}

