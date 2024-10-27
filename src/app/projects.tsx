import "./projects.css"; // Updated to match the file name you mentioned
import Image from "next/image";

interface Project {
  image: string;
  name: string;
  description: string;
}

interface ProjectsListProps {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <section id="projects" className="Psection">
      <div className="Pcontainer">
        <h2 className="Ptitle">My Projects</h2>
        <div className="Pgrid">
          {projects.map((project, index) => (
            <div key={index} className="Pcard">
              <Image 
                src={project.image} 
                alt={project.name} 
                width={600} 
                height={300} 
                className="PcardImage" 
              />
              <div className="PcardContent">
                <h3 className="text-xl font-bold text-blue-900">{project.name}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
