import Container from '@/components/container'
import FeatureItem from './feature-item'
import { Phone, Mail } from 'lucide-react'
import { aboutContent } from '@/lib/data/content'

export default function About() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-600 px-8">
                  <div className="text-3xl font-bold mb-4">StryveAhead</div>
                  <div className="text-xl font-semibold mb-4">Team Collaboration</div>
                  <div className="text-base mb-2">Brand Scaling Experts</div>
                  <div className="text-sm opacity-75">Q-Commerce • E-Commerce • Modern Trade</div>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-large border border-neutral-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-900 mb-1">{aboutContent.yearsExperience}</div>
                <div className="text-sm text-neutral-600">Years of Excellence</div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-h2 font-bold text-neutral-900 mb-6 font-poppins">
              {aboutContent.title}
            </h2>
            
            <p className="text-body-lg text-neutral-600 mb-8 leading-relaxed">
              {aboutContent.description}
            </p>
            
            <div className="space-y-4 mb-8">
              {aboutContent.features.map((feature, index) => (
                <FeatureItem key={index}>
                  {feature}
                </FeatureItem>
              ))}
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl">
              <h3 className="text-h5 font-semibold text-neutral-900 mb-4 font-poppins">
                {aboutContent.contactSection.title}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Call us directly</p>
                    <a 
                      href={`tel:${aboutContent.contactSection.phone}`}
                      className="text-body font-medium text-neutral-900 hover:text-orange-600 transition-colors"
                    >
                      {aboutContent.contactSection.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Send us an email</p>
                    <a 
                      href={`mailto:${aboutContent.contactSection.email}`}
                      className="text-body font-medium text-neutral-900 hover:text-orange-600 transition-colors"
                    >
                      {aboutContent.contactSection.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
