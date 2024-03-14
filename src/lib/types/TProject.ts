export type TProject = {
  name: string;
  description: string;
  image: string;
  link: string;
  images: string[];
  technologies?: string[];
};

export type TProjectPath = {
  path: "Home" | "Projects";
};
