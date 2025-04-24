import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Operations Engineer",
    company: "Mad Mobile",
    period: "June 2022 - May 2024",
    location: "Tampa, FL (Remote)",
    description: [
      "Implemented a browser-based Docker POS solution enabling seamless live demos for webview POS systems.",
      "Automated backup processes for legacy POS services using AWS SDK, Session Manager, and Bash scripts, ensuring cloud service compatability for older POS hardware generations.",
      "Developed a Python tool to efficiently track and verify payment statuses across multiple databases, snowflake and payment gateway, proactively identifying and troubleshooting discrepancies.",
      "Worked with integration teams at Uber Eats, DoorDash, Paytronix, 7shifts, and Orca to update REST APIs and promptly resolve cross-platform issues.",
    ],
  },
  {
    title: "Associate System Engineer",
    company: "SAKS",
    period: "August 2021 - June 2022",
    location: "Colombo, Sri Lanka",
    description: [
      "Configured Nagios Core monitoring for multi-datacenter networks and servers, integrating SNMP alerts and automated email notifications.",
      "Deployed Nextcloud, Zimbra mail, and Snipe-IT asset management system with high availability, reducing cloud costs by 30%.",
      "Supported successful ISO 27001 certification, strengthening organizational security compliance.",
    ],
  },
  {
    title: "Computer Repair Technician",
    company: "Arc Tech Lanka (Pvt) Ltd",
    period: "June 2020 - October 2020",
    location: "Colombo, Sri Lanka",
    description: [
      "Repaired DELL desktops, laptops, and servers.",
      "Managed logistics operations at the service center.",
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
