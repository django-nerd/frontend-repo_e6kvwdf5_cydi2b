export default function HowItWorks() {
  const steps = [
    {
      title: 'Describe your idea',
      desc: 'Tell the assistant what you want to build — goals, features, vibe.'
    },
    {
      title: 'It scaffolds everything',
      desc: 'Backend routes, database schemas, and a beautiful UI generated in minutes.'
    },
    {
      title: 'Iterate in real-time',
      desc: 'Preview instantly, tweak copy and layout, and keep shipping.'
    }
  ]

  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">How it works</h2>
          <p className="mt-3 text-gray-600">Three simple steps from idea to production.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold text-gray-900">{s.title}</div>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
