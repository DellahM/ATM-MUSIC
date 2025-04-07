import { ProductDetailClient } from "./ProductDetailClient"

export const metadata = {
  title: "Product Details | ATM Music Shop",
  description: "View product details and purchase merchandise from ATM Music.",
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return <ProductDetailClient slug={params.slug} />
}

