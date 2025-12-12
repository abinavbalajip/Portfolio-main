export default function Resume() {
    return (
        <section id="resume" className="py-8 md:py-12">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Resume</h2>
            <div className="bg-white/3 p-4 sm:p-6 md:p-8 rounded-lg text-center">
                <p className="text-gray-300 mb-6 md:mb-8 text-base sm:text-lg">
                    Download the resume for full details
                </p>

                <a
                    href="/resume.pdf"
                    download
                    className="inline-block bg-white text-[#0a00f2e] px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow text-sm sm:text-base"
                >
                    Download PDF
                </a>
            </div>
        </section>
    );
}
