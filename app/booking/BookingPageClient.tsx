"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function BookingPageClient() {
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Booking request submitted!",
      description: "We'll get back to you as soon as possible to confirm your booking.",
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
    setDate(undefined)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Book an Artist</h1>
            <p className="text-lg text-muted-foreground">
              Looking to book one of our talented artists for your event? Fill out the form below and we'll get back to
              you with availability and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input id="name" name="name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" name="phone" type="tel" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="organization" className="text-sm font-medium">
                    Organization/Company
                  </label>
                  <Input id="organization" name="organization" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="artist" className="text-sm font-medium">
                  Artist/Talent
                </label>
                <Select name="artist">
                  <SelectTrigger>
                    <SelectValue placeholder="Select an artist" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="artist1">Artist Name 1</SelectItem>
                    <SelectItem value="artist2">Artist Name 2</SelectItem>
                    <SelectItem value="artist3">Artist Name 3</SelectItem>
                    <SelectItem value="artist4">Artist Name 4</SelectItem>
                    <SelectItem value="multiple">Multiple Artists</SelectItem>
                    <SelectItem value="not-sure">Not Sure (Need Recommendations)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="event-type" className="text-sm font-medium">
                  Event Type
                </label>
                <Select name="event-type">
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="concert">Concert/Performance</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="private">Private Party</SelectItem>
                    <SelectItem value="festival">Festival</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Event Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium">
                  Event Location
                </label>
                <Input id="location" name="location" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium">
                  Budget Range (KSH)
                </label>
                <Select name="budget">
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50k">Under 50,000</SelectItem>
                    <SelectItem value="50k-100k">50,000 - 100,000</SelectItem>
                    <SelectItem value="100k-200k">100,000 - 200,000</SelectItem>
                    <SelectItem value="200k-500k">200,000 - 500,000</SelectItem>
                    <SelectItem value="over-500k">Over 500,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="details" className="text-sm font-medium">
                  Event Details
                </label>
                <Textarea
                  id="details"
                  name="details"
                  rows={5}
                  placeholder="Please provide details about your event, including duration, audience size, and any specific requirements."
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="hear-about" className="text-sm font-medium">
                  How did you hear about us?
                </label>
                <Select name="hear-about">
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="social-media">Social Media</SelectItem>
                    <SelectItem value="word-of-mouth">Word of Mouth</SelectItem>
                    <SelectItem value="search-engine">Search Engine</SelectItem>
                    <SelectItem value="event">At an Event</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">How far in advance should I book an artist?</h3>
                <p className="text-muted-foreground">
                  We recommend booking at least 4-6 weeks in advance for most events. For larger events or during peak
                  season, 2-3 months advance booking is advisable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">What information do I need to provide for a booking?</h3>
                <p className="text-muted-foreground">
                  Basic event details including date, venue, duration, audience size, and your budget. The more
                  information you provide, the better we can match you with the right artist.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">How is pricing determined?</h3>
                <p className="text-muted-foreground">
                  Pricing varies based on the artist, event type, duration, location, and technical requirements. We
                  provide custom quotes based on your specific needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Do you provide sound equipment?</h3>
                <p className="text-muted-foreground">
                  We can arrange for sound equipment at an additional cost. Please specify your requirements in the
                  booking form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

