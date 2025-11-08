import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6eU1pNQ8C9Z1S9vH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
              >
                Build apps at the speed of thought
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 text-lg text-gray-700"
              >
                Design, code, and launch full‑stack experiences with an AI pair‑builder that ships production‑ready UI and APIs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a href="#features" className="px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black">Explore features</a>
                <a href="#how" className="px-5 py-3 rounded-lg bg-white/80 backdrop-blur border border-gray-200 hover:bg-white">See how it works</a>
              </motion.div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <Stat number="10x" label="Faster delivery" />
                <Stat number="<5m" label="First prototype" />
                <Stat number="99.9%" label="Uptime" />
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-4 shadow-lg">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-100 via-white to-fuchsia-100 relative">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white"></div>
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1400&auto=format&fit=crop"
                  alt="Dashboard preview"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-sm text-gray-600">A polished starter with routing, auth stubs, and API examples included.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ number, label }) {
  return (
    <div className="rounded-lg bg-white/80 backdrop-blur border border-gray-200 p-4 text-center">
      <div className="text-2xl font-bold text-gray-900">{number}</div>
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
    </div>
  )
}
