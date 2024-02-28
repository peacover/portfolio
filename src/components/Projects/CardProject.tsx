import { TProject } from "@/lib/types/ProjectItems";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const CardProject = ({ project }: { project: TProject }, key: number) => {
  return (
    <div key={key}>
      <Card className="flex flex-col h-full rounded overflow-hidden">
        <div className="relative flex-shrink-0 overflow-hidden rounded">
          <Image
            src={project.image}
            alt={project.name}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-[250px]"
            priority={true}
            aria-label={project.name}
          />
        </div>
        <CardHeader className="flex flex-col flex-grow">
          <CardTitle>{project.name}</CardTitle>
          <CardDescription>
            {project.description?.slice(0, 100).concat("...")}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <Link href={"/projects/" + project.name.toLowerCase()}>
            More Info
          </Link>
          <Button asChild>
            <Link className="" href={project.link} target="_blank">
              Link
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardProject;
