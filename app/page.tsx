import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
