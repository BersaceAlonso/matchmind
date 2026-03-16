import { useState, useEffect, useMemo } from 'react'
import { featuredMatches } from '../data/featuredMatches'
import type { Match } from '../types/match'

export type MatchFilter = 'all' | 'to-watch' | 'watched' | 'favorite'

export function useMatches() {
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

  const [activeFilter, setActiveFilter] = useState<MatchFilter>('all')

  useEffect(() => {
    localStorage.setItem('matchmind-matches', JSON.stringify(matches))
  }, [matches])

  function addMatch(newMatch: Match) {
    setMatches((currentMatches) => [newMatch, ...currentMatches])
    setActiveFilter('all')
  }

  const visibleMatches = useMemo(() => {
    if (activeFilter === 'all') {
      return matches
    }

    return matches.filter((match) => match.status === activeFilter)
  }, [matches, activeFilter])

  return {
    matches,
    visibleMatches,
    activeFilter,
    setActiveFilter,
    addMatch,
  }
}
