import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">About Me</h2>
          <Card>
          <CardContent className="pt-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                I'm a dedicated Site Reliability Engineer (SRE) based in Toronto, ON, with a strong focus on cloud infrastructure, automation, and technical support. My expertise spans across various cloud platforms and technologies, ensuring robust and efficient system operations.
              </p>
<p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
  I hold AWS SAA, AWS SysOps, and AZ-104 certifications. With 2+ years as a Site Reliability Engineer at Mad Mobile, one of the largest POS service providers in the U.S., I focused on enhancing system reliability, investigating and patching software bugs, managing incidents, and optimizing performance. In my free time, I build projects like Substack Co-Pilot (an AI news aggregator with Large Language Model-powered audio briefings) and contribute to open-source tools like Jellyfin, developing a containerized torrent-based backend solution for media servers.
</p>
    
</CardContent>

          </Card>
        </div>
      </div>
    </section>
  )
}
