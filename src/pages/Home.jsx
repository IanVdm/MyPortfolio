// Component imports
import { ThemeToggle } from "../components/ThemeToggle"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { SkillsSection } from "../components/SkillsSection"
import { StarBackground } from "../components/StarBackground"
import { ProjectSection } from "../components/ProjectSection"
import { ContactSection } from "../components/ContactSection"

export const Home = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    {/* Theme Toggle */}
    <ThemeToggle />

    {/* Background Effects */}
    <StarBackground />

    {/* Navbar */}
    <NavBar />

    {/* Main Content */}
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </main>

    {/* Footer */}

  </div>
}