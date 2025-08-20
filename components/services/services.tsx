import Container from '@/components/container'
import ServiceCard from './service-card'
import { TrendingUp, Shield, PieChart } from 'lucide-react'
import { servicesContent } from '@/lib/data/content'

const serviceIcons = {
  'investment-planning': TrendingUp,
  'risk-management': Shield,
  'portfolio-analysis': PieChart,
}

export default function Services() {
  return (
    <section className="py-24 bg-neutral-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold text-neutral-900 mb-4 font-poppins">
            {servicesContent.title}
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            {servicesContent.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesContent.services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={serviceIcons[service.id as keyof typeof serviceIcons]}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
