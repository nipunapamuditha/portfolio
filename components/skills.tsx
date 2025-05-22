import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
 {
  category: "Cloud & Infrastructure",
  skills: [
    "AWS", 
    "Azure", 
    "AWS CloudFormation", 
    "Amazon ECS", 
    "Terraform", 
    "Docker", 
    "Proxmox", 
    "VMware ESXi", 
    "MinION Object Storage", 
    "Windows Server", 
    "Linux", 
    "TCP/IP"
  ],
},
{
  category: "DevOps & CI/CD",
  skills: [
    "Continuous Integration", 
    "Continuous Delivery", 
    "Jenkins", 
    "Git", 
    "GitHub", 
    "IaC (Terraform)", 
    "Postman", 
    "Nagios", 
    "Graylog", 
    "Sentry", 
    "Incident Management"
  ],
},
{
  category: "Programming & Development",
  skills: [
    "Python", 
    "Go", 
    "JavaScript", 
    "TypeScript", 
    "Java", 
    "C", 
    "Bash", 
    "SQL", 
    "ROS"
  ],
},
{
  category: "Databases & Storage",
  skills: [
    "MongoDB", 
    "CouchDB", 
    "MySQL", 
    "PostgreSQL", 
    "Nextcloud"
  ],
},
{
  category: "Networking & Security",
  skills: [
    "Firewalls", 
    "Cisco Routers", 
    "TCP/IP", 
    "Zimbra Mail Server", 
    "ISO 27001", 
    "Disaster Recovery", 
    "Payment Card Processing"
  ],
},
{
  category: "Other Technologies",
  skills: [
    "Software Support", 
    "Azure AI Studio", 
    "Jira", 
    "Office 365", 
    "LLMs", 
    "Text-to-Speech APIs", 
    "RSS/API Integration"
  ],
},
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
