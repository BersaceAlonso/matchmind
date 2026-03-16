import { useState } from 'react'
import type { Match, MatchIntensity, MatchStatus } from '../../types/match'

interface AddMatchFormProps {
  onAddMatch: (match: Match) => void
}

function AddMatchForm({ onAddMatch }: AddMatchFormProps) {
  const [title, setTitle] = useState('')
  const [competition, setCompetition] = useState('')
  const [season, setSeason] = useState('')
  const [intensity, setIntensity] = useState<MatchIntensity>('medium')
  const [status, setStatus] = useState<MatchStatus>('to-watch')
  const [note, setNote] = useState('8')
  const [description, setDescription] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedTitle = title.trim()
    const trimmedCompetition = competition.trim()
    const trimmedSeason = season.trim()
    const trimmedDescription = description.trim()

    if (
      !trimmedTitle ||
      !trimmedCompetition ||
      !trimmedSeason ||
      !trimmedDescription
    ) {
      return
    }

    const parsedNote = Number(note)

    if (Number.isNaN(parsedNote) || parsedNote < 0 || parsedNote > 10) {
      return
    }

    const newMatch: Match = {
      id: Date.now(),
      title: trimmedTitle,
      competition: trimmedCompetition,
      season: trimmedSeason,
      intensity,
      status,
      note: parsedNote,
      description: trimmedDescription,
    }

    onAddMatch(newMatch)

    setTitle('')
    setCompetition('')
    setSeason('')
    setIntensity('medium')
    setStatus('to-watch')
    setNote('8')
    setDescription('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-black/10"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">Ajouter un match</h3>
        <span className="text-sm text-slate-400">
          Formulaire de démonstration React
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-200">Titre</span>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Ex : Arsenal vs Liverpool"
            className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-emerald-400"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-200">
            Compétition
          </span>
          <input
            type="text"
            value={competition}
            onChange={(event) => setCompetition(event.target.value)}
            placeholder="Ex : Premier League"
            className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-emerald-400"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-200">Saison</span>
          <input
            type="text"
            value={season}
            onChange={(event) => setSeason(event.target.value)}
            placeholder="Ex : 2024-2025"
            className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-emerald-400"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-200">Note</span>
          <input
            type="number"
            min="0"
            max="10"
            step="1"
            value={note}
            onChange={(event) => setNote(event.target.value)}
            className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-emerald-400"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-200">Intensité</span>
          <select
            value={intensity}
            onChange={(event) =>
              setIntensity(event.target.value as MatchIntensity)
            }
            className="cursor-pointer rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-emerald-400"
          >
            <option value="low">Faible</option>
            <option value="medium">Moyenne</option>
            <option value="high">Élevée</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-200">Statut</span>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value as MatchStatus)}
            className="cursor-pointer rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-emerald-400"
          >
            <option value="to-watch">À voir</option>
            <option value="watched">Vu</option>
            <option value="favorite">Favori</option>
          </select>
        </label>
      </div>

      <label className="mt-4 flex flex-col gap-2">
        <span className="text-sm font-medium text-slate-200">Description</span>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows={4}
          placeholder="Décris en quelques mots pourquoi ce match est marquant."
          className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-emerald-400"
        />
      </label>

      <div className="mt-6">
        <button
          type="submit"
          className="cursor-pointer rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
        >
          Ajouter le match
        </button>
      </div>
    </form>
  )
}

export default AddMatchForm
