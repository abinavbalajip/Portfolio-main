import Header from '../../components/Header'

export default function ProjectThree(){
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f2e] via-[#0f1a4d] to-[#0a0f2e] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 relative">
        <Header />

        <article className="mt-8 md:mt-12">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Performance E-commerce</h1>
          <p className="text-sm sm:text-base text-gray-300 mb-6">Fast, accessible storefront with critical-path optimization. (Case study placeholder)</p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">Problem</h2>
          <p className="text-sm sm:text-base text-gray-300">(Navigation and conversion bottlenecks affecting revenue.)</p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">Approach</h2>
          <p className="text-sm sm:text-base text-gray-300">(Performance budgeting, code-splitting, image optimization.)</p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">Impact</h2>
          <p className="text-sm sm:text-base text-gray-300">(Faster page loads, higher conversion, improved Core Web Vitals.)</p>

          <div className="mt-8">
            <a href="/projects" className="text-sm sm:text-base text-white/90 underline">← Back to Projects</a>
          </div>
        </article>
      </div>
    </main>
  )
}
