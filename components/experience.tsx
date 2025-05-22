import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Operations Engineer",
    company: "Mad Mobile",
    period: "June 2022 - May 2024",
    location: "Tampa, FL (Remote)",
    description: [
      "Provided advanced technical support for the CAKE POS ecosystem (end user applications, infrastructure, payments), resolving critical technical incidents within SLA targets.",
      "Engineered a Docker containerized POS demonstration service, streamlining deployment for sales teams and reducing demo setup time by 40%.",
      "Automated critical workflows, including failed payment capture and customer notifications using Python and Bash, improving payment recovery rates by 25% and reducing manual effort.",
      "Led integration testing using Postman and collaborated within Jenkins-based CI/CD workflows, contributing to design validation and issue resolution for consistent software delivery.",
      "Collaborated with technical teams for third-party integrations (e.g., Uber Eats, DoorDash, Paytronix), resolving technical issues and ensuring seamless service operation."
    ],
  },
  {
    title: "Associate Systems Engineer",
    company: "SAKS Global",
    period: "August 2021 - June 2022",
    location: "Colombo, Sri Lanka",
    description: [
      "Spearheaded disaster recovery protocol design and inventory management system implementation, aligning IT infrastructure with ISO 27001 standards.",
      "Deployed and maintained virtualized infrastructure using Proxmox and VMware ESXi, achieving high availability for critical systems.",
      "Implemented and managed Nagios Core monitoring with SMTP alerts for real-time infrastructure visibility, reducing incident response time by 25%.",
      "Deployed and managed Nextcloud collaboration suite and Zimbra mail server, supporting 100+ daily users and ensuring secure data governance, contributing to a 30% reduction in B2B SaaS costs."
    ],
  },
  {
    title: "Computer Repair Technician",
    company: "Arc Tech Lanka (Pvt) Ltd",
    period: "June 2020 - October 2020",
    location: "Colombo, Sri Lanka",
    description: [
      "Repaired and maintained DELL desktops, laptops, and servers.",
      "Managed logistics operations at the service center, streamlining inventory and repair workflows."
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Professional Experience</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium mt-1">{exp.company}</CardDescription>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <Badge variant="outline" className="mb-1">
                      {exp.period}
                    </Badge>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}