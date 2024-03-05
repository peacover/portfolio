import projects from "@/lib/constants/projects";
import CardProject from "./CardProject";
import { Button } from "../ui/button";
import Link from "next/link";
import { TProjectPath } from "@/lib/types/TProject";
import { FaArrowRightLong } from "react-icons/fa6";

const ListProjects = ({ path }: TProjectPath) => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => {
          if (index > 2 && path === "Home") return null;
          return <CardProject key={index} project={project} />;
        })}
      </div>
      {path === "Home" && (
        <div className="flex justify-center">
          <Button
            asChild
            className="p-5 mt-14 text-white dark:text-black text-md bg-accent rounded-full"
            variant={"link"}
          >
            <Link href="/projects">
              See More
              <FaArrowRightLong className="inline ml-2" />
            </Link>
          </Button>
        </div>
      )}
    </>
  );
};

export default ListProjects;
