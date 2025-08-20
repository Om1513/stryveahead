import Container from '@/components/container'
import Stat from './stat'
import { statsContent } from '@/lib/data/content'

export default function Stats() {
  return (
    <section className="py-24 bg-neutral-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold text-neutral-900 mb-4 font-poppins">
            {statsContent.title}
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            {statsContent.description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsContent.stats.map((stat) => (
            <Stat
              key={stat.id}
              number={stat.number}
              label={stat.label}
              description={stat.description}
              highlighted={stat.highlighted}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
