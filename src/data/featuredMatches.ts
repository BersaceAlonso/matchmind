import type { Match } from '../types/match'

export const featuredMatches: Match[] = [
  {
    id: 1,
    title: 'Liverpool vs Manchester City',
    competition: 'Premier League',
    season: '2024-2025',
    intensity: 'high',
    status: 'watched',
    note: 9,
    description:
      'Un choc au sommet avec une forte intensité, beaucoup de transitions et une vraie dimension tactique.',
  },
  {
    id: 2,
    title: 'Real Madrid vs Barcelona',
    competition: 'LaLiga',
    season: '2024-2025',
    intensity: 'high',
    status: 'favorite',
    note: 10,
    description:
      'Un grand classique du football européen, mêlant pression, qualité technique et scénario fort.',
  },
  {
    id: 3,
    title: 'Milan vs Inter',
    competition: 'Serie A',
    season: '2024-2025',
    intensity: 'medium',
    status: 'to-watch',
    note: 8,
    description:
      'Un derby passionnant à suivre pour son contexte, son ambiance et les duels individuels.',
  },
]
