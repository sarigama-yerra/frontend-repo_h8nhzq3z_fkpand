import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <section id="about" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About</h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  I’m a software developer focused on crafting interfaces that feel effortless. My work blends modern web tech with a cinematic sense of space — glass panels, soft shadows, gentle reflections, and subtle motion.
                </p>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  I work end-to-end: research, design systems, front-end engineering, and performance tuning. Tools I love include React, TypeScript, Tailwind, Framer Motion, and WebGL.
                </p>
              </div>
              <div>
                <div className="rounded-2xl border border-black/5 bg-white/70 backdrop-blur-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <dl className="grid grid-cols-2 gap-6">
                    <div>
                      <dt className="text-sm text-gray-600">Experience</dt>
                      <dd className="text-xl font-semibold">7+ years</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-600">Focus</dt>
                      <dd className="text-xl font-semibold">Product UI</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-600">Stack</dt>
                      <dd className="text-xl font-semibold">React • TS • Node</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-600">Location</dt>
                      <dd className="text-xl font-semibold">Remote</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="rounded-2xl border border-black/5 bg-white/70 backdrop-blur-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s build something calm</h2>
              <p className="mt-3 text-gray-600">Reach out for collaborations, consulting, or product work.</p>
              <form className="mt-8 grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Your name" className="col-span-2 sm:col-span-1 rounded-xl border border-black/10 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900/10" />
                <input type="email" placeholder="Email address" className="col-span-2 sm:col-span-1 rounded-xl border border-black/10 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900/10" />
                <textarea rows="4" placeholder="Message" className="col-span-2 rounded-xl border border-black/10 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900/10" />
                <div className="col-span-2">
                  <button type="button" className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium shadow-lg shadow-gray-900/10 hover:bg-black/90 transition-colors">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
