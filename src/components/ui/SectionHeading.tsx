import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: ReactNode
}

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
          {title}
        </h2>
      </div>

      {description ? (
        <p className="max-w-md text-sm leading-6 text-slate-400">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
