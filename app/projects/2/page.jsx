import Header from '../../components/Header'

export default function ProjectTwo(){
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f2e] via-[#0f1a4d] to-[#0a0f2e] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 relative">
        <Header />

        <article className="mt-8 md:mt-12">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Realtime Collaboration App</h1>
          <p className="text-sm sm:text-base text-gray-300 mb-6">Realtime rich-text editor with presence and conflict-free merging. (Case study placeholder)</p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">Problem</h2>
          <p className="text-sm sm:text-base text-gray-300">(Describe the product need and user pain.)</p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">Approach</h2>
          <p className="text-sm sm:text-base text-gray-300">(Architecture, libraries, synchronization approach.)</p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">Impact</h2>
          <p className="text-sm sm:text-base text-gray-300">(Quantify collaboration metrics, retention, and performance gains.)</p>

          <div className="mt-8">
            <a href="/projects" className="text-sm sm:text-base text-white/90 underline">← Back to Projects</a>
          </div>
        </article>
      </div>
    </main>
  )
}
