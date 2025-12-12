'use client'

import { useState } from 'react'

const certificates = [
  {
    id: 1,
    name: 'Infosys Springboard',
    category: 'Professional Development Program',
    description: 'Comprehensive professional development program by Infosys focusing on emerging technologies and industry-relevant skills.',
    skills: ['Software Development', 'Problem Solving', 'Industry Best Practices', 'Professional Skills'],
    issueDate: '2024'
  },
  {
    id: 2,
    name: 'Oracle APEX Cloud Development',
    category: 'Cloud Application Development',
    description: 'Professional certification in Oracle Application Express (APEX) for building scalable web applications on Oracle Cloud infrastructure.',
    skills: ['Oracle APEX', 'Cloud Development', 'Database Management', 'Web Application Development'],
    issueDate: '2024'
  }
]

export default function About() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="about" className="py-8 md:py-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">About</h2>

      <div className="space-y-4 md:space-y-6">
        <div className="bg-white/5 p-4 sm:p-6 rounded-lg border border-white/10">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Career Objective</h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            As a Mechatronics Engineering graduate, I am seeking opportunities to leverage my interdisciplinary background in mechanical systems, electronics, and control systems to excel in software development roles. My unique perspective from mechatronics enables me to approach software challenges with a systems-thinking mindset, bridging the gap between hardware and software to create innovative solutions. I am passionate about applying my problem-solving skills and technical expertise to develop cutting-edge applications in robotics, automation, AI, and embedded systems.
          </p>
        </div>

        <div>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            I'm a full-stack developer with a background in building thoughtful UIs and scalable backends. I focus on performance, accessibility and clear product thinking. I enjoy mentoring and contributing to open-source.
          </p>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Certifications</h3>
          <div className="grid gap-3 md:gap-4 md:grid-cols-2">
            {certificates.map(cert => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="bg-white/5 p-3 sm:p-4 rounded-lg border border-white/10 hover:border-white/30 transition-all cursor-pointer hover:bg-white/10"
              >
                <h4 className="font-semibold text-sm sm:text-base text-white mb-2">{cert.name}</h4>
                <p className="text-xs sm:text-sm text-gray-400">{cert.category}</p>
                <p className="text-xs text-gray-500 mt-2">Click to view details</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-gradient-to-br from-[#0f1a4d] to-[#0a0f2e] p-4 sm:p-6 md:p-8 rounded-xl max-w-2xl w-full border border-white/20 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white pr-4">{selectedCert.name}</h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-400 hover:text-white text-2xl flex-shrink-0"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <p className="text-sm sm:text-base text-gray-400 mb-2">{selectedCert.category}</p>
            <p className="text-xs sm:text-sm text-gray-500 mb-4 md:mb-6">Issued: {selectedCert.issueDate}</p>

            <div className="mb-4 md:mb-6">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Description</h4>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{selectedCert.description}</p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Skills Covered</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCert.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-white/10 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-300 border border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
