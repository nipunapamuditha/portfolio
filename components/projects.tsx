import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Ad Skipper - Chrome Extension",
    description:
      "Built Ad Skipper, a Chrome extension that uses LLMs to automatically detect and skip in-video sponsored segments on YouTube eliminating reliance on crowdsourced data like SponsorBlock and addressing a gap conventional ad blockers can't cover.",
    tags: ["Chrome Extension", "LLM", "JavaScript"],
    githubUrl: "https://github.com/nipunapamuditha/In-Video-Ad-Skipping-Chrome-Extension",
    liveUrl: "https://chromewebstore.google.com/detail/skip-in-video-ads/dclnaigapefcgpdkobpcofgifgpdfcnd",
  },
  {
    title: "Crop Recommendation and Monitoring Robot",
    description:
      "Developed a multipurpose agricultural robot designed to enhance cultivation efficiency through autonomous navigation, real-time environmental and soil monitoring, intelligent crop recommendations, and advanced data visualization—enabling smarter, resource-optimized farming from initial planning to established growth.",
    tags: ["IoT", "Machine Learning", "Agriculture"],
    githubUrl: "https://github.com/nipunapamuditha/research-project-",
    liveUrl: "https://ieeexplore.ieee.org/document/10025179",
  },
  {
    title: "Substack CoPilot",
    description:
      "A tool designed to convert posts and articles from your favorite Substack journalists and authors into easily digestible audio briefings.",
    tags: ["Text-to-Speech", "API Integration", "Web App"],
    githubUrl: "https://github.com/nipunapamuditha/newsx",
    liveUrl: "http://demo.newsloop.xyz/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <span>Demo</span>
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
