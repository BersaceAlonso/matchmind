export type MatchIntensity = 'low' | 'medium' | 'high'
export type MatchStatus = 'to-watch' | 'watched' | 'favorite'

export interface Match {
  id: number
  title: string
  competition: string
  season: string
  intensity: MatchIntensity
  status: MatchStatus
  note: number
  description: string
}
