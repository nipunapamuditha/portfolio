import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Nipuna Karunarathna
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400">
              SRE @ Mad Mobile | AWS & Azure Certified
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Building solutions that just work
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/nipunapamuditha/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/nipunapamuditha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="mailto:nipunak99@gmail.com"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-800">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Nipuna Karunarathna"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            className="animate-bounce text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <ArrowDown size={24} />
            <span className="sr-only">Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  )
}
