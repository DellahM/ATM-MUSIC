// CMS Adapter Factory
import { contentfulAdapter } from "./contentful-adapter"
import { sanityAdapter } from "./sanity-adapter"
import { strapiAdapter } from "./strapi-adapter"
import { wordpressAdapter } from "./wordpress-adapter"
import { mockAdapter } from "./mock-adapter"

// Environment variable to determine which CMS to use
const CMS_TYPE = process.env.NEXT_PUBLIC_CMS_TYPE || "mock"

export function getCMSAdapter() {
  switch (CMS_TYPE) {
    case "contentful":
      return contentfulAdapter
    case "sanity":
      return sanityAdapter
    case "strapi":
      return strapiAdapter
    case "wordpress":
      return wordpressAdapter
    case "mock":
    default:
      return mockAdapter
  }
}

// Export the selected adapter
export const cmsAdapter = getCMSAdapter()

