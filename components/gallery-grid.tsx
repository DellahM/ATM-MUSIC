"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { StaggerScroll } from "@/components/animations/stagger-scroll"
import { StaggerItemScroll } from "@/components/animations/stagger-item-scroll"
import { ImageAnimation } from "@/components/animations/image-animation"
import { motion } from "framer-motion"

interface GalleryItem {
  id: string
  category: string
  title: string
  description: string
  image: string
  date: string
}

interface GalleryGridProps {
  items: GalleryItem[]
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  return (
    <>
      <StaggerScroll staggerDelay={0.1} amount={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <StaggerItemScroll key={item.id} variant="fadeUp">
              <motion.div whileHover={{ y: -10 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3 }}>
                <Card
                  className="overflow-hidden cursor-pointer transition-transform"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative h-64 sm:h-72">
                    <ImageAnimation src={item.image || "/placeholder.svg"} alt={item.title} fill variant="scaleIn" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{item.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItemScroll>
          ))}
        </div>
      </StaggerScroll>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedImage?.title}</DialogTitle>
            <DialogDescription>{selectedImage?.description}</DialogDescription>
          </DialogHeader>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full aspect-[4/3] mt-4"
          >
            {selectedImage && (
              <Image
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                fill
                className="object-contain rounded-md"
              />
            )}
          </motion.div>
          <div className="flex items-center text-sm text-muted-foreground mt-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{selectedImage?.date}</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

