# ATM Music Website

This is the official website for ATM Music, featuring artist profiles, music releases, events, gallery, and merchandise shop.

## CMS Integration

This website is designed to work with various CMS platforms. You can choose which CMS to use by setting the `NEXT_PUBLIC_CMS_TYPE` environment variable.

### Supported CMS Platforms

- Contentful
- Sanity
- Strapi
- WordPress
- Mock (default, for development)

### Setup Instructions

1. Copy `.env.example` to `.env.local`
2. Set `NEXT_PUBLIC_CMS_TYPE` to your preferred CMS
3. Fill in the required credentials for your chosen CMS

### Content Models

The following content models are used throughout the site:

- Artists
- Music Releases
- Events
- Gallery Items
- Products (Merchandise)
- Partners/Sponsors
- Services
- Testimonials

Each CMS adapter implements methods to fetch these content types. See `lib/cms-types.ts` for the data structure of each model.

## E-commerce Integration

The merchandise shop can be integrated with various e-commerce platforms:

- Shopify
- WooCommerce
- Custom solution

Set the `NEXT_PUBLIC_ECOMMERCE_PROVIDER` environment variable to your preferred provider.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

