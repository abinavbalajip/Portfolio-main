import Header from '../components/Header'
import Projects from '../components/Projects'

export const metadata = {
  title: 'Projects — ABINAV BALAJI P',
  description: 'My portfolio projects and work',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f2e] via-[#0f1a4d] to-[#0a0f2e] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-10 relative">
        <Header />
        <Projects />
      </div>
    </main>
  )
}
