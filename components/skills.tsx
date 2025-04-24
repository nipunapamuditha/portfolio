import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS CloudFormation", "Amazon ECS", "Azure", "Docker", "Proxmox", "MinION Object Storage"],
  },
  {
    category: "DevOps & CI/CD",
    skills: ["Continuous Integration", "Continuous Delivery", "Jenkins", "Git"],
  },
  {
    category: "Programming & Development",
    skills: ["JavaScript", "TypeScript", "Go", "C", "Bash", "Python"],
  },
  {
    category: "Databases & Storage",
    skills: ["MongoDB"],
  },
  {
    category: "Networking & Security",
    skills: ["Firewalls", "Cisco Routers", "Payment Card Processing"],
  },
  {
    category: "Other Technologies",
    skills: ["WordPress", "Software Support", "Azure AI Studio"],
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
