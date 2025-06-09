import { cn } from "@/lib/utils"
import { useEffect } from "react"
import { useState } from "react"

const navItems = [
  {name: "Home", href: "#Home"},
  {name: "Skills", href: "#Skills"},
  {name: "Projects", href: "#Projects"},
  {name: "Contact", href: "#Contact"},
]

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <nav className={cn("fixed w-full z-40 transistion-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}
    >
      <div className="container flex items-center justify-between mt-2">
        <a href="#hero" className="text-xl font-bold text-foreground flex items-center">
          <span className="relative z-10">
            <span className="text-glow">Ian van der Merwe</span>
          </span>
        </a>

        <div className="flex space-x-12 mr-20">
          {navItems.map((itme, key) => (
            <a key={key} href={itme.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
              {itme.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}