"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)

    alert("Message sent successfully!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-24 max-w-4xl mx-auto border-x border-white/20 px-12" id="contact">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-300">Get In Touch</h2>
          <p className="text-gray-300 text-lg">Have a project in mind? Let's discuss how we can work together.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-black rounded-lg border border-white/20 p-8 space-y-6 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-400">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className=" border border-white/10 text-gray-200 outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-400">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-white/10 text-gray-200 focus:outline-none"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="border-1 border-white/10 focus:outline-none resize-none text-gray-200"
              placeholder="Tell me about your project..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-300 hover:bg-gray-100 text-black font-medium py-3"
            size="lg"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
