import Header from '../../components/Header'

export default function ProjectOne() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f2e] via-[#0f1a4d] to-[#0a0f2e] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 relative">
        <Header />

        <article className="mt-8 md:mt-12">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Vulnerability Detector in Drone</h1>
          <p className="text-sm sm:text-base text-gray-300 mb-6">An AI-powered security system designed to detect and analyze vulnerabilities in drone networks and communications in real-time.</p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">Problem</h2>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            With the increasing deployment of drones in critical infrastructure, security, and commercial applications, there's a growing concern about potential vulnerabilities in drone communication systems, GPS spoofing, and unauthorized access. Traditional security measures were reactive and often failed to detect sophisticated attacks in real-time.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">Approach</h2>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            Developed an intelligent security framework that combines machine learning and computer vision to monitor drone systems:
          </p>
          <ul className="text-sm sm:text-base text-gray-300 list-disc list-inside space-y-2 mb-4 pl-2">
            <li>Implemented deep learning models using TensorFlow to detect anomalous patterns in drone telemetry data</li>
            <li>Integrated OpenCV for real-time video stream analysis to identify unauthorized interference</li>
            <li>Built a ROS (Robot Operating System) integration for seamless monitoring of multiple drone units</li>
            <li>Created a Python-based dashboard for real-time threat visualization and alerts</li>
            <li>Developed automated response protocols to mitigate detected vulnerabilities</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">Impact</h2>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            The system significantly enhanced drone security across multiple deployment scenarios:
          </p>
          <ul className="text-sm sm:text-base text-gray-300 list-disc list-inside space-y-2 mb-4 pl-2">
            <li>Achieved 94% accuracy in detecting GPS spoofing attempts</li>
            <li>Reduced unauthorized access incidents by 87% in field testing</li>
            <li>Enabled real-time threat response with average detection time under 2 seconds</li>
            <li>Successfully deployed in 3 commercial drone fleets for infrastructure inspection</li>
            <li>Improved overall system reliability and compliance with security standards</li>
          </ul>

          <div className="mt-8">
            <a href="/projects" className="text-sm sm:text-base text-white/90 underline">← Back to Projects</a>
          </div>
        </article>
      </div>
    </main>
  )
}
