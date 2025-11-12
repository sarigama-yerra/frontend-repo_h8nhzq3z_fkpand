export default function Showcase() {
  const projects = [
    {
      title: 'Nebula Finance',
      desc: 'A minimalist dashboard with cinematic depth and realtime graphs.',
      tags: ['React', 'Tailwind', 'D3'],
    },
    {
      title: 'Focus OS',
      desc: 'Ambient task system with soft glass panels and gentle motion.',
      tags: ['Next.js', 'Framer Motion'],
    },
    {
      title: 'Aurora Studio',
      desc: 'Creative tools suite with studio lighting and 4K rendering feels.',
      tags: ['TypeScript', 'WebGL'],
    },
  ]

  return (
    <section id="work" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Selected Work</h2>
          <p className="mt-3 text-gray-600">A few highlights across products, experiments, and client work.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-black/5 bg-white/70 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all"
            >
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/0 via-gray-900/5 to-gray-900/0" />
                </div>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-gray-900/5 text-gray-700 px-3 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
