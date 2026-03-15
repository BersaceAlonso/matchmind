import Container from '../ui/Container'

function HeroSection() {
  return (
    <section className="border-b border-slate-800/80">
      <Container>
        <div className="flex min-h-[70vh] flex-col justify-center py-16">
          <span className="mb-4 inline-flex w-fit rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
            MatchMind • football tracking experience
          </span>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Organise, analyse et revis tes plus grands matchs de football.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            MatchMind est une application premium pensée pour suivre les
            affiches marquantes, noter les matchs, classer ses favoris et
            retrouver rapidement les rencontres les plus mémorables.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
              Explorer la collection
            </button>

            <button className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800">
              Voir le tableau de bord
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
