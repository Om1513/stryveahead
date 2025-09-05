import Container from '@/components/container'
import ClientLogoBelt from './client-logo-belt'

export default function Portfolio() {
  return (
    <div className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-[60px] font-bold leading-[60px] text-gray-900 mb-6 font-inter">
            Our Portfolio
          </h2>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/60 pointer-events-none z-10" />
          <ClientLogoBelt className="py-8 md:py-12" />
        </div>
        
      </Container>
    </div>
  )
}
