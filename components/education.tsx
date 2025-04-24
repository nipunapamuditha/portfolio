import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const education = [
  {
    degree: "Ontario College Graduate Certificate in Cloud Computing",
    field: "Information Technology (MGPA 3.8)",
    institution: "Loyalist College",
    period: "April 2024 - December 2025",
  },
  {
    degree: "BSc (Hons) in Information Technology",
    field: "Specializing in Computer Systems & Network Engineering",
    institution: "Sri Lanka Institute of Information Technology",
    period: "January 2019 - January 2023",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Education</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                    <CardDescription className="text-lg mt-1">{edu.field}</CardDescription>
                  </div>
                  <Badge variant="outline">{edu.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.institution}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
