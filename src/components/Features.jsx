import { Code2, Database, Server, LayoutDashboard } from 'lucide-react'

const features = [
  {
    icon: LayoutDashboard,
    title: 'Polished UI Kit',
    desc: 'Responsive components, dark mode ready, with smart defaults to move fast.'
  },
  {
    icon: Code2,
    title: 'Type-safe by default',
    desc: 'Optional TS templates and linting keep your codebase clean and reliable.'
  },
  {
    icon: Server,
    title: 'API first',
    desc: 'Ship endpoints before UI. Built-in FastAPI starter with examples.'
  },
  {
    icon: Database,
    title: 'Persistent data',
    desc: 'MongoDB integration prewired with schema helpers and auth stubs.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Everything you need to launch</h2>
          <p className="mt-3 text-gray-600">From idea to production in one flow.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
