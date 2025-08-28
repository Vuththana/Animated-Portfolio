import { useState } from "react";
interface Project {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
    techStack: string[];
    githubUrl: string;
  }
// --- STEP 1: Define your project data ---
const projects:Project[] = [
  {
    id: 1,
    title: "DiscordServerStatus Plugin",
    imageUrl: "https://assets.mofoprod.net/network/images/discord.original_O7AzcAH.jpg",
    description: "A minecraft plugin made for fun just to execute simple commands, more features might be adding soon...",
    techStack: ["Java, JDA"],
    githubUrl: "https://github.com/Vuththana/DiscordServerStatus"
  },
  {
    id: 2,
    title: "Inventory Management System",
    imageUrl: "https://i.imgur.com/QSLRm5s.png",
    description: "A modern Inventory Management System (IMS) built with Laravel, React (via Inertia.js), and Filament. This project was created as part of my Project Practicum.",
    techStack: ["Laravel", "Tailwind", "React(Inertia.JS)", "Filament"],
    githubUrl: "https://github.com/Vuththana/IMS-For-Project-Practicum"
  },
  {
    id: 3,
    title: "Bone Network Website",
    imageUrl: "https://i.imgur.com/laxR75J.png",
    description: "A minecraft website that I've built for my own server.",
    techStack: ["React.JS, Shadcn UI"],
    githubUrl: "https://github.com/Vuththana/bone-website"
  },
  {
    id: 4,
    title: "Shoppie V2 Ecommerce Website",
    imageUrl: "https://i.imgur.com/laxR75J.png",
    description: "An e-commerce website that was half done, was a fun project to contribute with my developer friends.",
    techStack: ["Laravel", "Tailwind", "React(Inertia.JS)", "Filament"],
    githubUrl: "https://github.com/Vuththana/shoppie-v2"
  },
];


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section
      id="projects"
      className="min-h-screen snap-center flex flex-col items-center justify-center py-12 px-4 sm:px-8"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between gap-8">
        <div className="flex justify-center md:justify-start md:flex-1">
          <ul className="flex md:flex-col flex-wrap gap-4 md:gap-6 justify-center items-center">
            {projects.map((project) => (
              <li key={project.id} onClick={() => handleProjectClick(project)}>
                <span
                  className={`text-lg sm:text-4xl lg:text-6xl font-bold cursor-pointer relative ${
                    selectedProject.id === project.id
                      ? "text-white"
                      : "text-transparent hover:text-white"
                  }`}
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  {project.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center md:flex-1">
          {selectedProject && (
            <div className="w-full max-w-md md:max-w-lg border border-[#1c1c21] rounded-xl p-4 sm:p-6 bg-[#0e0e10]">
              <img
                className="mx-auto w-full rounded-lg object-cover aspect-video" // Use a real screenshot
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
              />
              <h1 className="text-lg sm:text-2xl font-semibold mt-4">
                {selectedProject.title}
              </h1>
              <p className="text-sm sm:text-base mt-2 text-gray-300">
                {selectedProject.description}
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="bg-gray-700 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-5 flex gap-4">
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600">
                  Source Code
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}