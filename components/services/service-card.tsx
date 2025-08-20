import { LucideIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="group h-full border-0 shadow-soft hover:shadow-large transition-all duration-200 hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-gradient-subtle rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <Icon className="h-8 w-8 text-orange-600" strokeWidth={1.5} />
        </div>
        
        <h3 className="text-h4 font-semibold text-neutral-900 mb-4 font-poppins">
          {title}
        </h3>
        
        <p className="text-body text-neutral-600 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
