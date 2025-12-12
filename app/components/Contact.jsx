export default function Contact(){
  return (
    <section id="contact" className="py-8 md:py-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-sm md:text-base text-gray-300 mb-4">Interested in working together? Reach out via email or on LinkedIn.</p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a className="bg-white text-[#0a0f2e] px-4 py-2 rounded font-semibold hover:shadow-lg transition-shadow text-center text-sm sm:text-base" href="https://mail.google.com/mail/?view=cm&fs=1&to=abinav1518@gmail.com" target="_blank" rel="noopener noreferrer">Email me</a>
        <a className="bg-white text-[#0a0f2e] px-4 py-2 rounded font-semibold hover:shadow-lg transition-shadow text-center text-sm sm:text-base" href="https://www.linkedin.com/in/abinav-balaji-p-8b6241292/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}
