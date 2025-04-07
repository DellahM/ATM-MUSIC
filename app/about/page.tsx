import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About Us | ATM Music",
  description: "Learn about ATM Music, our story, values, and the team behind our success.",
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Team Member 1",
      role: "CEO & Founder",
      bio: "Brief bio about the team member and their experience in the industry.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Team Member 2",
      role: "Creative Director",
      bio: "Brief bio about the team member and their experience in the industry.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Team Member 3",
      role: "Head of Production",
      bio: "Brief bio about the team member and their experience in the industry.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Team Member 4",
      role: "Talent Manager",
      bio: "Brief bio about the team member and their experience in the industry.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const values = [
    {
      title: "Creativity",
      description: "We foster an environment where artistic expression thrives and innovation is encouraged.",
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical practices in all our dealings.",
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and bringing diverse talents together.",
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from production to management.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Story</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Located in Ruaka, Limuru Road, we are more than a record label. We are dream builders, creators, and
              innovators dedicated to elevating talent and inspiring audiences worldwide. From managing artists to
              producing world-class content, our mission is to create connections that last.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-[300px]">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-bold">2013: The Beginning</h3>
                <p className="text-muted-foreground mt-2">
                  ATM Music was founded with a vision to transform the local music scene.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-bold">2015: First Major Success</h3>
                <p className="text-muted-foreground mt-2">
                  Our first artist reached the top of the charts, putting ATM Music on the map.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-bold">2018: Expansion</h3>
                <p className="text-muted-foreground mt-2">
                  We expanded our services to include talent management and content creation.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-bold">2020: New Studio</h3>
                <p className="text-muted-foreground mt-2">
                  We opened our state-of-the-art studio in Ruaka, Limuru Road.
                </p>
              </div>
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-bold">Today: Growing Strong</h3>
                <p className="text-muted-foreground mt-2">
                  We continue to grow our roster of talented artists and expand our influence in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

