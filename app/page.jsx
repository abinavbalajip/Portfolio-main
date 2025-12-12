import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f2e] via-[#0f1a4d] to-[#0a0f2e] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-10 relative">
        <Header />
        <Hero />
        <Projects />
        <About />
        <Resume />
        <Contact />
      </div>
    </main>
  )
}
