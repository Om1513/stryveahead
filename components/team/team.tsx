import Container from '@/components/container'
import TeamCard from './team-card'
import { teamContent } from '@/lib/data/content'

export default function Team() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold text-neutral-900 mb-4 font-poppins">
            {teamContent.title}
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            {teamContent.description}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamContent.members.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              title={member.title}
              bio={member.bio}
              email={member.email}
              phone={member.phone}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
