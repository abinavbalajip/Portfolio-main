import Header from '../components/Header'

export const metadata = {
  title: 'Resume — ABINAV BALAJI P',
  description: 'Download or view the resume for ABINAV BALAJI P',
}

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f2e] via-[#0f1a4d] to-[#0a0f2e] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 relative">
        <Header />

        <section className="mt-8 md:mt-12 bg-white/3 p-4 sm:p-6 md:p-8 rounded-lg text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 md:mb-6">Resume</h1>

          <p className="text-gray-300 mb-6 md:mb-8 text-base sm:text-lg">Download the resume for full details</p>

          <a
            href="/api/download-resume"
            className="inline-block bg-white text-[#0a0f2e] px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow text-sm sm:text-base"
          >
            Download PDF
          </a>
        </section>
      </div>
    </main>
  )
}
