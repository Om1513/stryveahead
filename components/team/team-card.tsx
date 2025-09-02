

interface TeamCardProps {
  name: string
  title: string
  imageUrl: string
  featured?: boolean
  bio?: string
}

export default function TeamCard({ 
  name, 
  title, 
  featured = false,
  bio
}: TeamCardProps) {
  return (
    <div 
      className="group flex w-full max-w-[293px] sm:w-[293px] p-4 flex-col items-start gap-6 rounded-2xl bg-white shadow-[24px_30px_51px_0_rgba(0,0,0,0.10)] transition-all duration-300 ease-out hover:shadow-[24px_30px_51px_0_rgba(0,0,0,0.15)] hover:scale-[1.02] focus-within:shadow-[24px_30px_51px_0_rgba(0,0,0,0.15)] focus-within:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:focus-within:transform-none active:scale-[0.98] touch:active:scale-[0.98]"
      tabIndex={0}
      role="article"
      aria-label={`Team member: ${name}, ${title}`}
    >
      {/* Image */}
      <div className="relative w-full max-w-[261px] sm:w-[261px] h-[144px] rounded-2xl overflow-hidden">
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <div className="text-center text-gray-600 px-4">
            <div className="text-xl font-bold mb-2">{name}</div>
            <div className="text-base font-semibold mb-2">{title}</div>
            <div className="text-sm opacity-75">StryveAhead</div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-col items-center gap-6 self-stretch">
        <div className="flex flex-col items-start gap-6 self-stretch">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <div className="self-stretch text-center font-asap text-[21px] font-bold leading-6 text-neutral-900">
              {name}
            </div>
            <div className={`self-stretch text-center font-plus-jakarta text-base font-normal leading-6 ${
              featured 
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent' 
                : 'text-neutral-600'
            }`}>
              {title}
            </div>
            {bio && (
              <div className="self-stretch text-center font-plus-jakarta text-sm font-normal leading-5 text-neutral-500 mt-2">
                {bio}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
