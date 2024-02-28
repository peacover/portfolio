import projects from "@/lib/constants/projects";
import CardProject from "./CardProject";

const ListProjects = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => {
        return <CardProject key={index} project={project} />;
      })}
    </div>
  );
};

export default ListProjects;
