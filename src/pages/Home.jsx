import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section classname="flex flex-col items-center justify-center flex-grow text-center py-24 px-6">
                <h1 className="text-5xl font-extrabold text-blue-600 mb-4">Build a stunning Resume for free</h1>
                <p className="text-lg text-gray-600 max-w-2xl mb-8">No login, no paywalls — just pick a template, fill your details, and download your resume instantly.</p>
                <Link to="/template" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">Start Building</Link>
            </section>
            {/* Features Section */}
            <section className="py-16 bg-white">
              <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Why Choose ResumeBuilder?
                </h2>
            
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { title: "Completely Free", desc: "No hidden charges, no subscriptions — build and download without paying." },
                    { title: "No Login Needed", desc: "Start editing right away, no signup or email required." },
                    { title: "Instant Download", desc: "Export your resume as PDF in one click." },
                    { title: "Modern Templates", desc: "Choose from sleek, ATS-friendly templates that get noticed." },
                  ].map((f, i) => (
                    <div key={i} className="bg-gray-50 shadow-sm rounded-xl p-6 text-center hover:shadow-md transition">
                      <h3 className="text-xl font-semibold mb-2 text-blue-600">{f.title}</h3>
                      <p className="text-gray-600">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
              
            {/* Footer */}
            <footer className="bg-gray-100 text-center py-4 border-t">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} ResumeBuilder — Made by Deepesh 💻
              </p>
            </footer>
        </div>
    )
}