// Component imports
import { ThemeToggle } from "../components/ThemeToggle"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { SkillsSection } from "../components/SkillsSection"

export const Home = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    {/* Theme Toggle */}
    <ThemeToggle />

    {/* Background Effects */}

    {/* Navbar */}
    <NavBar />

    {/* Main Content */}
    <main>
      <HeroSection />
      <SkillsSection />
    </main>

    {/* Footer */}

  </div>
}