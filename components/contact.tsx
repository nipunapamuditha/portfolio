"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError("")

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitError("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <Card className="border border-gray-200 dark:border-gray-800 h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Contact Information</CardTitle>
                <CardDescription>Feel free to reach out to me through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      666 Brimley Rd, Scarborough, ON
                      <br />
                      M1J 1B9, Canada
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                    <a
                      href="mailto:nipunak99@gmail.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      nipunak99@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                    <a
                      href="tel:+14373762044"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      +1 (437) 376-2044
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Send Me a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={16} />
                        Send Message
                      </span>
                    )}
                  </Button>
                  {submitSuccess && (
                    <p className="text-green-600 dark:text-green-400 text-center mt-2">
                      Your message has been sent successfully!
                    </p>
                  )}
                  {submitError && <p className="text-red-600 dark:text-red-400 text-center mt-2">{submitError}</p>}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
