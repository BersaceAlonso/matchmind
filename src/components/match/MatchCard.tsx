import type { Match, MatchIntensity, MatchStatus } from '../../types/match'

interface MatchCardProps {
  match: Match
}

const intensityLabelMap: Record<MatchIntensity, string> = {
  low: 'Faible',
  medium: 'Moyenne',
  high: 'Élevée',
}

const intensityClassMap: Record<MatchIntensity, string> = {
  low: 'bg-sky-500/10 text-sky-300 ring-1 ring-inset ring-sky-500/20',
  medium: 'bg-amber-500/10 text-amber-300 ring-1 ring-inset ring-amber-500/20',
  high: 'bg-rose-500/10 text-rose-300 ring-1 ring-inset ring-rose-500/20',
}

const statusLabelMap: Record<MatchStatus, string> = {
  'to-watch': 'À voir',
  watched: 'Vu',
  favorite: 'Favori',
}

const statusClassMap: Record<MatchStatus, string> = {
  'to-watch': 'bg-slate-800 text-slate-200 ring-1 ring-inset ring-slate-700/80',
  watched:
    'bg-emerald-500/10 text-emerald-300 ring-1 ring-inset ring-emerald-500/20',
  favorite:
    'bg-fuchsia-500/10 text-fuchsia-300 ring-1 ring-inset ring-fuchsia-500/20',
}

function MatchCard({ match }: MatchCardProps) {
  const intensityLabel = intensityLabelMap[match.intensity]
  const intensityClassName = intensityClassMap[match.intensity]

  const statusLabel = statusLabelMap[match.status]
  const statusClassName = statusClassMap[match.status]

  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/10 backdrop-blur transition hover:border-slate-700 hover:bg-slate-900">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300">
          {match.competition}
        </span>

        <span className="text-sm font-semibold text-emerald-300">
          {match.note}/10
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">{match.title}</h3>

      <p className="mt-2 text-sm text-slate-400">Saison {match.season}</p>

      <p className="mt-4 text-sm leading-6 text-slate-300">
        {match.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${intensityClassName}`}
        >
          Intensité : {intensityLabel}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${statusClassName}`}
        >
          Statut : {statusLabel}
        </span>
      </div>
    </article>
  )
}

export default MatchCard
