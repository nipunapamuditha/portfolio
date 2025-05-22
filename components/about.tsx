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
                I'm a Site Reliability Engineer based in Toronto, ON, passionate about building and maintaining reliable, scalable systems. My work mainly revolves around cloud infrastructure, automation, and solving technical challenges to keep systems running smoothly.
              </p>
<p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
 I'm certified in AWS (SAA and SysOps) and Azure (AZ-104), and I bring over two years of experience from my time at Mad Mobile, a leading POS provider in the U.S. There, I worked on investigating and patching software bugs, managing incidents, and optimizing performance. 
</p>

    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Outside of work, I enjoy building personal projects like Substack Co-Pilot, and contributing to open-source products like Jellyfin, a media server—where I’ve developed a containerized, torrent-based backend solution to streamline media delivery.
              </p>
    
</CardContent>

          </Card>
        </div>
      </div>
    </section>
  )
}
