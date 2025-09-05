import Image from 'next/image'

interface LargeTeamCardProps {
  name: string
  title: string
  imageUrl: string
  featured?: boolean
  bio?: string
}

export default function LargeTeamCard({ 
  name, 
  title, 
  imageUrl,
  featured = false,
  bio
}: LargeTeamCardProps) {
  return (
    <div 
      className="group flex w-full max-w-[640px] p-8 flex-col items-center gap-8 rounded-2xl bg-white shadow-[24px_30px_51px_0_rgba(0,0,0,0.10)] transition-all duration-300 ease-out hover:shadow-[24px_30px_51px_0_rgba(0,0,0,0.15)] hover:scale-[1.02] focus-within:shadow-[24px_30px_51px_0_rgba(0,0,0,0.15)] focus-within:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:focus-within:transform-none active:scale-[0.98] touch:active:scale-[0.98]"
      tabIndex={0}
      role="article"
      aria-label={`Team member: ${name}, ${title}`}
    >
      {/* Image */}
      <div className="relative w-full max-w-[480px] h-[400px] rounded-2xl overflow-hidden">
        <Image 
          src={imageUrl}
          alt={`${name} - ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, 480px"
          className="object-contain"
        />
      </div>
      
      {/* Content */}
      <div className="flex flex-col items-center gap-6 self-stretch">
        <div className="flex flex-col items-center gap-6 self-stretch">
          <div className="flex flex-col items-center gap-4 self-stretch">
            <div className="self-stretch text-center font-inter text-[32px] font-bold leading-8 text-neutral-900">
              {name}
            </div>
            <div className={`self-stretch text-center font-inter text-xl font-normal leading-7 ${
              featured 
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent' 
                : 'text-neutral-600'
            }`}>
              {title}
            </div>
            {bio && (
              <div className="self-stretch text-center font-inter text-lg font-normal leading-7 text-neutral-500 mt-4 max-w-[500px]">
                {bio}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
