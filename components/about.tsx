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
                Holding certifications as an AWS Certified Solutions Architect Associate, AWS Certified SysOps Administrator Associate, and Microsoft Certified: Azure Administrator Associate, I possess a solid technical foundation. My practical experience includes engineering a Docker containerized POS demonstration service that reduced demo setup time by 40%, and automating critical workflows using Python and Bash to improve payment recovery rates by 25%. I've also been instrumental in troubleshooting and developing fixes for Java applications on Linux subsystems and configuring multi-datacenter high-availability environments using Proxmox and VMware ESXi.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I am passionate about leveraging automation to build scalable and resilient systems that solve real-world problems. Currently, I am expanding my expertise by pursuing a Graduate Certificate in Cloud Computing at Loyalist College, expected December 2025.
              </p>
</CardContent>

          </Card>
        </div>
      </div>
    </section>
  )
}
