import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/atm-logo.png" alt="ATM Music Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="text-xl font-bold">ATM Music</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Located in Ruaka, Limuru Road, we are more than a record label. We are dream builders, creators, and
              innovators dedicated to elevating talent.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://youtube.com" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/artists" className="text-muted-foreground hover:text-primary">
                  Our Artists
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/talent-management" className="text-muted-foreground hover:text-primary">
                  Talent Management
                </Link>
              </li>
              <li>
                <Link href="/services/production" className="text-muted-foreground hover:text-primary">
                  Production & Distribution
                </Link>
              </li>
              <li>
                <Link href="/services/content-creation" className="text-muted-foreground hover:text-primary">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="/services/music-promotion" className="text-muted-foreground hover:text-primary">
                  Music Promotion
                </Link>
              </li>
              <li>
                <Link href="/services/booking" className="text-muted-foreground hover:text-primary">
                  Artist Booking
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>Opposite Delta Petrol Station,</p>
              <p>Limuru Road, Ruaka</p>
              <p>Phone: +254 123 456 789</p>
              <p>Email: info@atmmusic.com</p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ATM Music. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

