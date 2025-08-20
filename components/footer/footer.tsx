import Container from '@/components/container'
import Logo from '@/components/header/logo'
import SocialLinks from './social-links'
import ContactInfo from './contact-info'
import { footerContent } from '@/lib/data/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      <Container>
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Logo className="mb-6" />
              <p className="text-body text-neutral-300 mb-6 leading-relaxed max-w-md">
                {footerContent.description}
              </p>
              
              <SocialLinks />
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-h6 font-semibold mb-6 font-poppins">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerContent.quickLinks.map((link) => (
                  <li key={link.id}>
                    <a 
                      href={link.href} 
                      className="text-neutral-300 hover:text-orange-400 transition-colors text-body block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <ContactInfo />
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-body-sm text-neutral-400">
              © {currentYear} Finanxe. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              {footerContent.legalLinks.map((link) => (
                <a 
                  key={link.id}
                  href={link.href} 
                  className="text-body-sm text-neutral-400 hover:text-orange-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
