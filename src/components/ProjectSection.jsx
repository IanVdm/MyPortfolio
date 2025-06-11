import { Github, ExternalLink, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A website that showcase my best work in a portfolio.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Planetoria",
    description: "An iOS app that helps you stay on track and keep your focus",
    image: "/projects/project2.png",
    tags: ["XCode", "Swift", "Supabase"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Eco Step",
    description: "A safe place to get your hands on those limited edition kicks",
    image: "/projects/project3.png",
    tags: ["JavaScript", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "#"
  },
]

export const ProjectSection = () => {
  return (
    <section id="Projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-gradient"> Projects</span></h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experiance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border-2 rounded-full bg-secondary text-sencondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-5">{project.description}</p>

                <div className="flex justify-between itmes-center">
                  <div className="flex space-x-3">
                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transistion-colors duration-300"><ExternalLink size={20}/></a>
                    <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transistion-colors duration-300"><Github size={20} /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/IanVdm" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">Checkout my GitHub <ArrowRight size={16}/></a>
        </div>
      </div>
    </section>
  )
}