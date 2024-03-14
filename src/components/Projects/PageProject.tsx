import { TProject } from "@/lib/types/TProject";
import CardStack from "./CardStack";

const PageProject = ({ project }: { project: TProject }) => {
  return (
    <div className="container flex flex-col items-center lg:flex-row-reverse gap-[4rem]">
      <div className="lg:w-1/2 lg:flex lg:justify-center lg:items-center ">
        <CardStack
          images={project.images?.length < 1 ? [project.image] : project.images}
        />
      </div>
      <div className="lg:w-1/2">
        <h1 className="text-4xl my-7 font-bold text-primary dark:text-white">
          {project.name}
        </h1>
        <p className="text-primary dark:text-primary-foreground">
          {project.description}
        </p>
        <h2 className="text-2xl mt-4 font-semibold text-primary dark:text-white">
          Technologies
        </h2>
        <ul className="list-disc list-inside text-primary dark:text-primary-foreground mt-4">
          {project.technologies?.map((tech, index) => (
            <li className="ml-4" key={index}>
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href={project.link}
            target="_blank"
            className="text-lg font-semibold text-primary dark:text-white"
          >
            Visit
          </a>
          <a
            href={project.link}
            target="_blank"
            className="text-lg font-semibold text-primary dark:text-white"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageProject;
