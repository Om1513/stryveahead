import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { footerContent } from '@/lib/data/content'

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
}

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {footerContent.socialLinks.map((social) => {
        const Icon = socialIcons[social.id as keyof typeof socialIcons]
        return (
          <a
            key={social.id}
            href={social.href}
            className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors group"
            aria-label={social.label}
          >
            <Icon className="h-5 w-5 text-neutral-400 group-hover:text-white transition-colors" />
          </a>
        )
      })}
    </div>
  )
}
