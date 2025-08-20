import { Check } from 'lucide-react'

interface FeatureItemProps {
  children: React.ReactNode
}

export default function FeatureItem({ children }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
        <Check className="h-4 w-4 text-orange-600" strokeWidth={2} />
      </div>
      <p className="text-body text-neutral-700 leading-relaxed">
        {children}
      </p>
    </div>
  )
}
