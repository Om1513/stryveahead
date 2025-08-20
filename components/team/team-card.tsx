import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone } from 'lucide-react'

interface TeamCardProps {
  name: string
  title: string
  bio: string
  email?: string | undefined
  phone?: string | undefined
  imageUrl: string
}

export default function TeamCard({ 
  name, 
  title, 
  bio, 
  email, 
  phone, 
  imageUrl 
}: TeamCardProps) {
  return (
    <Card className="group h-full border-0 shadow-soft hover:shadow-large transition-all duration-200 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <CardContent className="p-0">
        {/* Photo */}
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <Image
            src={imageUrl}
            alt={`${name}, ${title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-h5 font-semibold text-neutral-900 mb-1 font-poppins">
            {name}
          </h3>
          
          <p className="text-body font-medium text-orange-600 mb-3">
            {title}
          </p>
          
          <p className="text-body-sm text-neutral-600 leading-relaxed mb-4">
            {bio}
          </p>
          
          {/* Contact Info */}
          {(email || phone) && (
            <div className="space-y-2 pt-4 border-t border-neutral-100">
              {email && (
                <a 
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-body-sm text-neutral-500 hover:text-orange-600 transition-colors group/link"
                >
                  <Mail className="h-4 w-4" />
                  <span className="group-hover/link:underline">{email}</span>
                </a>
              )}
              
              {phone && (
                <a 
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 text-body-sm text-neutral-500 hover:text-orange-600 transition-colors group/link"
                >
                  <Phone className="h-4 w-4" />
                  <span className="group-hover/link:underline">{phone}</span>
                </a>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
