export type TestimonialPosition = 'bottom-left' | 'top-center' | 'bottom-right' | 'mobile'

export interface TestimonialData {
  id: string
  name: string
  role: string
  imageUrl: string
  position: TestimonialPosition
  quote?: string | undefined
  featured?: boolean | undefined
}

export interface TestimonialsContent {
  title: string
  description: string
  testimonials: TestimonialData[]
}
