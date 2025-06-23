import { useState, useEffect } from "react"
import { Github, ExternalLink, ArrowRight, X } from "lucide-react"
import { ProjectDetails } from "./ProjectDetails";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A website that showcase my best work in a portfolio.",
    image: ["/projects/p1-home.png", "/projects/p1-logo.png", "/projects/p1-home.png", "/projects/p1-skills.png", "/projects/p1-projects.png", "/projects/p1-getInTouch.png"],
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
    details: "This website was originally built as an online portfolio item for the minor course Creative Design & Technologies. It functioned as a way for me to showcase my app Planetoria online. After the course a plan to use the portfolio for all my future projects to showcase to employers my skills and competence with development stacks and tools.",
    process: "This project was my first time working with React and TailwindCSS, so I strated small and build the site bit by bit learing along the way. The following section will highlight the main concepts I used to develop this website:",
    router:"I used the React Router to create the main portfolio page and the 404 Not Found page for when anything goes wrong or the users trys to navigate to a page on the website that does not exist",
    components: "React components are amzing. They are reusable, self-cotained pieces of UI, great for building building pieces of your website and then placing them together to for the end result",
    states: "React states lets components keep track of and manage data that can change over time. This allows for creating interactive and dynamic websites. I used a state variable to create the light and dark mode, the variable checks for when the user clicks on the theme toggle and the switched the UI code to the respective theme.",
    tailwindcss: "Tailwind CSS is a super handy utility-first CSS framework that helps you style your websites quickly without writing custom CSS from scratch. Instead of creating separate stylesheets, you just add lots of tiny, reusable classes right in your HTML or JSX. Since you’re also composing styles directly in your markup, it’s easier to see what’s going on without jumping back and forth between files. Basically, Tailwind makes styling feel like putting together Lego blocks"
  },
  {
    id: 2,
    title: "Planetoria",
    description: "An iOS app that helps you stay on track and keep your focus",
    image: ["/projects/project2.png"],
    tags: ["XCode", "Swift", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
    details: "details",
    process: "process"
  },
  {
    id: 3,
    title: "Eco Step",
    description: "A safe place to get your hands on those limited edition kicks",
    image: ["/projects/project3.png"],
    tags: ["JavaScript", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
    details: "details",
    process: "process"
  },
]

export const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedProject])

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
            <div key={key} onClick={() => setSelectedProject(project)} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img src={project.image[0]} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
                    <a href={project.demoUrl} target="_blank" onClick={(e) => e.stopPropagation()} className="text-foreground/80 hover:text-primary transistion-colors duration-300"><ExternalLink size={20}/></a>
                    <a href={project.githubUrl} target="_blank" onClick={(e) => e.stopPropagation()} className="text-foreground/80 hover:text-primary transistion-colors duration-300"><Github size={20} /></a>
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

      <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}