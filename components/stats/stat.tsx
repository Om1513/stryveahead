interface StatProps {
  number: string
  label: string
  highlighted?: boolean | undefined
  onMouseEnter?: () => void
}

export default function Stat({ number, label, highlighted = false, onMouseEnter }: StatProps) {
  return (
    <div 
      className={`relative w-[293px] h-[152px] rounded-2xl shadow-[24px_30px_51px_0_rgba(0,0,0,0.10)] mx-auto transition-all duration-200 ease-out motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${
        highlighted 
          ? 'bg-gradient-to-br from-[#F25227] to-[#E8AA29] shadow-[24px_30px_51px_0_rgba(0,0,0,0.15)]' 
          : 'bg-white'
      }`}
      tabIndex={0}
      role="article"
      aria-label={`Statistic: ${number} ${label}`}
      onMouseEnter={onMouseEnter}
    >
      {/* Decorative Background Elements for Highlighted Card */}
      {highlighted && (
        <>
          <div className="absolute -left-[58px] top-9 w-[164px] h-[190px] rounded-[80px] bg-white opacity-5" />
          <div className="absolute right-[-58px] -top-[102px] w-[164px] h-[190px] rounded-[20px] bg-white opacity-5" />
        </>
      )}

      {/* Decorative Background Elements for Regular Cards */}
      {!highlighted && (
        <>
          <div className="absolute -left-[58px] top-9 w-[164px] h-[190px] rounded-[80px] bg-white opacity-5" />
          <div className="absolute right-[-58px] -top-[102px] w-[164px] h-[190px] rounded-[20px] bg-white opacity-5" />
        </>
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-8">
        <div className="flex flex-col items-center gap-2">
          <div 
            className={`font-asap font-bold text-[50px] leading-[56px] transition-colors duration-200 ease-out motion-reduce:transition-none ${
              highlighted ? 'text-white' : 'text-[#3C3C3C]'
            }`}
          >
            {number}
          </div>
          <div 
            className={`font-asap font-bold text-[21px] leading-[24px] text-center transition-colors duration-200 ease-out motion-reduce:transition-none ${
              highlighted ? 'text-white' : 'text-[#6A6A6A]'
            }`}
          >
            {label}
          </div>
        </div>
      </div>
    </div>
  )
}
