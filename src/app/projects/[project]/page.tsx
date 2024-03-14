import PageProject from "@/components/Projects/PageProject";
import projects from "@/lib/constants/projects";
import { TProject } from "@/lib/types/TProject";
import { notFound } from "next/navigation";

const project = ({ params }: { params: { project: string } }) => {
  const found_project: TProject | undefined = projects.find(
    (project) => project.name.toLowerCase().replaceAll(" ", "-") === params.project
  );
  return (
    <div className="container my-[10rem]">
      {found_project ? <PageProject project={found_project} /> : notFound()}
    </div>
  );
};

export default project;
