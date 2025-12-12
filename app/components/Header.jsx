'use client'

import { useState } from 'react'

export default function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative flex items-center justify-between py-4 md:py-6">
      <a href="/" className="text-xl md:text-2xl font-bold hover:opacity-80">ABINAV BALAJI P</a>
      <div className="flex items-center gap-6">
        <nav className="space-x-4 text-sm opacity-90 hidden md:block">
          <a href="/" className="nav-link">Home</a>
          <a href="/projects" className="nav-link">Projects</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/resume" className="nav-link">Resume</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-[#0a0f2e] border-t border-white/10 md:hidden z-50">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <a href="/" className="text-white hover:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="/projects" className="text-white hover:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="/about" className="text-white hover:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="/resume" className="text-white hover:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>Resume</a>
            <a href="/contact" className="text-white hover:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </nav>
      )}
    </header>
  )
}
