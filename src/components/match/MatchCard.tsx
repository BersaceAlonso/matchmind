import { useState } from 'react'
import type { Match, MatchIntensity, MatchStatus } from '../../types/match'

interface MatchCardProps {
  match: Match
  onDelete: () => void
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

function MatchCard({ match, onDelete }: MatchCardProps) {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false)

  const intensityLabel = intensityLabelMap[match.intensity]
  const intensityClassName = intensityClassMap[match.intensity]

  const statusLabel = statusLabelMap[match.status]
  const statusClassName = statusClassMap[match.status]

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/10 backdrop-blur transition hover:border-slate-700 hover:bg-slate-900">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex items-center justify-center rounded-full border border-slate-700 px-3 py-1 text-xs font-medium uppercase tracking-wide leading-none text-slate-300">
          {match.competition}
        </span>

        <span className="text-sm font-semibold text-emerald-300">
          {match.note}/10
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">{match.title}</h3>

      <p className="mt-2 text-sm text-slate-400">Saison {match.season}</p>

      <p className="mt-4 text-sm leading-7 text-slate-300 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
        {match.description}
      </p>

      <div className="mt-auto pt-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium leading-none ${intensityClassName}`}
            >
              Intensité : {intensityLabel}
            </span>

            <span
              className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium leading-none ${statusClassName}`}
            >
              Statut : {statusLabel}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsConfirmingDelete(true)}
            aria-label={`Supprimer ${match.title}`}
            className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/80 text-slate-400 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-300"
          >
            <span aria-hidden="true" className="text-base leading-none">
              ×
            </span>
          </button>
        </div>
      </div>

      <div
        className={`absolute inset-0 z-10 flex items-end p-4 backdrop-blur-sm transition-all duration-300 ${
          isConfirmingDelete
            ? 'bg-slate-950/70 opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className={`w-full rounded-2xl border border-red-500/20 bg-slate-950/95 p-4 shadow-xl shadow-black/30 transition-all duration-300 ${
            isConfirmingDelete
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0'
          }`}
        >
          <p className="text-sm font-semibold text-white">
            Supprimer ce match ?
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            Cette action retirera définitivement la carte de ta collection
            actuelle.
          </p>

          <div className="mt-4 flex flex-wrap justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsConfirmingDelete(false)}
              className="cursor-pointer rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
            >
              Annuler
            </button>

            <button
              type="button"
              onClick={onDelete}
              className="cursor-pointer rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-400"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default MatchCard
