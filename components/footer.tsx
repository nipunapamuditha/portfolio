import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Nipuna Karunarathna
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-400">SRE @ Mad Mobile | AWS & Azure Certified</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/nipunapamuditha/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/nipunak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="mailto:nipunak99@gmail.com"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Nipuna Karunarathna. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
