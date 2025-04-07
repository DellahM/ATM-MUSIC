import type { HeroContent, Artist, MusicRelease, Event, Product, Partner, PageMetadata } from "../cms-types"

// Mock data for development and testing
const mockData = {
  hero: {
    title: "Empowering Talent, Redefining Art",
    subtitle: "Your journey to artistic greatness starts here.",
    ctaButtons: [
      {
        label: "Explore Our Talent",
        url: "/artists",
        variant: "default",
      },
      {
        label: "Join Us",
        url: "/join",
        variant: "outline",
      },
      {
        label: "Book an Artist",
        url: "/booking",
        variant: "secondary",
      },
    ],
    backgroundVideo: "/placeholder.mp4",
  },

  artists: [
    {
      id: "artist1",
      name: "Artist Name 1",
      slug: "artist-name-1",
      category: "Singer/Songwriter",
      image: "/placeholder.svg?height=400&width=300",
      featured: true,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "artist2",
      name: "Artist Name 2",
      slug: "artist-name-2",
      category: "Producer",
      image: "/placeholder.svg?height=400&width=300",
      featured: true,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "artist3",
      name: "Artist Name 3",
      slug: "artist-name-3",
      category: "Dancer",
      image: "/placeholder.svg?height=400&width=300",
      featured: true,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "artist4",
      name: "Artist Name 4",
      slug: "artist-name-4",
      category: "Actor",
      image: "/placeholder.svg?height=400&width=300",
      featured: true,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],

  releases: [
    {
      id: "release1",
      title: "Summer Vibes",
      artist: "Artist Name 1",
      releaseDate: "July 10, 2023",
      image: "/placeholder.svg?height=400&width=400",
      type: "Single",
      streamingLink: "/music/summer-vibes",
      featured: true,
    },
    {
      id: "release2",
      title: "Urban Dreams",
      artist: "Artist Name 2",
      releaseDate: "June 25, 2023",
      image: "/placeholder.svg?height=400&width=400",
      type: "EP",
      streamingLink: "/music/urban-dreams",
      featured: true,
    },
    {
      id: "release3",
      title: "Midnight Tales",
      artist: "Artist Name 3",
      releaseDate: "June 15, 2023",
      image: "/placeholder.svg?height=400&width=400",
      type: "Album",
      streamingLink: "/music/midnight-tales",
      featured: true,
    },
  ],

  events: [
    {
      id: "event1",
      title: "Summer Concert Series",
      date: "July 15, 2023",
      time: "7:00 PM - 11:00 PM",
      location: "Nairobi National Park",
      image: "/placeholder.svg?height=400&width=600",
      description: "Join us for an unforgettable night of music under the stars featuring our top artists.",
      ticketLink: "/events/summer-concert/tickets",
      featured: true,
      artists: ["Artist Name 1", "Artist Name 2", "Artist Name 3"],
    },
    // More events...
  ],

  products: [
    {
      id: "prod1",
      name: "ATM Music Logo T-Shirt",
      slug: "atm-music-logo-tshirt",
      price: 2500,
      image: "/placeholder.svg?height=400&width=400",
      category: "Apparel",
      description: "Classic black t-shirt with the ATM Music logo on the front.",
      isNew: true,
      isFeatured: true,
    },
    // More products...
  ],

  partners: [
    {
      name: "Partner 1",
      logo: "/placeholder.svg?height=80&width=200",
      url: "#",
    },
    {
      name: "Partner 2",
      logo: "/placeholder.svg?height=80&width=200",
      url: "#",
    },
    {
      name: "Partner 3",
      logo: "/placeholder.svg?height=80&width=200",
      url: "#",
    },
    {
      name: "Partner 4",
      logo: "/placeholder.svg?height=80&width=200",
      url: "#",
    },
    {
      name: "Partner 5",
      logo: "/placeholder.svg?height=80&width=200",
      url: "#",
    },
  ],

  pageMetadata: {
    home: {
      title: "ATM Music | Empowering Talent, Redefining Art",
      description:
        "ATM Music is a premier talent management and production company dedicated to elevating talent and inspiring audiences worldwide.",
    },
    // More pages...
  },
}

// Mock adapter implementation
export const mockAdapter = {
  // Hero Content
  getHeroContent: async (): Promise<HeroContent> => {
    return mockData.hero
  },

  // Artists
  getFeaturedArtists: async (limit = 4): Promise<Artist[]> => {
    return mockData.artists.filter((artist) => artist.featured).slice(0, limit)
  },

  getAllArtists: async (): Promise<Artist[]> => {
    return mockData.artists
  },

  getArtistBySlug: async (slug: string): Promise<Artist | null> => {
    return mockData.artists.find((artist) => artist.slug === slug) || null
  },

  // Music Releases
  getLatestReleases: async (limit = 3): Promise<MusicRelease[]> => {
    return mockData.releases.slice(0, limit)
  },

  // Events
  getUpcomingEvents: async (limit = 3): Promise<Event[]> => {
    return mockData.events.slice(0, limit)
  },

  // Products
  getFeaturedProducts: async (limit = 4): Promise<Product[]> => {
    return mockData.products.filter((product) => product.isFeatured).slice(0, limit)
  },

  getAllProducts: async (): Promise<Product[]> => {
    return mockData.products
  },

  getProductBySlug: async (slug: string): Promise<Product | null> => {
    return mockData.products.find((product) => product.slug === slug) || null
  },

  // Partners
  getPartners: async (): Promise<Partner[]> => {
    return mockData.partners
  },

  // Page Metadata
  getPageMetadata: async (page: string): Promise<PageMetadata> => {
    return mockData.pageMetadata[page] || mockData.pageMetadata.home
  },
}

