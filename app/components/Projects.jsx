const projects = [
  {
    id: 1,
    title: 'Vulnerability Detector in Drone',
    description: 'AI-powered security system for detecting and analyzing vulnerabilities in drone networks and communications.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'ROS']
  },
  {
    id: 3,
    title: 'Realtime Collaboration App',
    description: 'Realtime rich-text editor with presence and conflict-free merging.',
    tech: ['Next.js', 'WebSocket', 'Yjs']
  },
  {
    id: 4,
    title: 'Performance E-commerce',
    description: 'Fast, accessible storefront with critical-path optimization.',
    tech: ['Next.js', 'Vercel', 'Stripe']
  }
]

function Tag({ children }) {
  return <span className="text-xs bg-white/8 px-2 py-1 rounded">{children}</span>
}

export default function Projects() {
  return (
    <section id="projects" className="py-8 md:py-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Projects</h2>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        {projects.map(p => (
          <article key={p.id} className="project-card p-4 sm:p-5 rounded-xl border border-white/5 bg-gradient-to-br from-white/2 to-transparent cursor-pointer">
            <h3 className="font-bold text-base sm:text-lg">{p.title}</h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map(t => <Tag key={t}>{t}</Tag>)}
            </div>
            <div className="mt-4">
              <a className="inline-block text-xs sm:text-sm text-white/90 border border-white/10 px-3 py-2 rounded hover:bg-white hover:text-[#0a0f2e] transition" href={`/projects/${p.id}`}>View case study</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
