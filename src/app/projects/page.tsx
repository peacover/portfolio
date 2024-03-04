import ListProjects from "@/components/Projects/ListProjects";

const projects = () => {
  return (
    <div className="lg:container my-[8rem]">
      <h1 className="font-bold text-primary text-4xl m-[4rem] pt-[2rem] dark:text-white">
        All Projects
      </h1>
      <ListProjects path="Projects" />
    </div>
    
  );
};

export default projects;
