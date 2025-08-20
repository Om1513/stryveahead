import Container from '@/components/container'
import TeamCard from './team-card'
import { teamContent } from '@/lib/data/content'

export default function Team() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Elements */}
      
      {/* Gradient dots pattern on the left */}
      <div className="absolute left-[-57px] top-[604px] w-[216px] h-[136px]">
        <svg width="159" height="136" viewBox="0 0 159 136" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="31" cy="8" r="8" fill="url(#paint0_linear)"/>
          <circle cx="71" cy="8" r="8" fill="url(#paint1_linear)"/>
          <circle cx="111" cy="8" r="8" fill="url(#paint2_linear)"/>
          <circle cx="151" cy="8" r="8" fill="url(#paint3_linear)"/>
          <circle cx="31" cy="48" r="8" fill="url(#paint4_linear)"/>
          <circle cx="31" cy="88" r="8" fill="url(#paint5_linear)"/>
          <circle cx="31" cy="128" r="8" fill="url(#paint6_linear)"/>
          <circle cx="71" cy="48" r="8" fill="url(#paint7_linear)"/>
          <circle cx="71" cy="88" r="8" fill="url(#paint8_linear)"/>
          <circle cx="71" cy="128" r="8" fill="url(#paint9_linear)"/>
          <circle cx="111" cy="48" r="8" fill="url(#paint10_linear)"/>
          <circle cx="111" cy="88" r="8" fill="url(#paint11_linear)"/>
          <circle cx="111" cy="128" r="8" fill="url(#paint12_linear)"/>
          <circle cx="151" cy="48" r="8" fill="url(#paint13_linear)"/>
          <circle cx="151" cy="88" r="8" fill="url(#paint14_linear)"/>
          <circle cx="151" cy="128" r="8" fill="url(#paint15_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="21.7305" y1="-1.30982" x2="40.9144" y2="18.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="61.7305" y1="-1.30982" x2="80.9144" y2="18.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint2_linear" x1="101.73" y1="-1.30982" x2="120.914" y2="18.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint3_linear" x1="141.73" y1="-1.30982" x2="160.914" y2="18.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint4_linear" x1="21.7305" y1="38.6902" x2="40.9144" y2="58.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint5_linear" x1="21.7305" y1="78.6902" x2="40.9144" y2="98.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint6_linear" x1="21.7305" y1="118.69" x2="40.9144" y2="138.055" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint7_linear" x1="61.7305" y1="38.6902" x2="80.9144" y2="58.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint8_linear" x1="61.7305" y1="78.6902" x2="80.9144" y2="98.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint9_linear" x1="61.7305" y1="118.69" x2="80.9144" y2="138.055" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint10_linear" x1="101.73" y1="38.6902" x2="120.914" y2="58.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint11_linear" x1="101.73" y1="78.6902" x2="120.914" y2="98.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint12_linear" x1="101.73" y1="118.69" x2="120.914" y2="138.055" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint13_linear" x1="141.73" y1="38.6902" x2="160.914" y2="58.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint14_linear" x1="141.73" y1="78.6902" x2="160.914" y2="98.0554" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
            <linearGradient id="paint15_linear" x1="141.73" y1="118.69" x2="160.914" y2="138.055" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F25227"/>
              <stop offset="1" stopColor="#E8AA29"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Background circle on the right */}
      <div className="absolute right-[72px] top-[108px] w-[496px] h-[576px] rounded-[80px] bg-neutral-600 opacity-5"></div>

      <Container>
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-[528px] flex-shrink-0">
            <div className="mb-8">
              <h2 className="text-[67px] font-bold leading-[80px] text-neutral-900 mb-8 font-asap">
                {teamContent.title}
              </h2>
              <p className="text-base font-normal leading-6 text-neutral-600 font-plus-jakarta">
                {teamContent.description}
              </p>
            </div>
          </div>

          {/* Right Grid - Team Cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center lg:max-w-[640px]">
            {/* Robby Jhony - Top Left */}
            <div className="justify-self-start">
              <TeamCard
                name={teamContent.members[0].name}
                title={teamContent.members[0].title}
                imageUrl={teamContent.members[0].imageUrl}
                featured={teamContent.members[0].featured || false}
              />
            </div>
            
            {/* Erlina Angel - Top Right */}
            <div className="justify-self-end">
              <TeamCard
                name={teamContent.members[1].name}
                title={teamContent.members[1].title}
                imageUrl={teamContent.members[1].imageUrl}
              />
            </div>
            
            {/* Ellisa Maryah - Bottom Left */}
            <div className="justify-self-start">
              <TeamCard
                name={teamContent.members[2].name}
                title={teamContent.members[2].title}
                imageUrl={teamContent.members[2].imageUrl}
              />
            </div>
            
            {/* Richo Night - Bottom Right */}
            <div className="justify-self-end">
              <TeamCard
                name={teamContent.members[3].name}
                title={teamContent.members[3].title}
                imageUrl={teamContent.members[3].imageUrl}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
