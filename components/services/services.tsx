import Container from '@/components/container'
import ServiceCard from './service-card'
import { servicesContent } from '@/lib/data/content'
import { SupportAgentIcon, AccountBalanceWalletIcon, AdminPanelSettingsIcon } from './service-icons'
import { ArrowRight } from 'lucide-react'

const serviceIcons = {
  'support_agent': <SupportAgentIcon />,
  'account_balance_wallet': <AccountBalanceWalletIcon />,
  'admin_panel_settings': <AdminPanelSettingsIcon />,
}

export default function Services() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -left-[105px] top-[322px] w-[496px] h-[576px] rounded-[80px] bg-paragraph opacity-5" />
      <div className="absolute left-[526px] top-[424px] w-[164px] h-[190px] rounded-[20px] bg-white opacity-5" />
      <div className="absolute left-[954px] top-[420px] w-[164px] h-[190px] rounded-[20px] bg-white opacity-5" />
      <div className="absolute left-[321px] top-[420px] w-[164px] h-[190px] rounded-[20px] bg-white opacity-5" />
      <div className="absolute left-[1177px] top-[618px] w-[164px] h-[190px] rounded-[80px] bg-white opacity-5" />
      <div className="absolute left-[98px] top-[617px] w-[164px] h-[190px] rounded-[80px] bg-white opacity-5" />
      <div className="absolute left-[749px] top-[570px] w-[164px] h-[190px] rounded-[80px] bg-white opacity-5" />

      <Container>
        <div className="relative">
          {/* Header Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            {/* Title */}
            <div className="lg:max-w-[545px]">
              <h2 className="font-asap text-[67px] font-bold leading-[80px] text-heading">
                {servicesContent.title}
              </h2>
            </div>
            
            {/* Description */}
            <div className="lg:max-w-[661px] lg:ml-auto">
              <p className="font-plus-jakarta text-base font-normal leading-6 text-paragraph mt-8">
                {servicesContent.description}
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="relative">
            <div className="grid lg:grid-cols-3 gap-8 max-w-[1342px] mx-auto">
              {servicesContent.services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={serviceIcons[service.icon as keyof typeof serviceIcons]}
                  variant={service.variant}
                />
              ))}
            </div>

            {/* Navigation Arrow */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 lg:bottom-[100px]">
              <button 
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F25227] to-[#E8AA29] shadow-[0_62px_85px_-22px_rgba(0,0,0,0.30)] flex items-center justify-center group hover:scale-110 transition-transform duration-200"
                aria-label="View more services"
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
