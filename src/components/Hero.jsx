import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 backdrop-blur-xl px-3 py-1 text-xs text-gray-600 shadow-[0_8px_30px_rgb(0,0,0,0.04)] pointer-events-none">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]" />
            Available for select projects in 2025
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gray-900">
            Building calm, cinematic web experiences
          </h1>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            I craft ultra-clean interfaces with glass-like surfaces, soft lighting, and a focus on performance. Thoughtful motion, modern typography, and a refined sense of depth.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium shadow-lg shadow-gray-900/10 hover:bg-black/90 transition-colors"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-black/10 bg-white/70 backdrop-blur-xl px-6 py-3 text-sm font-medium text-gray-800 hover:bg-white transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/20 to-white" />
    </section>
  )
}
