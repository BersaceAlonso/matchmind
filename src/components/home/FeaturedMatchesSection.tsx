import { useState, useEffect } from 'react'
import MatchCard from '../match/MatchCard'
import MatchFilters, { type MatchFilter } from '../match/MatchFilters'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { featuredMatches } from '../../data/featuredMatches'
import type { Match } from '../../types/match'
import AddMatchForm from '../match/AddMatchForm'

function FeaturedMatchesSection() {
  const [activeFilter, setActiveFilter] = useState<MatchFilter>('all')
  const [matches, setMatches] = useState<Match[]>(() => {
    const storedMatches = localStorage.getItem('matchmind-matches')

    if (storedMatches) {
      try {
        return JSON.parse(storedMatches)
      } catch {
        return featuredMatches
      }
    }
    return featuredMatches
  })

  useEffect(() => {
    localStorage.setItem('matchmind-matches', JSON.stringify(matches))
  }, [matches])

  const visibleMatches =
    activeFilter === 'all'
      ? matches
      : matches.filter((match) => match.status === activeFilter)

  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Featured matches"
          title="Une première sélection de matchs marquants"
          description="Cette liste est maintenant interactive : tu peux filtrer les matchs affichés et en ajouter de nouveaux."
        />

        <AddMatchForm
          onAddMatch={(newMatch) => {
            setMatches((currentMatches) => [newMatch, ...currentMatches])
            setActiveFilter('all')
          }}
        />

        <MatchFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          align="right"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleMatches.length > 0 ? (
            visibleMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
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
