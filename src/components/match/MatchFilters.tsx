import type { MatchStatus } from '../../types/match'

export type MatchFilter = 'all' | MatchStatus

interface MatchFiltersProps {
  activeFilter: MatchFilter
  onFilterChange: (filter: MatchFilter) => void
  align?: 'left' | 'right'
}

const filterOptions: Array<{ value: MatchFilter; label: string }> = [
  { value: 'all', label: 'Tous' },
  { value: 'to-watch', label: 'À voir' },
  { value: 'watched', label: 'Vu' },
  { value: 'favorite', label: 'Favoris' },
]

function MatchFilters({
  activeFilter,
  onFilterChange,
  align = 'right',
}: MatchFiltersProps) {
  const alignmentClassName = align === 'right' ? 'justify-end' : 'justify-start'

  return (
    <div className={`mt-10 flex items-center ${alignmentClassName} gap-6`}>
      <p className="text-sm text-slate-400">Filtrer les matchs</p>

      <div className="flex flex-wrap gap-3">
        {filterOptions.map((option) => {
          const isActive = option.value === activeFilter

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onFilterChange(option.value)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? 'bg-emerald-400 text-slate-950'
                  : 'border border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-500 hover:bg-slate-800'
              }`}
            >
              {option.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default MatchFilters
