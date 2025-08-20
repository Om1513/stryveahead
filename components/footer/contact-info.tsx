import { Mail, Phone, MapPin } from 'lucide-react'
import { footerContent } from '@/lib/data/content'

export default function ContactInfo() {
  return (
    <div>
      <h3 className="text-h6 font-semibold mb-6 font-poppins">
        Contact Us
      </h3>
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
          <div className="text-body text-neutral-300">
            <p>{footerContent.contact.address.street}</p>
            <p>{footerContent.contact.address.city}</p>
          </div>
        </li>
        
        <li className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
          <a 
            href={`tel:${footerContent.contact.phone}`}
            className="text-body text-neutral-300 hover:text-orange-400 transition-colors"
          >
            {footerContent.contact.phone}
          </a>
        </li>
        
        <li className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
          <a 
            href={`mailto:${footerContent.contact.email}`}
            className="text-body text-neutral-300 hover:text-orange-400 transition-colors"
          >
            {footerContent.contact.email}
          </a>
        </li>
      </ul>
    </div>
  )
}
