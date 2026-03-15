import MatchCard from '../match/MatchCard'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { featuredMatches } from '../../data/featuredMatches'

function FeaturedMatchesSection() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Featured matches"
          title="Une première sélection de matchs marquants"
          description="Cette liste est encore statique mais elle prépare la future logique métier de l'application."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturedMatchesSection
