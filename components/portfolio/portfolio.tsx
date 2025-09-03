import Container from '@/components/container'
import ClientLogoBelt from './client-logo-belt'

export default function Portfolio() {
  return (
    <div className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none z-10" />
          <ClientLogoBelt className="py-8 md:py-12" />
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Hover over any logo to pause the animation and see it up close
          </p>
        </div>
      </Container>
    </div>
  )
}
