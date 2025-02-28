import PageProject from "@/components/Projects/PageProject";
import projects from "@/lib/constants/projects";
import { TProject } from "@/lib/types/TProject";
import { notFound } from "next/navigation";

const project = async ({ params }: { params: Promise<{ project: string }> }) => {
  const project_param = (await params).project
  const found_project: TProject | undefined = projects.find(
    (project) => project.name.toLowerCase().replaceAll(" ", "-") === project_param
  );
  return (
    <div className="container my-[10rem]">
      {found_project ? <PageProject project={found_project} /> : notFound()}
    </div>
  );
};

export default project;
