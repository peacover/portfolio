import { TProject } from "@/lib/types/TProject";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const CardProject = ({ project }: { project: TProject }, key: number) => {
  return (
    <Card key={key} className="flex flex-col">
      <Image
        src={project.image}
        alt={project.name + " image"}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full rounded-t-md object-cover"
        priority={true}
        aria-label={project.name + " image"}
      />
      <CardHeader className="flex flex-col flex-grow">
        <span className="text-2xl font-bold text-primary dark:text-white">
          {project.name}
        </span>
        <CardDescription className="text-primary dark:text-primary-foreground">
          {project.description?.slice(0, 100).concat("...")}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between mt-auto">
        <Button
          asChild
          variant={"link"}
          className="dark:text-white text-md font-semibold"
        >
          <Link
            href={"/projects/" + project.name.toLowerCase().replaceAll(" ", "-")}
          >
            About
          </Link>
        </Button>
        <Button
          asChild
          variant={"link"}
          className="dark:text-white text-md font-semibold"
        >
          <Link href={project.link} target="_blank">
            Visit
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardProject;
