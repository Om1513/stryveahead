import Container from '@/components/container'
import Testimonial from './testimonial'
import { testimonialsContent } from '@/lib/data/content'

export default function Testimonials() {
  return (
    <section className="py-24 bg-neutral-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold text-neutral-900 mb-4 font-poppins">
            {testimonialsContent.title}
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            {testimonialsContent.description}
          </p>
        </div>
        
        {/* Simple Grid Layout - matches Figma */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsContent.testimonials.map((testimonial) => (
            <Testimonial 
              key={testimonial.id}
              {...testimonial} 
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
