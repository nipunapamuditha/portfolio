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
    I’m a Site Reliability Engineer specializing in cloud infrastructure, automation, and software engineering. I’m currently based in Toronto.
  </p>
  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
    With AWS and Azure certifications, I bring a strong technical foundation to every project. My experience spans implementing Docker solutions for POS systems, troubleshooting and developing fixes for Java applications on Linux subsystems (both POS device applications and cloud components), and configuring multi-datacenter high-availability environments with Proxmox and VMware.
  </p>
  <p className="text-lg text-gray-700 dark:text-gray-300">
    I’m passionate about automation and building efficient systems that solve real-world problems. I’m currently pursuing further education in Cloud Computing at Loyalist College to deepen my expertise.
  </p>
</CardContent>

          </Card>
        </div>
      </div>
    </section>
  )
}
