import { ArrowDown } from "lucide-react"
import PortfolioLogo from "@/assets/PortfolioLogo.svg"

export const HeroSection = () => {
  return (
    <section id="Home" className="relative min-h-screen flex flex-col itmes-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10 mb-20">
        <div className="flex flex-col items-center space-y-6">
          {/* <img src={PortfolioLogo} alt="Logo" className="w-30 h-auto" /> */}

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-1"> Ian </span>
          </h1>

          <span className="text-2xl font-bold ml-2 opacity-0 animate-fade-in-delay-2"> A Software Engineer</span>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed sed consectetur nibh, ac vehicula nisl. 
            Ut tempus urna dictum risus pretium vulputate. Proin quis ultrices lectus. 
            Nullam eget mauris ullamcorper, hendrerit sem vitae, dapibus nisl.
          </p>

          <div className="pt-5 opacity-0 animate-fade-in-delay-4 ">
            <a href="#Projects" className="cosmic-button">Download CV</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-small text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  ) 
}