import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

interface TestimonialProps {
  quote: string
  name: string
  title: string
  company: string
  rating: number
  imageUrl: string
}

export default function Testimonial({ 
  quote, 
  name, 
  title, 
  company, 
  rating,
  imageUrl 
}: TestimonialProps) {
  return (
    <Card className="h-full border-0 shadow-soft hover:shadow-large transition-all duration-200 group hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <CardContent className="p-8">
        {/* Quote Icon */}
        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-200 motion-reduce:transition-none">
          <Quote className="h-6 w-6 text-orange-600" />
        </div>
        
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating 
                  ? 'text-orange-400 fill-orange-400' 
                  : 'text-neutral-300'
              }`}
            />
          ))}
        </div>
        
        {/* Quote */}
        <blockquote className="text-body text-neutral-700 leading-relaxed mb-6 italic">
          &ldquo;{quote}&rdquo;
        </blockquote>
        
        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          
          <div>
            <cite className="text-body-sm font-semibold text-neutral-900 not-italic">
              {name}
            </cite>
            <p className="text-body-sm text-neutral-500">
              {title} at {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
