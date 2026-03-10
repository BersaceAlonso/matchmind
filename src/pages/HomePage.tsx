import Container from '../components/ui/Container'
import { featuredMatches } from '../data/featuredMatches'

function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
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

      <section className="py-16">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                Featured matches
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Une première sélection de matchs marquants
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-400">
              Cette liste est encore statique, mais elle prépare la future
              logique métier de l’application.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredMatches.map((match) => (
              <article
                key={match.id}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/10 backdrop-blur"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300">
                    {match.competition}
                  </span>

                  <span className="text-sm font-semibold text-emerald-300">
                    {match.note}/10
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {match.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Saison {match.season}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {match.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200">
                    Intensité : {match.intensity}
                  </span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200">
                    Statut : {match.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}

export default HomePage
