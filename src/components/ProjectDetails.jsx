import { Github, ExternalLink, X } from "lucide-react";

export const ProjectDetails = ({ project, onClose }) => {
  if(!project) return null;
  console.log("ProjectDetails project:", project);

  return (
    <div className="fixed inset-0 z-50 bg-background/95 flex justify-center items-center">
      <div className="max-w-7xl h-[95vh]  w-[95vw] overflow-hidden relative">
        <button className="absolute top-10 right-20 z-10 text-muted-foreground hover:text-foreground" onClick={onClose} aria-label="Close details">
          <X size={30} />
        </button>

        <div className="h-full overflow-y-auto p-6 space-y-8 scrollbar-custom">
          <img
            src={project.image[1]}
            alt={project.title}
            className="w-full max-h-96 object-contain rounded mb-4"
          />

          <div>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">
              {project.details}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">Development Process</h3>
            <p className="text-foreground text-sm">{project.process}</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg mb-1">-Router-</h3>
              <p className="text-foreground text-sm max-w-md mx-auto">{project.router}</p>
            </div>

            <div>
              <h3 className="text-lg mb-1">-Components-</h3>
              <p className="text-foreground text-sm leading-relaxed max-w-md mx-auto">{project.components}</p>
            </div>

            <div>
              <h3 className="text-lg mb-1">-States-</h3>
              <p className="text-foreground text-sm max-w-md mx-auto">{project.states}</p>
            </div>

            <div>
              <h3 className="text-lg mb-1">-TailwindCSS-</h3>
              <p className="text-foreground text-sm max-w-md mx-auto">{project.tailwindcss}</p>
            </div>
          </div>

          {project.image?.length > 1 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Screenshots</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.image.slice(2).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Screenshot ${idx + 1}`}
                    className="w-full max-h-100 object-contain rounded mb-4"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex space-x-4 mt-6">
            <a
              href={project.demoUrl}
              target="_blank"
              className="text-primary font-medium hover:underline flex items-center gap-1"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              className="text-primary font-medium hover:underline flex items-center gap-1"
            >
              <Github size={18} />
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}