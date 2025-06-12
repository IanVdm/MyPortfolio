import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react"
import { cn } from "@/lib/utils"

export const ContactSection = () => {
  return (
    <section id="Contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-gradient"> Touch</span></h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaberate? Feel free to reach out.
          I'm always open to new and exsiting opportunities :)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center space-y-8">
            <h3 className="text-2xl font-semibold mb-10">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary"/>
                </div>
                <div>
                  <h4 className="font-mdium"> Email</h4>
                  <a href="mailto:hello@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">ian@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary"/>
                </div>
                <div>
                  <h4 className="font-mdium"> Phone</h4>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">+ 01 234 567 89</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary"/>
                </div>
                <div>
                  <h4 className="font-mdium"> Location</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">Laren, LX, Netherlands</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank"><Linkedin /></a>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-5 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>

            <form action="" className="sapce-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 mb-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Bob Joans..." />

                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 mb-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="you@gmail.com..." />

                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Your message..." />
              </div>

              <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2 mt-4",

              )}>
                Send Message
                <Send size={16}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}