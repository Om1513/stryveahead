interface StatProps {
  number: string
  label: string
  description?: string
  highlighted?: boolean | undefined
}

export default function Stat({ number, label, description, highlighted = false }: StatProps) {
  return (
    <div className={`text-center p-8 rounded-2xl transition-all duration-200 motion-reduce:transition-none ${
      highlighted 
        ? 'bg-gradient-hero text-white shadow-large scale-105' 
        : 'bg-white shadow-soft hover:shadow-large hover:-translate-y-1 motion-reduce:hover:translate-y-0'
    }`}>
      <div className={`text-4xl font-bold mb-2 font-poppins ${
        highlighted ? 'text-white' : 'text-neutral-900'
      }`}>
        {number}
      </div>
      
      <div className={`text-h6 font-semibold mb-2 font-poppins ${
        highlighted ? 'text-orange-100' : 'text-neutral-700'
      }`}>
        {label}
      </div>
      
      {description && (
        <p className={`text-body-sm ${
          highlighted ? 'text-orange-50' : 'text-neutral-500'
        }`}>
          {description}
        </p>
      )}
    </div>
  )
}
