export type TProject = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  link?: string;
  github: string;
  images: string[];
  technologies?: string[];
};

export type TProjectPath = {
  path: "Home" | "Projects";
};
