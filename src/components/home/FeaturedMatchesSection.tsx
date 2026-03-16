import MatchCard from '../match/MatchCard'
import MatchFilters from '../match/MatchFilters'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import AddMatchForm from '../match/AddMatchForm'
import { useMatches } from '../../hooks/useMatches'

function FeaturedMatchesSection() {
  const {
    visibleMatches,
    activeFilter,
    setActiveFilter,
    addMatch,
    deleteMatch,
  } = useMatches()

  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Featured matches"
          title="Une première sélection de matchs marquants"
          description="Cette liste est maintenant interactive : tu peux filtrer les matchs affichés et en ajouter de nouveaux."
        />

        <AddMatchForm onAddMatch={addMatch} />

        <MatchFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          align="right"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleMatches.length > 0 ? (
            visibleMatches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                onDelete={() => deleteMatch(match.id)}
              />
            ))
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/40 p-8 text-sm text-slate-300">
              Aucun match ne correspond au filtre sélectionné.
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default FeaturedMatchesSection
